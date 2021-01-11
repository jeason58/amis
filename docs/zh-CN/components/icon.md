---
title: Icon 图标
description:
type: 0
group: ⚙ 组件
menuName: Icon
icon:
order: 50
---

## 基本使用

```schema
{
    "type": "page",
    "body": {
        "type": "icon",
        "icon": "cloud"
    }
}
```

## 颜色及大小调整

icon 基于字体实现，所以可以通过[文字颜色](../../../style/typography/text-color)或[大小](../../../style/typography/font-size)来控制它。

```schema
{
    "type": "page",
    "body": {
        "type": "icon",
        "icon": "cloud",
        "className": "text-info text-xl"
    }
}
```

| 属性名    | 类型     | 默认值 | 说明                           |
| --------- | -------- | ------ | ------------------------------ |
| type      | `string` | `icon` | 指定组件类型                   |
| className | `string` |        | 外层 CSS 类名                  |
| icon      | `string` |        | icon 名，只支持 fontawesome v4 |