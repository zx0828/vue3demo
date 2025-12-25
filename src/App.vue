<script setup>
import { ref, onMounted } from 'vue'
import parseAPNG from 'apng-js'
// 使用import引入图片资源哦～
import apngImage from './assets/a.png'

// 用ref来存储我们需要的小伙伴们～
const canvasRef = ref(null)
const loadingStatus = ref('待加载') // 可以是：待加载、加载中、播放中、加载失败
let player = null


// 添加计时器相关的响应式变量～⏰
const playTime = ref(0)    // 总播放时间
const currentTime = ref(0) // 当前播放时间
let timerInterval = null   // 用于存储定时器
// 格式化时间的可爱函数～🎀
function formatTime(ms) {
  const seconds = Math.floor(ms / 1000)
  const decimal = Math.floor((ms % 1000) / 100)
  return `${seconds}.${decimal}s`
}

// 开始计时的函数～⏱️
function startTimer(totalTime) {
  playTime.value = totalTime
  currentTime.value = totalTime

  // 清除之前的定时器
  if (timerInterval) clearInterval(timerInterval)

  // 创建新的定时器，每100ms更新一次
  timerInterval = setInterval(() => {
    if (currentTime.value > 0) {
      currentTime.value -= 100
    } else {
      clearInterval(timerInterval)
    }
  }, 100)
}

// 添加一个可爱的函数来计算图片缩放比例～🎨
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
  return {
    width: srcWidth * ratio,
    height: srcHeight * ratio
  }
}
// 把文件转换成ArrayBuffer的可爱函数～
async function getImgBuffer(url) {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    return await new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(blob)
      reader.onload = () => resolve(reader.result)
    })
  } catch (error) {
    console.error('获取图片出错啦～', error)
    loadingStatus.value = '加载失败'
    throw error
  }
}

// 创建APNG播放器的可爱函数～
async function createApngPlayer(url, ctx) {
  try {
    const imgBuffer = await getImgBuffer(url)
    const apng = parseAPNG(imgBuffer)

    if (apng instanceof Error) {
      console.error('解析APNG出错啦～', apng)
      loadingStatus.value = '加载失败'
      return null
    }
    const totalTime = apng.playTime
    startTimer(totalTime)

    console.log(totalTime + "花费的时间");
    return await apng.getPlayer(ctx)
  } catch (error) {
    console.error('创建播放器出错啦～', error)
    loadingStatus.value = '加载失败'
    return null
  }
}

// 在组件挂载后初始化我们的动画哦～
onMounted(async () => {
  const canvas = canvasRef.value
  if (!canvas) return

  // 设置canvas的固定尺寸，这是我们想要的显示区域大小～✨
  const maxWidth = 300  // 可以根据需要调整这个值哦～
  const maxHeight = 300 // 可以根据需要调整这个值哦～
  canvas.width = maxWidth
  canvas.height = maxHeight
  const ctx = canvas.getContext('2d')

  loadingStatus.value = '加载中'

  try {
    // 先获取图片实际尺寸，这样就能计算缩放比例啦～🖼️
    const img = new Image()
    img.src = apngImage
    await new Promise((resolve) => {
      img.onload = () => {
        // 计算适合的尺寸
        const { width, height } = calculateAspectRatioFit(
          img.width,
          img.height,
          maxWidth,
          maxHeight
        )

        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // 计算居中位置
        const x = (maxWidth - width) / 2
        const y = (maxHeight - height) / 2

        // 设置画布的变换，让图片居中显示～🎯
        ctx.setTransform(
          width / img.width, 0,
          0, height / img.height,
          x, y
        )
        resolve()
      }
    })

    player = await createApngPlayer(apngImage, ctx)
    if (player) {
      loadingStatus.value = '播放中'
      player.play()
      player.on('end', () => {
        loadingStatus.value = '播放完了'
        console.log('动画播放完啦～ 🎉')
      })
    }
  } catch (error) {
    console.error('初始化失败啦～', error)
    loadingStatus.value = '加载失败'
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- 使用ref绑定canvas，这样在setup中就能获取到啦～ -->
      <canvas ref="canvasRef"></canvas>
      <!-- 显示当前状态，让用户知道发生了什么～ -->
      <p class="status">{{ loadingStatus }} {{ loadingStatus === '加载中' ? '⏳' :
        loadingStatus === '播放中' ? '🎉' :
          loadingStatus === '加载失败' ? '😢' : '🌸' }}</p>
      <!-- 添加可爱的倒计时显示～⏰ -->
      <p v-if="playTime > 0" class="timer">
        剩余时间: {{ formatTime(currentTime) }} / {{ formatTime(playTime) }}
        <span class="timer-emoji">{{ currentTime > 0 ? '⏳' : '✨' }}</span>
      </p>
    </div>
    <div class="space-y-8">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
    <div class="flex flex-col items-center p-8 space-y-8">
      <!-- 使用 UnoCSS 工具类 -->
      <div class="text-2xl font-bold text-primary">UnoCSS 测试</div>
      <button class="btn-primary">主要按钮</button>
      <div class="flex-center w-20 h-20 bg-success text-white rounded">
        居中
      </div>
      <!-- 结合 Ant Design -->
      <a-button type="primary" class="ml-4">Antd 按钮</a-button>
    </div>
  </header>
</template>

<style scoped>
/* ...existing code... */

.timer {
  text-align: center;
  color: #ff69b4;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.timer-emoji {
  font-size: 1.2rem;
  animation: bounce 1s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

.status {
  text-align: center;
  color: #666;
  margin-top: 1rem;
  font-size: 0.9rem;
}


.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

canvas {
  border: 2px dashed #ffb6c1;
  border-radius: 10px;
  background: #fff;
}
</style>