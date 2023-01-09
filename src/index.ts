/**
 * Supported output formats.
 */
export type OutputFormat = 'jpeg' | 'png' | 'webp' | 'gif'

/**
 * Gravity positions for crops.
 *
 * * `c` Center (x: center, y: center)
 * * `n` North (x: center, y: top)
 * * `e` East (x: right, y: center)
 * * `s` South (x: center, y: bottom)
 * * `w` West (x: left, y: center)
 * * `ne` North East (x: right, y: top)
 * * `se` South East (x: right, y: bottom)
 * * `sw` South West (x: left, y: bottom)
 * * `nw` North West (x: left, y: top)
 */
export type Gravity = 'c' | 'n' | 'e' | 's' | 'w' | 'ne' | 'se' | 'sw' | 'nw'

/**
 * Parameters to resize images keep aspect ratio.
 */
export interface ResizeToFitParams {
  /**
   * Allowed from 1 to 1920.
   */
  width: number

  /**
   * Allowed from 1 to 1920.
   */
  height: number

  format: OutputFormat

  /**
   * Allowed from 1 to 100.
   */
  quality: number
}

/**
 * Parameters to resize and crop images.
 */
export interface ResizeToFillParams extends ResizeToFitParams {
  gravity: Gravity
}

/**
 * Parameters to resize images and fill background.
 */
export interface ResizeToFillPadParams extends ResizeToFillParams {
  /**
   * CSS colors. For example, `red`, `#123456` and `rgba(64,128,255,0.5)`.
   */
  background: string
}

/**
 * Options to define imagepix base url. When you set environment variable `IMAGEPIX_SUBDOMAIN`, you don't need this.
 */
export interface Options {
  subdomain?: string
}

/**
 * Get an imagepix url to resize image keep aspect ratio.
 *
 * @param path When you have `s3://your-bucket-name/uploads/sample.png`, path is `uploads/sample.png`.
 * @param params
 * @param options
 * @returns imagepix url
 */
export function getResizeToFitUrl(path: string, params: ResizeToFitParams, options?: Options): string {
  const { width, height, format, quality } = params

  return `${getBaseUrl(options)}/fit/${width}/${height}/${format}/${quality}/${path}`
}

/**
 * Get an imagepix url to resize and crop image.
 *
 * @param path When you have `s3://your-bucket-name/uploads/sample.png`, path is `uploads/sample.png`.
 * @param params
 * @param options
 * @returns imagepix url
 */
export function getResizeToFillUrl(path: string, params: ResizeToFillParams, options?: Options): string {
  const { width, height, gravity, format, quality } = params

  return `${getBaseUrl(options)}/fill/${width}/${height}/${gravity}/${format}/${quality}/${path}`
}

/**
 * Get an imagepix url to resize image and fill background.
 *
 * @param path When you have `s3://your-bucket-name/uploads/sample.png`, path is `uploads/sample.png`.
 * @param params
 * @param options
 * @returns imagepix url
 */
export function getResizeToFillPadUrl(path: string, params: ResizeToFillPadParams, options?: Options): string {
  const { width, height, gravity, background, format, quality } = params

  return `${getBaseUrl(options)}/fill_pad/${width}/${height}/${gravity}/${encodeURIComponent(
    background
  )}/${format}/${quality}/${path}`
}

function getBaseUrl(options?: Options) {
  const subdomain = options?.subdomain ?? process.env.IMAGEPIX_SUBDOMAIN
  if (subdomain) {
    return `https://${subdomain}.imagepix.app`
  }

  throw 'Require subdomain.'
}
