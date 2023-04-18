# 块级格式化上下文（BFC）

## 问题

### BFC 元素中的问题

-   兄弟普通元素间的 margin 合并
-   浮动元素将普通元素覆盖

### 普通元素中的问题

-   子普通元素的 margin 坍塌
-   浮动元素脱离文档流，使普通元素高度坍塌

## 开启 BFC

-   根元素 html
-   浮动元素（float 值不为 none）
-   绝对定位元素（position 值为 absolute 或 fixed）
-   行内块元素（display 值为 inline-block）
-   表格单元格（display 值为 table-cell，HTML 表格单元格默认值）
-   表格标题（display 值为 table-caption，HTML 表格标题默认值）
-   匿名表格单元格元素（display 值为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 inline-table）
-   overflow 值不为 visible、clip 的块元素
-   display 值为 flow-root 的元素
-   弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
-   网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
