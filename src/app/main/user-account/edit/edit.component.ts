import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {SettingPhoto, Users} from "../../../shared/interfaces/contacts";
import {DomSanitizer} from "@angular/platform-browser";
import {People} from "../../../shared/interfaces/allBlogs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user: Users
  photo: string
  coverPhoto: string
  showSettAbout: boolean
  showSettimgPhoto: boolean = false

  photoCh: string
  photoToSett: SettingPhoto[]

  fullName: string
  birthday: string
  mobilePhone: number
  sex: string

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.userService.userInfo
  }

  getSetPhoto(url: string): void {
    this.userService.getPhotoToSetting(url).subscribe((res) => {
      this.photoToSett = Object.values(res)
    })
  }

  takePhoto(src: string): void {
    this.photo = src

  }

  takeCoverPhoto(src: string): void {
    this.coverPhoto = src
  }

  closeSettBlock(val: boolean): void {
    this.showSettimgPhoto = val
  }

  save(): void {
    const newUser: Users = {
      ...this.user,
      img: this.photo,
      imgCover: this.coverPhoto,
      about: [
        {
          ...this.user.about[0],
          fullName: this.fullName,
          sex: this.sex,
          date: this.birthday,
          mobilePhone: this.mobilePhone,

        }
      ]
    }

    this.userService.changeSettingUser(newUser).subscribe(res => {
     this.router.navigate(['/'])
       // location.reload()
    })
  }
}
