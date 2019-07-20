import React from "react";
import ReactDOMServer from "react-dom/server";

const [page] = process.argv.slice(2);

const Page = require(`../pages/${page}.js`).default;

console.log(ReactDOMServer.renderToStaticMarkup(<Page />));
