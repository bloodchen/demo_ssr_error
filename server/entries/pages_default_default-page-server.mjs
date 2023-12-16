import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const base = "/";
const passToClient = ["pageProps", "routeParams"];
async function render(pageContext) {
  const app = pageContext.Page.render(pageContext);
  const appHtml = app.html;
  const appHead = app.head;
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${base}logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(appHead)}
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>

      <noscript>
        <style>
          /* allow components to use a .no-js class corresponding with the global.csss file */
          .no-js {
            visibility: visible;
          }
          /* display a no-javascript banner */
          html::before {
            content: 'Please enable JavaScript to use this site!';
            width:100%;
            background: red;
            color: white;
            height: 60px;
            font-size: 1em;
            display: flex;
            align-items: center;
            justify-content: center;
         }
        </style>
      </noscript>

    </html>`;
}
export {
  passToClient,
  render
};
