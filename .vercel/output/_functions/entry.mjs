import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_i5H3ZqWD.mjs';
import { manifest } from './manifest_DFnZrOfB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/send-email.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/career.astro.mjs');
const _page7 = () => import('./pages/case-study.astro.mjs');
const _page8 = () => import('./pages/changelog.astro.mjs');
const _page9 = () => import('./pages/company.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/faq.astro.mjs');
const _page12 = () => import('./pages/faqs.astro.mjs');
const _page13 = () => import('./pages/features.astro.mjs');
const _page14 = () => import('./pages/integrations.astro.mjs');
const _page15 = () => import('./pages/pricing.astro.mjs');
const _page16 = () => import('./pages/privacy-policy.astro.mjs');
const _page17 = () => import('./pages/reservation.astro.mjs');
const _page18 = () => import('./pages/reviews.astro.mjs');
const _page19 = () => import('./pages/terms-conditions.astro.mjs');
const _page20 = () => import('./pages/_lang_/about.astro.mjs');
const _page21 = () => import('./pages/_lang_/contact.astro.mjs');
const _page22 = () => import('./pages/_lang_/faq.astro.mjs');
const _page23 = () => import('./pages/_lang_/reservation.astro.mjs');
const _page24 = () => import('./pages/_lang_.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/send-email.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/career.astro", _page6],
    ["src/pages/case-study.astro", _page7],
    ["src/pages/changelog.astro", _page8],
    ["src/pages/company.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/faq.astro", _page11],
    ["src/pages/faqs.astro", _page12],
    ["src/pages/features.astro", _page13],
    ["src/pages/integrations.astro", _page14],
    ["src/pages/pricing.astro", _page15],
    ["src/pages/privacy-policy.astro", _page16],
    ["src/pages/reservation.astro", _page17],
    ["src/pages/reviews.astro", _page18],
    ["src/pages/terms-conditions.astro", _page19],
    ["src/pages/[lang]/about.astro", _page20],
    ["src/pages/[lang]/contact.astro", _page21],
    ["src/pages/[lang]/faq.astro", _page22],
    ["src/pages/[lang]/reservation.astro", _page23],
    ["src/pages/[lang]/index.astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3d588bc8-fe6d-41d8-ba56-61e1b1658d4f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
