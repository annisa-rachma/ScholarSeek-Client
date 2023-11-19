import { useEffect, useState } from 'react'

function debounce(fn, ms = 500) {
   let timer
   return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
         timer = null
         fn.apply(this, arguments)
      }, ms)
   }
}

export default function useWindowSize() {
   const [size, setSize] = useState({width: 0, height: 0})

   useEffect(() => {
      const debouncedUpdateSizeHandler = debounce(function updateSize() {
         setSize({width: window.innerWidth, height: window.innerHeight})
      })

      window.addEventListener('resize', debouncedUpdateSizeHandler)
      debouncedUpdateSizeHandler()

      return () => window.removeEventListener('resize', debouncedUpdateSizeHandler)
   }, [])

   return size
}
