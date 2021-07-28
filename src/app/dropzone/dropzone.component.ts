import { Component, OnInit, HostListener } from "@angular/core";
import { ImageCroppedEvent, LoadedImage } from "ngx-image-cropper";

@Component({
  selector: 'dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})

export class DropzoneComponent implements OnInit {
  error: string = '';
  dragAreaClass: string = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  isImageDropeed: boolean = false;
  isImageSaved: boolean = false;
  fileName: string = '';

  ellipseEgString: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"

  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    let files: FileList = event.dataTransfer.files;
    this.fileName = files[0].name;
    this.imageChangedEvent = { target: { files: [files[0]] } }
    this.isImageDropeed = true;

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
}