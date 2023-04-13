# Loader

## css 相关

-   style-loader：把 CSS 以 style 标签的形式插入到 DOM 中
-   MiniCssExtractPlugin.loader：将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，以 link 标签形式引入

::: tip
以上两种 loader 对应两种处理 css 的手段， trade off 后二选一
:::

-   css-loader：对@import 和 url() 进行处理
-   postcss-loader：使用 PostCSS 处理 CSS

::: details Postcss 的作用

-   selector 浏览器兼容
-   新语法兼容
-   css modules

:::

-   less-loader：将 Less 编译为 CSS
-   sass-loader：加载 Sass/SCSS 文件并将他们编译为 CSS

## js 相关

-   babel-loader：使用 Babel 和 webpack 转译 JavaScript 文件
-   ts-loader：加载所有的 .ts 和 .tsx 文件

::: tip
babel-loader 也包含加载所有的 .ts 和 .tsx 文件的功能
:::

## assets 相关

-   url-loader：将文件（图片等）作为 data URI 内联到 bundle 中

::: warning
在 webpack5 中，此 loader 已被 type: 'asset/inlne' 替代
:::

-   file-loader： 将文件发送到输出目录

::: warning
在 webpack5 中，此 loader 已被 type: 'asset/resource' 替代
:::
