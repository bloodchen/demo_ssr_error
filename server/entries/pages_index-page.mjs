import { c as create_ssr_component, e as escape, v as validate_component, _ as _layout } from "../chunks/chunk-455894a0.js";
import { M as MetaTags } from "../chunks/chunk-2791a0b9.js";
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<button>${escape(count)}</button>`;
});
const Pages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let state_text = "Prerendered";
  return `${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: "Vite-Plugin-SSR-Svelte Project",
      description: "Vite-based alternative to SvelteKit"
    },
    {},
    {}
  )} ${validate_component(_layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-19s6eo1">Welcome to Vite-Plugin-SSR-Svelte!</h1> <p data-svelte-h="svelte-g5cpit">This repo demonstrates how to create a static site using Svelte using Vite
  &amp; Vite-Plugin-SSR to produce a prerendered site of static pages. The rendering time is blazingly fast and works well on low-powered hardware.</p> <p data-svelte-h="svelte-q1oblf">Conisder it like an alternative to SvelteKit, but with many of the more
  complex features disabled by default so you can enable the fancy stuff when you are ready for it.</p> <h2 data-svelte-h="svelte-50i39w">To demonstrate how this works, this page is:</h2> <ul><li data-svelte-h="svelte-1sx2sub">Rendered to HTML.</li> <li>${escape(state_text)}. Click counter: ${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}</li></ul> <h2 data-svelte-h="svelte-smz8fp">Learn More</h2> <ul data-svelte-h="svelte-45jhtq"><li><a href="https://github.com/ryanweal/vite-plugin-ssr-svelte">The GitHub repo for this project</a></li> <li><a href="https://ryanweal.github.io/vite-plugin-ssr-svelte/">This demo page hosted on Github Pages</a></li> <li><a href="https://vite-plugin-ssr.com/">Vite-Plugin-SSR docs</a></li></ul>`;
    }
  })}`;
});
export {
  Pages as default
};
