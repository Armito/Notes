import{_ as s,o as l,c as a,N as e}from"./chunks/framework.7e203a6d.js";const S=JSON.parse('{"title":"Loader","description":"","frontmatter":{},"headers":[],"relativePath":"docs/engineering/webpack/loader/index.md"}'),t={name:"docs/engineering/webpack/loader/index.md"},i=e('<h1 id="loader" tabindex="-1">Loader <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;Loader&quot;">​</a></h1><h2 id="css-相关" tabindex="-1">css 相关 <a class="header-anchor" href="#css-相关" aria-label="Permalink to &quot;css 相关&quot;">​</a></h2><ul><li>style-loader：把 CSS 以 style 标签的形式插入到 DOM 中</li><li>MiniCssExtractPlugin.loader：将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，以 link 标签形式引入</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>以上两种 loader 对应两种处理 css 的手段， trade off 后二选一</p></div><ul><li>css-loader：对@import 和 url() 进行处理</li><li>postcss-loader：使用 PostCSS 处理 CSS</li></ul><details class="details custom-block"><summary>Postcss 的作用</summary><ul><li>selector 浏览器兼容</li><li>新语法兼容</li><li>css modules</li></ul></details><ul><li>less-loader：将 Less 编译为 CSS</li><li>sass-loader：加载 Sass/SCSS 文件并将他们编译为 CSS</li></ul><h2 id="js-相关" tabindex="-1">js 相关 <a class="header-anchor" href="#js-相关" aria-label="Permalink to &quot;js 相关&quot;">​</a></h2><ul><li>babel-loader：使用 Babel 和 webpack 转译 JavaScript 文件</li><li>ts-loader：加载所有的 .ts 和 .tsx 文件</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>babel-loader 也包含加载所有的 .ts 和 .tsx 文件的功能</p></div><h2 id="assets-相关" tabindex="-1">assets 相关 <a class="header-anchor" href="#assets-相关" aria-label="Permalink to &quot;assets 相关&quot;">​</a></h2><ul><li>url-loader：将文件（图片等）作为 data URI 内联到 bundle 中</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在 webpack5 中，此 loader 已被 type: &#39;asset/inlne&#39; 替代</p></div><ul><li>file-loader： 将文件发送到输出目录</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在 webpack5 中，此 loader 已被 type: &#39;asset/resource&#39; 替代</p></div>',15),o=[i];function r(c,d,n,u,p,b){return l(),a("div",null,o)}const _=s(t,[["render",r]]);export{S as __pageData,_ as default};
