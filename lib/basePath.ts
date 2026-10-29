// next.config.js prefixes every route with a basePath on GitHub Pages builds
// (GITHUB_PAGES=true), but next/image's `src` and the metadata icons shorthand
// don't pick that prefix up automatically — so static assets need it added by hand.
export const basePath = process.env.GITHUB_PAGES === "true" ? "/smm-agency-landing" : "";
