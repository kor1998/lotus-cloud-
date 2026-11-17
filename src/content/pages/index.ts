import type { PageData } from './types'

/*
  Every content page, loaded on demand: a visitor only downloads the page they open.
  Contact, Login and the 404 page are special and live in src/pages.
*/
export const PAGE_LOADERS: Record<string, () => Promise<PageData>> = {
  '/platforms': () => import('./platforms').then((m) => m.platforms),
  '/academy': () => import('./academy').then((m) => m.academy),
  '/training': () => import('./training').then((m) => m.training),
  '/services': () => import('./services').then((m) => m.services),
  '/industries': () => import('./industries').then((m) => m.industries),
  '/research': () => import('./research').then((m) => m.research),
  '/about': () => import('./about').then((m) => m.about),
  '/start': () => import('./start').then((m) => m.start),
  '/docs': () => import('./docs').then((m) => m.docs),
  '/products/padma': () => import('./padma').then((m) => m.padma),
  '/products/padma-legal': () => import('./padmaLegal').then((m) => m.padmaLegal),
  '/products/healthaura': () => import('./healthaura').then((m) => m.healthaura),
  '/products/quickform': () => import('./quickform').then((m) => m.quickform),
  '/drive': () => import('./drive').then((m) => m.drive),
  '/products/concierge': () => import('./concierge').then((m) => m.concierge),
  '/products/smart-receipt': () => import('./smartReceipt').then((m) => m.smartReceipt),
  '/products/srm-eventhub': () => import('./srmEventhub').then((m) => m.srmEventhub),
  '/privacy': () => import('./privacy').then((m) => m.privacy),
  '/terms': () => import('./terms').then((m) => m.terms),
}
