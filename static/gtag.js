/* Google Analytics (gtag.js) configuration.
   Referenced as <script defer src="/assets/gtag.js"> in every page head
   (relocated to /static/gtag.js at build time). The async loader from
   googletagmanager.com processes queued dataLayer entries on arrival, so
   script ordering is not required — this config pushes first, the loader
   executes it once loaded. */
(function () {
  "use strict";

  if (window.dataLayer === undefined) window.dataLayer = [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-JEW09H6XM3");
})();