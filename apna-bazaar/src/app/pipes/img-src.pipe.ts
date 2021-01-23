import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {

  transform(src: string): string {
    if(src.startsWith('/static'))
      src = src.replace('/static', '/assets');
    return src;
  }

}
