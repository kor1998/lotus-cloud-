import { useEffect } from 'react'
import { OverlayScrollbars } from 'overlayscrollbars'
import 'overlayscrollbars/styles/overlayscrollbars.css'

/*
  Page scrollbar: replaces the wide native bar with a slim overlay one that floats above the content
  and fades away when idle. Page scrolling itself is unchanged (window.scrollY, hash links and
  keyboard scrolling all keep working), only the bar's look changes.
*/
export function useOverlayScrollbars() {
  useEffect(() => {
    const instance = OverlayScrollbars(
      document.body,
      { scrollbars: { theme: 'os-theme-lotus', autoHide: 'scroll', autoHideDelay: 700, clickScroll: true } },
    )
    return () => instance.destroy()
  }, [])
}
