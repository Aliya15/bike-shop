import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform<T extends Record<string, unknown>>(
    list: T[],
    query: string | undefined | null,
    param: keyof T
  ): T[] {
    if (!list.length || !query) {
      return list;
    }

    return list.filter(listItem => {
      const itemParam = listItem[param]?.toString();
      return itemParam?.toLowerCase().startsWith(query.toLowerCase());
    });
  }
}
