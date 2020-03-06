## JoyUI

### 小程序信息

> ⚠️ 注意保密

```json
{
  "app": {
    "appId": "wxe576d083f487b3eb",
    "appSecret": "1a22ccd5ecac4392f076dc2cf9f2e124"
  },

  "mp.weixin.qq.com": {
    "usr": "mewz@foxmail.com",
    "pwd": "joyUI123!"
  }
}
```

### 特殊工作目录说明

#### 1. `/template` 组件模版

**简单组件模版**

一份直接能使用的 Component 模版。

- 如新建一个组件，只需将它复制到 `/developing` 目录下，并将目录名改为组件名即可。
- `index.js` 中，需要写上这个组件的名称、版本和维护人。

**Mixin 组件模版**

通过混入配置项，可插拔式地搭建复杂的组件。

- 复制目录到 `/developing`，并修改为新组件名。
- 可以根据注释，方便地配置一个新的 Component。

#### 2. `/developing`

用于放置正在开发中，且**没有形成可用版本**的组件。

- 比如新建了一个 `button` 组件，就需要在 `/developing` 组件中。
- 若组件调试无误，将其复制到 `/src` 目录下，表明这个组件是一个：有发行版本的组件。
- 发行版本的组件必须有配套的 Wiki 文档。

#### 3. `/src`

开发完成的、有发行版本的组件放置在这个目录中。

#### 4. `developing/main.wxss` 和 `src/main.wxss`

`main.wxss` 是组件库的全局样式表，可以用于定制主题。

#### 5. `/pages/*`

展示的页面。这里可以用来随意调试，JoyUI 的发布版本会配套一个展示小程序，这个展示小程序到时候会开新仓库重写。

### Wiki 文档书写规范

为了便于整理文档的时候不太费劲，需要先统一个规范。

> 待补充...
