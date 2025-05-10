// gatsby-browser.js
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location.hash) {
    // small timeout ensures the DOM node is mounted
    setTimeout(() => {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }
}
