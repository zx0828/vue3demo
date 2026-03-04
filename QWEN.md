# Vue3 Demo 项目上下文

## 项目概述

这是一个基于 **Vue 3** + **Vite** 的前端演示项目，主要用于展示和测试以下技术：
- **Vue 3.3+** (Composition API)
- **Vite 4.3+** (构建工具)
- **Ant Design Vue 3.2+** (UI 组件库)
- **UnoCSS** (原子化 CSS 引擎)
- **apng-js** (APNG 动画图片解析)
- **vue-draggable-resizable** (拖拽调整组件)

## 项目结构

```
vue3demo/
├── src/
│   ├── main.js          # 应用入口
│   ├── App.vue          # 根组件
│   ├── assets/          # 静态资源 (CSS, 图片)
│   └── components/      # Vue 组件
├── public/              # 公共静态资源
├── index.html           # HTML 模板
├── package.json         # 项目依赖配置
├── vite.config.mjs      # Vite 配置
├── uno.config.ts        # UnoCSS 配置
└── pnpm-lock.yaml       # pnpm 锁定文件
```

## 构建与运行

### 安装依赖
```sh
pnpm install
```

### 开发模式
```sh
pnpm run dev
```
- 默认端口：**13000**
- 监听地址：**0.0.0.0**

### 生产构建
```sh
pnpm run build
```

### 预览构建结果
```sh
pnpm run preview
```

## 技术配置

### Vite 配置亮点
- **路径别名**: `@` 指向 `src/` 目录
- **自动导入**: 使用 `unplugin-vue-components` 自动导入 Ant Design Vue 组件
- **UnoCSS**: 原子化 CSS 支持

### UnoCSS 配置
- **Presets**: `presetUno`, `presetAttributify`, `presetIcons`
- **主题色**: 与 Ant Design 保持一致 (primary: #1890ff)
- **自定义规则**: `flex-center`, `text-brand`
- **快捷方式**: `btn-primary`

## 开发规范

### 代码风格
- 使用 **Composition API** (`<script setup>`)
- 组件采用 **单文件组件 (SFC)** 格式
- CSS 使用 **scoped** 样式隔离

### 命名约定
- 组件文件：`PascalCase.vue` (如 `HelloWorld.vue`)
- 资源文件：`kebab-case` (如 `base.css`)
- 路径别名：`@/` 代替相对路径

### 注意事项
- 项目使用 **pnpm** 作为包管理器
- 未使用 TypeScript (main.js 为 JavaScript)
- 未使用 Lombok 风格的插件

## 核心功能示例

### App.vue
- APNG 动画图片解析与播放
- Canvas 渲染与图片缩放适配
- 倒计时计时器功能
- UnoCSS + Ant Design Vue 混合使用示例

### HelloWorld.vue
- Ant Design Table 组件
- 表头拖拽调整宽度功能
