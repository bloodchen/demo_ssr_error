function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
const global = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-lblfjd{display:flex;max-width:900px;margin:auto}.content.svelte-lblfjd{padding:20px;border-left:2px solid #eee;padding-bottom:50px;min-height:100vh}.navigation.svelte-lblfjd{padding:20px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;line-height:1.8em}.logo.svelte-lblfjd{margin-top:20px;margin-bottom:10px}.navitem.svelte-lblfjd{padding:3px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const base = "/";
  $$result.css.add(css);
  return `<div class="layout svelte-lblfjd"><div class="navigation svelte-lblfjd"><a${add_attribute("href", base, 0)} class="logo svelte-lblfjd"><img${add_attribute("src", `${base}logo.svg`, 0)} height="64" width="64" alt="logo"></a> <a class="navitem svelte-lblfjd"${add_attribute("href", base, 0)}>Home</a> <a class="navitem svelte-lblfjd"${add_attribute("href", `${base}about`, 0)}>About</a></div> <div class="content svelte-lblfjd">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  _layout as _,
  add_attribute as a,
  create_ssr_component as c,
  escape as e,
  validate_component as v
};
