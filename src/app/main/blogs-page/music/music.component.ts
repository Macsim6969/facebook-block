import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit{
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('https://v1.nocodeapi.com/macs6565/spotify/HVMIkBaSqJMcrQIr/recentlyPlayed').subscribe(res =>{
      console.log(res)
    })
  }

}
