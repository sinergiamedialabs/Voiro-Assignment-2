function checkWordLenght(name: any, fontFamilyName: any) {
  let context: any = document.createElement('canvas').getContext('2d');
  context.font = fontFamilyName || getComputedStyle(document.body).font;
  return context.measureText(name).width
}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textEllipse' })
export class TextEllipsePipe implements PipeTransform {
  transform(value: any, contWidth: any, fontFamilyName: any): any {
    console.log(value);
    var ellipsedText = '';
    var totalWidth = checkWordLenght(value, fontFamilyName);
    var textCount = (contWidth * value.split("").length);

    if (value.split("").length < contWidth * 0.17) { ellipsedText = value; }
    else {
      var ellipsedText = value.substring(0, (textCount / totalWidth) - 10) + '...' + value.slice(value.length - 3);
    }
    return ellipsedText;
  }
}
