import {
  ResizeToFitParams,
  getResizeToFitUrl,
  ResizeToFillParams,
  getResizeToFillUrl,
  ResizeToFillPadParams,
  getResizeToFillPadUrl,
} from '../src'

describe('getResizeToFitUrl', () => {
  const params: ResizeToFitParams = {
    width: 320,
    height: 180,
    format: 'webp',
    quality: 80,
  }

  describe('subdomain', () => {
    describe('when set subdomain option', () => {
      it('returns imagepix url', () => {
        const url = getResizeToFitUrl('uploads/test.png', params, {
          subdomain: 'test',
        })
        expect(url).toBe('https://test.imagepix.app/fit/320/180/webp/80/uploads/test.png')
      })
    })

    describe('when set subdomain environment variable', () => {
      beforeEach(() => {
        process.env.IMAGEPIX_SUBDOMAIN = 'test'
      })

      afterEach(() => {
        delete process.env.IMAGEPIX_SUBDOMAIN
      })

      it('returns imagepix url', () => {
        const url = getResizeToFitUrl('uploads/test.png', params)
        expect(url).toBe('https://test.imagepix.app/fit/320/180/webp/80/uploads/test.png')
      })
    })

    describe('when not set subdomain', () => {
      it('throws error', () => {
        expect(() => {
          getResizeToFitUrl('uploads/test.png', params)
        }).toThrowError()
      })
    })
  })
})

describe('getResizeToFillUrl', () => {
  const params: ResizeToFillParams = {
    width: 320,
    height: 180,
    gravity: 'c',
    format: 'webp',
    quality: 80,
  }

  describe('subdomain', () => {
    describe('when set subdomain option', () => {
      it('returns imagepix url', () => {
        const url = getResizeToFillUrl('uploads/test.png', params, {
          subdomain: 'test',
        })
        expect(url).toBe('https://test.imagepix.app/fill/320/180/c/webp/80/uploads/test.png')
      })
    })

    describe('when set subdomain environment variable', () => {
      beforeEach(() => {
        process.env.IMAGEPIX_SUBDOMAIN = 'test'
      })

      afterEach(() => {
        delete process.env.IMAGEPIX_SUBDOMAIN
      })

      it('returns imagepix url', () => {
        const url = getResizeToFillUrl('uploads/test.png', params)
        expect(url).toBe('https://test.imagepix.app/fill/320/180/c/webp/80/uploads/test.png')
      })
    })

    describe('when not set subdomain', () => {
      it('throws error', () => {
        expect(() => {
          getResizeToFitUrl('uploads/test.png', params)
        }).toThrowError()
      })
    })
  })
})

describe('getResizeToFillPadUrl', () => {
  const params: ResizeToFillPadParams = {
    width: 320,
    height: 180,
    gravity: 'c',
    background: 'red',
    format: 'webp',
    quality: 80,
  }

  describe('subdomain', () => {
    describe('when set subdomain option', () => {
      it('returns imagepix url', () => {
        const url = getResizeToFillPadUrl('uploads/test.png', params, {
          subdomain: 'test',
        })
        expect(url).toBe('https://test.imagepix.app/fill_pad/320/180/c/red/webp/80/uploads/test.png')
      })
    })

    describe('when set subdomain environment variable', () => {
      beforeEach(() => {
        process.env.IMAGEPIX_SUBDOMAIN = 'test'
      })

      afterEach(() => {
        delete process.env.IMAGEPIX_SUBDOMAIN
      })

      it('returns imagepix url', () => {
        const url = getResizeToFillPadUrl('uploads/test.png', params)
        expect(url).toBe('https://test.imagepix.app/fill_pad/320/180/c/red/webp/80/uploads/test.png')
      })
    })

    describe('when not set subdomain', () => {
      it('throws error', () => {
        expect(() => {
          getResizeToFitUrl('uploads/test.png', params)
        }).toThrowError()
      })
    })
  })
})
