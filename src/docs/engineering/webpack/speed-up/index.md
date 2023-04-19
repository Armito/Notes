# 构建速度

## 缩小打包作用域

-   exclude/include (确定 loader 规则范围)
-   resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
-   resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
-   resolve.extensions 尽可能减少后缀尝试的可能性
-   noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
-   IgnorePlugin (完全排除模块)
-   合理使用 alias

## 充分利用缓存提升二次构建速度

-   babel-loader 开启缓存
-   splitChunks.cacheGroups
-   cache 选项， 缓存生成的 webpack 模块和 chunk，来改善构建速度

## 使用更快的构建工具

-   terser-webpack-plugin：使用更快的 minify： esbuild/swc 代替 terser

## 多进程并发运行

-   terser-webpack-plugin：parallel;

## Umi 中的 mfsu

-   基于 webpack5 新特性 Module Federation 的打包提速方案
