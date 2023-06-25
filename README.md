# file64

[![NPM](https://nodei.co/npm/file64.png)](https://nodei.co/npm/file64/)

[![NPM version](https://img.shields.io/npm/v/file64.svg)](https://www.npmjs.com/package/file64)
[![build](https://github.com/encrypit/file64/actions/workflows/build.yml/badge.svg)](https://github.com/encrypit/file64/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/encrypit/file64/branch/master/graph/badge.svg?token=IKmG72W8c6)](https://codecov.io/gh/encrypit/file64)

Convert [Base64](https://developer.mozilla.org/docs/Glossary/Base64) to [Blob](https://javascript.info/blob)/File and Blob/File to Base64.

## Installation

[NPM](https://www.npmjs.com/package/file64):

```sh
npm install file64
```

[Yarn](https://yarnpkg.com/package/file64):

```sh
yarn add file64
```

## Usage

Convert Base64 to Blob:

```ts
import { base64ToBlob } from 'file64';

const blob = await base64ToBlob('data:text/plain;base64,YQ==');
```

Convert Base64 to File:

```ts
import { base64ToFile } from 'file64';

const file = await base64ToFile('data:text/plain;base64,YQ==', 'file.txt');
```

Convert Blob to Base64:

```ts
import { blobToBase64 } from 'file64';

const blob = new Blob(['a'], { type: 'text/plain' });
const base64 = await blobToBase64(blob);
```

Convert File to Base64:

```ts
import { fileToBase64 } from 'file64';

const file = new File(['a'], 'file.txt', { type: 'text/plain' });
const base64 = await fileToBase64(file);
```

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/encrypit/file64/blob/master/LICENSE)
