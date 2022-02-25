# url2file
> Make url to local file.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/url2file
```

## usage
```js
import url2file from '@jswork/url2file';

url2file([
  'https://fasimi.com/',
  'https://fasimi.com/filters/series.html',
  'https://fasimi.com/filters/movie.html'
], { 
  dst: '.tmp', 
  header: ['<!---abc --->'].join('\n'), 
  footer: ['\n<!--footer-->'].join('\n') 
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/url2file/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/url2file
[version-url]: https://npmjs.org/package/@jswork/url2file

[license-image]: https://img.shields.io/npm/l/@jswork/url2file
[license-url]: https://github.com/afeiship/url2file/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/url2file
[size-url]: https://github.com/afeiship/url2file/blob/master/dist/url2file.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/url2file
[download-url]: https://www.npmjs.com/package/@jswork/url2file
