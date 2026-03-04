# Vue3Demo 项目上下文

## 项目概述

这是一个基于 **Vue 3** + **Vite** 的前端演示项目，主要用于展示和测试以下技术：

- **Vue 3** (v3.3.4+) - 使用 Composition API (`<script setup>`)
- **Vite** (v4.3.9) - 快速构建工具
- **UnoCSS** (v66.5.4) - 即时原子化 CSS 引擎
- **Ant Design Vue** (v3.2.20) - UI 组件库
- **apng-js** - APNG 动画解析和播放
- **vue-draggable-resizable** - 拖拽和调整大小组件

## 项目结构

```
vue3demo/
├── index.html              # 入口 HTML
├── package.json            # 项目依赖和脚本
├── pnpm-lock.yaml          # pnpm 锁定文件
├── uno.config.ts           # UnoCSS 配置
├── vite.config.mjs         # Vite 配置
├── public/
│   └── favicon.ico         # 网站图标
└── src/
    ├── main.js             # 应用入口
    ├── App.vue             # 根组件
    ├── assets/
    │   ├── base.css        # 基础 CSS 变量
    │   ├── main.css        # 全局样式
    │   └── logo.svg        # Logo 资源
    └── components/
        └── HelloWorld.vue  # 示例组件（含可拖拽表格）
```

## 开发和运行

### 安装依赖

```sh
npm install
# 或
pnpm install
```

### 开发模式

```sh
npm run dev
```

开发服务器配置：
- 端口：`13000`
- 主机：`0.0.0.0` (允许外部访问)

### 生产构建

```sh
npm run build
```

### 预览构建结果

```sh
npm run preview
```

## 技术配置

### Vite 配置亮点

- 启用 `allowedHosts: true` 允许所有主机访问
- 使用 `unplugin-vue-components` 自动导入 Ant Design Vue 组件
- 配置了 `@` 别名指向 `src` 目录

### UnoCSS 配置

预设：
- `presetUno` - 完整预设
- `presetAttributify` - 属性化模式
- `presetIcons` - 图标支持

自定义主题色：
- `primary`: #1890ff (Ant Design 主色)
- `success`: #52c41a
- `warning`: #faad14
- `error`: #f5222d

自定义规则：
- `flex-center` - 居中对齐
- `text-brand` - 品牌色文字

快捷方式：
- `btn-primary` - 主按钮样式

## 代码规范

### Vue 组件风格

- 使用 `<script setup>` 语法
- 使用 `ref` 和 `reactive` 进行响应式状态管理
- 使用 Composition API 组织逻辑

### 注释风格

代码中包含大量可爱的中文注释，使用表情符号增加可读性，例如：
- `// 用 ref 来存储我们需要的小伙伴们～`
- `// 格式化时间的可爱函数～🎀`

### 样式方案

- 基础样式使用 CSS 变量支持明暗主题切换
- 原子化 CSS 使用 UnoCSS
- UI 组件样式使用 Ant Design Vue

## 主要功能示例

### App.vue

展示 APNG 动画播放功能：
- 加载并解析 APNG 图片
- 自适应缩放和居中显示
- 播放状态显示（待加载/加载中/播放中/加载失败/播放完了）
- 倒计时计时器

### HelloWorld.vue

展示可拖拽列宽的表格：
- 使用 `vue-draggable-resizable` 实现表头拖拽
- 支持 Ant Design Vue 的 Table 组件

## 推荐 IDE 配置

- **VSCode** + **Volar** (禁用 Vetur)
- **TypeScript Vue Plugin (Volar)**

## 注意事项

1. 项目使用 pnpm 作为包管理器（存在 `pnpm-lock.yaml`）
2. 开发服务器监听所有网络接口 (`0.0.0.0`)
3. 图片资源通过 import 方式引入
4. 组件库采用自动导入，无需手动引入 Ant Design Vue 组件
