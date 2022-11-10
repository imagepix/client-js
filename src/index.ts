export type OutputFormat = 'jpeg' | 'png' | 'webp' | 'gif'

export type ResizeToFitParams = {
  width: number
  height: number
  format: OutputFormat
  quality: number
}

export type Options = {
  subdomain?: string
}

export function getResizeToFitUrl(path: string, params: ResizeToFitParams, options?: Options) {
  const { width, height, format, quality } = params

  return `${getBaseUrl(options)}/fit/${width}/${height}/${format}/${quality}/${path}`
}

function getBaseUrl(options?: Options) {
  const subdomain = options?.subdomain ?? process.env.IMAGEPIX_SUBDOMAIN
  if (subdomain) {
    return `https://${subdomain}.imagepix.app`
  }

  throw 'Require subdomain.'
}
