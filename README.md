[![CI](https://github.com/s12m/imagepix-client/actions/workflows/ci.yml/badge.svg)](https://github.com/s12m/imagepix-client/actions/workflows/ci.yml)
[![License](https://img.shields.io/npm/l/@imagepix/client.svg?style=flat-square)]()
[![NPM Version](https://badge.fury.io/js/%40imagepix%2Fclient.svg)](https://www.npmjs.com/@imagepix/client)

# imagepix client

Resize, crop and convert images dynamically using imagepix.

## Links

- [imagepix](https://imagepix.app)
- [TypeDoc](https://imagepix.github.io/client-js/)

## Getting Started

### Installation

```sh
npm install @imagepix/client
```

### Usage

#### Resize to fit

Get an imagepix url to resize image keep aspect ratio.

```js
import { getResizeToFitUrl } from '@imagepix/client'
getResizeToFitUrl('sample/landscape.png', {
  width: 300,
  height: 300,
  format: 'webp',
  quality: 80
}, { subdomain: 'demo' })
```

https://demo.imagepix.app/fit/300/300/webp/80/sample/landscape.png

When you set environment variable `IMAGEPIX_SUBDOMAIN`, you can also write following:

```js
getResizeToFitUrl('sample/landscape.png', {
  width: 300,
  height: 300,
  format: 'webp',
  quality: 80
})
```

#### Resize to fill

Get an imagepix url to resize and crop image.

```js
import { getResizeToFillUrl } from '@imagepix/client'
getResizeToFillUrl('sample/landscape.png', {
  width: 300,
  height: 300,
  gravity: 'c',
  format: 'webp',
  quality: 80
}, { subdomain: 'demo' })
```

https://demo.imagepix.app/fill/300/300/c/webp/80/sample/landscape.png

When you set environment variable `IMAGEPIX_SUBDOMAIN`, you can also write following:

```js
getResizeToFillUrl('sample/landscape.png', {
  width: 300,
  height: 300,
  gravity: 'c',
  format: 'webp',
  quality: 80
})
```

#### Resize to fill_pad

Get an imagepix url to resize image and fill background.

```js
import { getResizeToFillPadUrl } from '@imagepix/client'
getResizeToFillPadUrl('sample/landscape.png', {
  width: 300,
  height: 300,
  gravity: 'c',
  background: 'red',
  format: 'webp',
  quality: 80
}, { subdomain: 'demo' })
```

https://demo.imagepix.app/fill_pad/300/300/c/red/webp/80/sample/landscape.png

When you set environment variable `IMAGEPIX_SUBDOMAIN`, you can also write following:

```js
getResizeToFillPadUrl('sample/landscape.png', {
  width: 300,
  height: 300,
  gravity: 'c',
  background: 'red',
  format: 'webp',
  quality: 80
})
```

## Supported format

### Input

- `jpeg`
- `png`
- `webp`
- `gif`

### Output

- `jpeg`
- `png`
- `webp`
- `gif`

## License

imagepix client is licensed under a [MIT License](./LICENSE).
