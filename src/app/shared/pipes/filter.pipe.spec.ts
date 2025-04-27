import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('should handle empty list', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform([], 'tt', 'id')).toEqual([]);
  });

  it('should handle undefined query param', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform([{ id: 11 }], undefined, 'id')).toEqual([{ id: 11 }]);
  });

  it('should filter an array and return a matched element', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform([{ id: 11 }, { id: 22 }], '11', 'id')).toEqual([
      { id: 11 },
    ]);
  });

  it('should filter an array and return 2 matched elements', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform([{ id: 11 }, { id: 11123221 }], '11', 'id')).toEqual([
      { id: 11 },
      { id: 11123221 },
    ]);
  });
});
