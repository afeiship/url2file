import fn from '../src';
import fs from 'fs';

describe('api.basic', () => {
  test('normail single value case', (done) => {
    fn([
      'https://fasimi.com/',
      'https://fasimi.com/filters/series.html',
      'https://fasimi.com/filters/movie.html'
    ]).then((res) => {
      expect(fs.existsSync('dist/index.html')).toBe(true);
      expect(fs.existsSync('dist/filters/series.html')).toBe(true);
      expect(fs.existsSync('dist/filters/movie.html')).toBe(true);
      done();
    });
  });
});
