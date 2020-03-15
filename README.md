<p align="center">
  <img alt="logo" src="./static/logo.gif" width="220" style="margin-bottom: 11px;">
</p>
<h3 align="center">精美、规范、可定制的小程序 UI 库</h3>

<p align="center">
  <img src="https://img.shields.io/badge/demo-%E5%BC%80%E5%8F%91%E4%B8%AD-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&color=#4fc08d" />
</p>

<p align="center">
  开发中，敬请关注～
</p>

---

## 介绍

Jan UI 是一个微信小程序 UI 组件库，由两名 [兽人爱好者](https://zh.wikipedia.org/zh/%E7%8D%B8%E8%BF%B7) 开发。

和其他 UI 库比较，它有以下优点：

- 基于原生，没有 npm 包依赖
- 昼夜双版，可以定制主题
- 涟漪（ripple）动画效果
- 全局使用响应式尺寸 [rpx](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)

当然，它也有缺点，比如暂时没有使用 `webpack` 编译和压缩样式，体积比较大。目前只有两个学生业余维护，组件不够全面，很多细节没有考虑周全等。

<p align="center">
  <img alt="form-demo" src="/static/demo.gif" style="margin-bottom: 11px">
</p>

## 路线图

这里会记录已经开发完成的组件，之后会为每个组件写一个 Wiki。

|     | 组件名                 | 贡献者 | 日期       | 版本   |
| --- | ---------------------- | ------ | ---------- | ------ |
| 1   | 按钮 Button            | Meeken | 2020/03/06 | v0.0.4 |
| 2   | 图标 Icon              | SU     | 2020/03/06 | v0.0.4 |
| 3   | 单元格 Cell            | Meeken | 2020/03/07 | v0.0.2 |
| 4   | 布局 Layout            | Meeken | 2020/03/08 | v0.0.2 |
| 5   | 复选框 Checkbox        | Meeken | 2020/03/08 | v0.0.5 |
| 6   | 开关 Switch            | Meeken | 2020/03/08 | v0.0.4 |
| 7   | 表单组 Form Group      | Meeken | 2020/03/09 | v0.0.2 |
| 8   | 输入框 Field           | Meeken | 2020/03/10 | v0.0.4 |
| 9   | 弹出层 Popup           | SU     | 2020/03/11 | v0.0.3 |
| 10  | 搜索框 Search          | Meeken | 2020/03/12 | v0.0.1 |
| 11  | 评分 Rate              | SU     | 2020/03/12 | v0.0.2 |
| 12  | 滑块 Slider            | SU     | 2020/03/13 | v0.0.1 |
| 13  | 步进器 Stepper         | Meeken | 2020/03/13 | v0.0.2 |
| 14  | 文件上传 Upload        | Meeken | 2020/03/14 | v0.0.1 |
| 15  | 进度条 Progress Linear | SU     | 2020/03/15 | v0.0.1 |

## 加入我们

欢迎一起来完善 Jan UI ～

使用 Jan UI 开发应用前，可以先重温下微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

### 安装

由于还没有开发完成，我们暂时没有打包发布 npm，你可以下载这个仓库，以 PR 的形式为它贡献代码。我们会认真记录每一次贡献，谢谢大家的支持～

```shell
$ git clone https://github.com/Authing/jan-ui && cd jan-ui
```

### 特殊目录说明

#### 1. template 组件模版

**简单组件模版**

一份直接能使用的 Component 模版。

- 如新建一个组件，只需将它复制到 `/developing` 目录下，并将目录名改为组件名即可。
- `index.js` 中，需要写上这个组件的名称、版本和维护人。

**Mixin 组件模版**

Mixin 组件以类似 `gulp` 的流形式工作，通过混入配置项，我们能够可插拔式地搭建复杂的组件。

- 复制目录到 `/developing`，并修改为新组件名。
- 可以根据注释，方便地配置一个新的 Component。

#### 2. developing 开发中组件

用于放置正在开发中，且**没有形成可用版本**的组件。

- 比如新建了一个 `button` 组件，就需要在 `/developing` 组件中。
- 若组件调试无误，将其复制到 `/src` 目录下，表明这个组件是一个：有发行版本的组件。
- 发行版本的组件通常会有配套的 Wiki 文档，这样子。

#### 3. src 可用组件

开发完成的、有发行版本的组件放置在这个目录中。

#### 4. main.wxss 全局样式表

`main.wxss` 是组件库的全局样式表，可以用于定制主题。

#### 5. 页面

展示的页面。这里可以用来随意调试，JanUI 的发布版本会配套一个展示小程序，这个展示小程序届时会重写。

## 贡献者

[Meeken](https://github.com/Meeken1998)

[SU](https://github.com/recallfuture)

## 协议

MIT License
