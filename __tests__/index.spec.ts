import fn from '../src';
import fs from 'fs';

describe('api.basic', () => {
  test('normail single value case', (done) => {
    fn(
      [
        'https://fasimi.com/',
        'https://fasimi.com/filters/series.html',
        'https://fasimi.com/filters/movie.html'
      ],
      { dst: '.tmp', header: ['<!---abc --->'].join('\n'), footer: ['\n<!--footer-->'].join('\n') }
    ).then((res) => {
      expect(fs.existsSync('.tmp/index.html')).toBe(true);
      expect(fs.existsSync('.tmp/filters/series.html')).toBe(true);
      expect(fs.existsSync('.tmp/filters/movie.html')).toBe(true);
      done();
    });
  });
});
