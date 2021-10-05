import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'sortBookTitle'
})
export class SortBookTitlePipe implements PipeTransform {

  transform(_booksList: Content[], ...args: Content[]) {
    return _booksList.filter(_booksList => _booksList.showOnList == true);
  }

}
