import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SettingPhoto} from "../../../../../shared/interfaces/contacts";

@Component({
  selector: 'app-setting-photo',
  templateUrl: './setting-photo.component.html',
  styleUrls: ['./setting-photo.component.scss']
})
export class SettingPhotoComponent {
  @Input() photo: SettingPhoto[]
  @Input() photoCh: string
  @Output() changedPhoto: EventEmitter<string> = new EventEmitter<string>()
  @Output() changedCoverPhoto: EventEmitter<string> = new EventEmitter<string>()
  @Output() closeBlock: EventEmitter<boolean> = new EventEmitter<boolean>()

  close(): void{
    this.closeBlock.emit(false)
  }
  take(src: string): void {
    if(this.photoCh === "1"){
      this.changedPhoto.emit(src)
      this.close()
    } else {
      this.changedCoverPhoto.emit(src)
      this.close()
    }
  }
}
