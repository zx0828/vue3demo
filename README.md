# vue3demo

此模板可帮助你快速开始使用 Vue 3 和 Vite 进行开发。

## 推荐 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。

## 自定义配置

请参阅 [Vite 配置参考](https://vitejs.dev/config/)。

## 项目设置

```sh
npm install
# 或使用 pnpm
pnpm install
```

### 开发模式

```sh
npm run dev
```

### 生产环境编译和压缩

```sh
npm run build
```

### 预览构建结果

```sh
npm run preview
```

## 项目结构

```
vue3demo/
├── index.html              # 入口 HTML
├── package.json            # 项目依赖配置
├── uno.config.ts           # UnoCSS 配置
├── vite.config.mjs         # Vite 配置
├── public/                 # 静态资源目录
└── src/
    ├── main.js             # 应用入口
    ├── App.vue             # 根组件
    ├── assets/             # 静态资源
    │   ├── base.css        # CSS 变量定义
    │   └── main.css        # 全局样式
    └── components/         # 可复用组件
        └── HelloWorld.vue  # 示例组件
```

## 配置说明

### Vite 配置

- 开发服务器端口：`13000`
- 路径别名：`@` 指向 `src` 目录
- 自动导入：Ant Design Vue 组件

### UnoCSS 配置

**主题色**：
| 名称 | 颜色值 |
|------|--------|
| primary | #1890ff |
| success | #52c41a |
| warning | #faad14 |
| error | #f5222d |

**自定义规则**：
- `flex-center` - Flex 居中对齐
- `text-brand` - 品牌色文字

**快捷方式**：
- `btn-primary` - 主按钮样式

## 示例代码

### UnoCSS 使用

```vue
<template>
  <div class="flex flex-col items-center p-8">
    <div class="text-2xl font-bold text-primary">UnoCSS 测试</div>
    <button class="btn-primary">主要按钮</button>
    <div class="flex-center w-20 h-20 bg-success text-white rounded">
      居中
    </div>
  </div>
</template>
```

### Ant Design Vue 使用

```vue
<template>
  <a-button type="primary">Antd 按钮</a-button>
  <a-table :columns="columns" bordered />
</template>
```

## 推荐 IDE 配置

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用 Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 相关文档

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [UnoCSS 文档](https://unocss.dev/)
- [Ant Design Vue 文档](https://antdv.com/)
