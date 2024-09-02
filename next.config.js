const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md"],
};

/** @type {import('@markdoc/next.js').MarkdocNextJsConfig} */
const markdocConfig = {
  mode: "static",
  schemaPath: "./src/common/libs/markdoc",
};

module.exports = withMarkdoc(markdocConfig)(nextConfig);
