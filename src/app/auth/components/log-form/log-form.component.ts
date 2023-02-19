import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Params, Router} from "@angular/router";
import {LogService} from "../../service/log.service";
import {Login} from "../../../shared/interfaces/login";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit{
  form: FormGroup
  submitted: boolean = false
  message: string
  constructor(private router: Router, private logService: LogService) { }
  ngOnInit() {
    this.setForm()

  }

  setForm(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  addForm() {
    if(this.form.invalid){
      return
    }
    this.submitted = true
    const user: Login = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.logService.logIn(user).subscribe( () =>{
      this.form.reset()
      this.router.navigate(['/'])
      this.submitted = false
    }, error => this.submitted = false)
  }
}
