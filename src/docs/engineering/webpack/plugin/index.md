# plugin

## 开发相关

-   html-webpack-plugin：1.自动生成 h5；2.将 webpack 入口以 script 标签形式引入
-   HotModuleReplacementPlugin：开启 HMR

## 生产相关

-   terser-webpack-plugin：使用 terser 来压缩 JavaScript
-   css-minimizer-webpack-plugin：使用 cssnano 优化和压缩 CSS
-   compression-webpack-plugin：使用编码（gzip/brotli）来压缩资源
-   image-minimizer-webpack-plugin：使用 imagemin/squoosh 来压缩图片
-   webpack-bundle-analyzer：打包后的 bundle tree 分析器

## 通用

-   webpackbar：打包进度展示
-   DefinePlugin：在编译时将你代码中的变量替换为其他值或表达式

::: tip
DefinePlugin 一般用于定义一个全局常量去判断是开发还是生产环境
:::
