[![CI](https://github.com/s12m/imagepix-client/actions/workflows/ci.yml/badge.svg)](https://github.com/s12m/imagepix-client/actions/workflows/ci.yml)
[![License](https://img.shields.io/npm/l/@imagepix/client.svg?style=flat-square)]()
[![NPM Version](https://badge.fury.io/js/%40imagepix%2Fclient.svg)](https://www.npmjs.com/@imagepix/client)

# imagepix client

Resize and convert images dynamically using imagepix.

## Getting Started

### Installation

```console
npm install @imagepix/client
```

### Usage

#### Resize to fit

Get imagepix url to resize image keep aspect ratio.

```ts
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

```ts
getResizeToFitUrl('sample/landscape.png', {
  width: 300,
  height: 300,
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

imagepix client is licensed under a [MIT License](./LICENSE)
