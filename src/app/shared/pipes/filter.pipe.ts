import {Pipe, PipeTransform} from '@angular/core';
import {Bike} from '../models/product.model';

@Pipe({
  standalone: true,
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(bikeList: Bike[], query: string | undefined | null, param = 'id'): Bike[] {
    if (!bikeList.length || !query) {
      return bikeList;
    }

    return bikeList.filter(bike => {
      const bikeParam = bike[param]?.toString();
      return bikeParam?.toLowerCase().startsWith(query.toLowerCase());
    });
  }

}
