import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss'],

})
export class ImageBlockComponent {

  @Output() closesImage: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() imageSrc: string


  close(value: boolean) {
    this.closesImage.emit(value)
    document.body.style.overflow = ''
  }
}
