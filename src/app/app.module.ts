import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { TextEllipsePipe } from './utilsMethod.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    TextEllipsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
