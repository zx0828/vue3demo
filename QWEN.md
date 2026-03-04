# Vue3 Demo 项目上下文

## 项目概述

这是一个基于 **Vue 3** 和 **Vite** 的前端开发项目。项目集成了多个现代化前端工具和 UI 库，用于快速构建响应式 Web 应用。

### 核心技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | ^3.3.4 | 前端框架 |
| Vite | ^4.3.9 | 构建工具 |
| Ant Design Vue | ^3.2.20 | UI 组件库 |
| UnoCSS | ^66.5.4 | 原子化 CSS 引擎 |
| apng-js | ^1.1.5 | APNG 图片解析 |
| vue-draggable-resizable | ^2.3.0 | 拖拽调整组件 |

### 项目结构

```
vue3demo/
├── src/
│   ├── main.js           # 应用入口，注册全局样式和组件
│   ├── App.vue           # 根组件（包含 APNG 播放演示）
│   ├── assets/
│   │   ├── base.css      # 基础 CSS 变量定义
│   │   ├── main.css      # 全局样式
│   │   └── logo.svg      # 项目 Logo
│   └── components/
│       └── HelloWorld.vue # 示例组件（含可拖拽表格）
├── public/
│   └── favicon.ico       # 网站图标
├── index.html            # HTML 模板
├── vite.config.mjs       # Vite 配置（含别名、插件）
├── uno.config.ts         # UnoCSS 配置
└── package.json          # 项目依赖和脚本
```

## 构建和运行

### 安装依赖

```sh
pnpm install
# 或
npm install
```

### 开发环境启动

```sh
pnpm run dev
# 或
npm run dev
```

开发服务器配置：
- **端口**: 13000
- **主机**: 0.0.0.0（允许外部访问）

### 生产环境构建

```sh
pnpm run build
# 或
npm run build
```

### 预览生产构建

```sh
pnpm run preview
# 或
npm run preview
```

## 开发约定

### 路径别名

项目配置了 `@` 别名指向 `src` 目录：

```js
import App from '@/App.vue'  // 等同于 ./src/App.vue
```

### 样式方案

项目采用 **UnoCSS** 作为主要样式解决方案：

- **预设**: `presetUno`、`presetAttributify`、`presetIcons`
- **自定义颜色**: `primary` (#1890ff)、`success`、`warning`、`error`
- **自定义规则**: `flex-center`、`text-brand`
- **快捷方式**: `btn-primary`

示例用法：
```vue
<div class="flex-center w-20 h-20 bg-success text-white rounded">
  居中
</div>
<button class="btn-primary">主要按钮</button>
```

### UI 组件使用

- **Ant Design Vue** 通过 `unplugin-vue-components` 实现自动按需导入
- 无需手动 import 即可直接使用 `<a-button>`、`<a-table>` 等组件

### 代码风格

- 使用 Vue 3 `<script setup>` 语法糖
- 响应式数据优先使用 `ref()`
- 组件内注释风格活泼，使用 emoji 装饰

### 特殊功能示例

项目包含两个功能演示：

1. **APNG 播放器** (`App.vue`): 解析并播放 APNG 动画，显示倒计时
2. **可拖拽表格** (`HelloWorld.vue`): 支持列宽拖拽调整的 Ant Design 表格

## 推荐 IDE 设置

- **VSCode** + **Volar** 扩展（禁用 Vetur）
- **TypeScript Vue Plugin (Volar)**

## 注意事项

- 项目使用 `pnpm` 作为包管理器（存在 `pnpm-lock.yaml`）
- 开发服务器监听所有网络接口（`host: '0.0.0.0'`）
- UnoCSS 配置与 Ant Design 主题色保持一致
