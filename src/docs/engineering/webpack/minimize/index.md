# 打包体积

## 减少代码

-   使用 terser-webpack-plugin 减小 javascript 文件
-   使用 css-minimizer-webpack-plugin 减小 css 文件
-   使用 compression-webpack-plugin 开启 gzip/Brotli 压缩

## 压缩资源

-   使用 image-minimizer-webpack-plugin 压缩图片

## 提取页面公共资源

-   使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离

## Tree-shaking 和 Dead Code Elimination

-   在 package.json 中配置 sideEffects 来开启并配置有副作用而不需 tree-shaking 的文件
-   使用 UglifyJs 进行 DCE
