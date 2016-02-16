# react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug

* Install dependencies: `npm install`
* Build: `npm run build`
* Notice exception:

```
> react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug@1.0.0 build /Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug
> browserify index.js

SyntaxError: Unexpected token (1:10) while parsing file: /Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/webgl-heatmap/vertex-shader-blit.glsl
    at Parser.pp.raise (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:1745:13)
    at Parser.pp.unexpected (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:2264:8)
    at Parser.pp.semicolon (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:2243:59)
    at Parser.pp.parseExpressionStatement (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:2677:8)
    at Parser.pp.parseStatement (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:2462:160)
    at Parser.pp.parseTopLevel (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:2379:21)
    at parse (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/acorn/dist/acorn.js:101:12)
    at module.exports (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/falafel/index.js:22:15)
    at /Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/static-module/index.js:30:13
    at ConcatStream.<anonymous> (/Users/jwerle/repos/littlstar/react-map-gl-heatmap-overlay-webgl-heatmap-browserify-bug/node_modules/concat-stream/index.js:36:43)
```
