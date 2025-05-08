// gatsby-browser.js
export const onRouteUpdate = ({ location, prevLocation }) => {
    if (typeof window !== 'undefined') {
      // always scroll to top on route change (including reload)
      window.scrollTo(0, 0);
      // strip any hash so header’s Home logic works too
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };
  