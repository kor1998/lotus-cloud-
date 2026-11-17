/** The screens every page is tested on: small phone to 4K monitor. `touch` devices also get tap-target checks. */
export interface Device {
  name: string
  width: number
  height: number
  touch: boolean
}

export const DEVICES: Device[] = [
  { name: 'Small phone', width: 360, height: 640, touch: true },
  { name: 'iPhone SE', width: 375, height: 667, touch: true },
  { name: 'iPhone 14', width: 390, height: 844, touch: true },
  { name: 'Large phone', width: 430, height: 932, touch: true },
  { name: 'iPad portrait', width: 768, height: 1024, touch: true },
  { name: 'iPad landscape', width: 1024, height: 768, touch: true },
  { name: 'Laptop', width: 1280, height: 720, touch: false },
  { name: 'MacBook', width: 1440, height: 900, touch: false },
  { name: 'Full HD monitor', width: 1920, height: 1080, touch: false },
  { name: '27-inch QHD', width: 2560, height: 1305, touch: false },
  { name: 'Ultrawide', width: 3440, height: 1300, touch: false },
  { name: '4K monitor', width: 3840, height: 2000, touch: false },
]

/** Every page in the site. */
export const ROUTES = [
  '/', '/platforms', '/academy', '/training', '/docs', '/services', '/industries', '/research', '/about', '/contact', '/start', '/login',
  '/products/padma', '/products/padma-legal', '/products/healthaura', '/products/quickform', '/drive', '/products/concierge',
  '/products/smart-receipt', '/products/srm-eventhub', '/privacy', '/terms',
]
