// uno.config.js
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    })
  ],
  theme: {
    colors: {
      primary: '#1890ff', // 与 Ant Design 主色保持一致
      success: '#52c41a',
      warning: '#faad14',
      error: '#f5222d'
    }
  },
  rules: [
    // 自定义规则
    ['flex-center', { display: 'flex', 'align-items': 'center', 'justify-content': 'center' }],
    ['text-brand', { color: '#1890ff' }]
  ],
  shortcuts: {
    // 快捷方式
    'btn-primary': 'bg-primary text-white px-4 py-2 rounded hover:opacity-80'
  }
})