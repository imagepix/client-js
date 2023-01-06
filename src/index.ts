export type OutputFormat = 'jpeg' | 'png' | 'webp' | 'gif'
export type Gravity = 'c' | 'n' | 'e' | 's' | 'w' | 'ne' | 'se' | 'sw' | 'nw'

export type ResizeToFitParams = {
  width: number
  height: number
  format: OutputFormat
  quality: number
}

export type ResizeToFillParams = ResizeToFitParams & {
  gravity: Gravity
}

export type Options = {
  subdomain?: string
}

export function getResizeToFitUrl(path: string, params: ResizeToFitParams, options?: Options): string {
  const { width, height, format, quality } = params

  return `${getBaseUrl(options)}/fit/${width}/${height}/${format}/${quality}/${path}`
}

export function getResizeToFillUrl(path: string, params: ResizeToFillParams, options?: Options): string {
  const { width, height, gravity, format, quality } = params

  return `${getBaseUrl(options)}/fit/${width}/${height}/${gravity}/${format}/${quality}/${path}`
}

function getBaseUrl(options?: Options) {
  const subdomain = options?.subdomain ?? process.env.IMAGEPIX_SUBDOMAIN
  if (subdomain) {
    return `https://${subdomain}.imagepix.app`
  }

  throw 'Require subdomain.'
}
