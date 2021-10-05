import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'sortBookTitle'
})
export class SortBookTitlePipe implements PipeTransform {

  transform(_booksList: Content[], type: Content[]) {
    return _booksList.filter(book => _booksList.showOnList?.includes(type));
  }

}
