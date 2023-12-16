import { c as create_ssr_component, v as validate_component, _ as _layout } from "../chunks/chunk-455894a0.js";
const Error_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageProps } = $$props;
  if ($$props.pageProps === void 0 && $$bindings.pageProps && pageProps !== void 0)
    $$bindings.pageProps(pageProps);
  return `${validate_component(_layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${pageProps.is404 ? `<div data-svelte-h="svelte-zqgx2j"><h1>404 Page Not Found</h1>
  This page could not be found.</div>` : `<div data-svelte-h="svelte-1ywm4il"><h1>500 Internal Server Error</h1>
  Something went wrong.</div>`}`;
    }
  })}`;
});
export {
  Error_page as default
};
