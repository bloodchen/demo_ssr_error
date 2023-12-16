import { c as create_ssr_component, v as validate_component, e as escape, _ as _layout } from "../chunks/chunk-455894a0.js";
import { M as MetaTags } from "../chunks/chunk-2791a0b9.js";
const apiStyle = "";
const index_page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-okllp7{color:var(--cyan30)}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageProps } = $$props;
  if ($$props.pageProps === void 0 && $$bindings.pageProps && pageProps !== void 0)
    $$bindings.pageProps(pageProps);
  $$result.css.add(css);
  return `${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: pageProps.title,
      description: pageProps.body
    },
    {},
    {}
  )} ${validate_component(_layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="svelte-okllp7">${escape(pageProps.title)}</h1> <div><!-- HTML_TAG_START -->${pageProps.body}<!-- HTML_TAG_END --></div>`;
    }
  })}`;
});
export {
  About as default
};
