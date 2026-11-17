import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContentPage } from './components/page/ContentPage'
import { PAGE_LOADERS } from './content/pages'
import Home from './pages/Home'

// Everything except Home is split into its own file and fetched when the page is opened.
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))

const contentRoutes = Object.entries(PAGE_LOADERS).map(([path, load]) => ({
  path,
  Page: lazy(() => load().then((data) => ({ default: () => <ContentPage data={data} /> }))),
}))

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} aria-hidden="true" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {contentRoutes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
