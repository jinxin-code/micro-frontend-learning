# Qiankun 微前端教学项目

这是一个完整的 Qiankun 微前端教学项目，包含 **6 个主应用**（不同技术栈）和 **3 个微应用**，用于对比学习不同框架接入 qiankun 的方式。

## 📁 项目结构

```
micro-frontend/
├── pnpm-workspace.yaml       # pnpm monorepo 配置
├── package.json              # 根目录脚本
├── README.md                 # 项目说明文档
└── packages/
    # ============ 主应用（6个，不同技术栈）===========
    ├── main-app/             # 主应用 (Vue 3 + TypeScript) - 端口 8080
    ├── main-vanilla/         # 主应用 (原生 HTML/CSS/JS) - 端口 8101
    ├── main-react/           # 主应用 (React 18 + TypeScript) - 端口 8102
    ├── main-umi/             # 主应用 (Umi 框架) - 端口 8103
    ├── main-angular/         # 主应用 (Angular 18) - 端口 8104
    ├── main-midway/          # 主应用 (Midway BFF + 静态前端) - 端口 8105
    
    # ============ 微应用（3个，共享）===========
    ├── react-app/            # React 微应用 - 端口 3000
    ├── vue-app/              # Vue 微应用 - 端口 8081
    └── static-app/           # 静态微应用 - 端口 8082
```

## 🛠 技术栈对比

### 主应用

| 应用 | 技术栈 | 端口 | 特点 |
|------|--------|------|------|
| main-app | Vue 3 + Vue Router + Vite | 8080 | 主流选择，生态成熟 |
| main-vanilla | 原生 HTML/CSS/JS | 8101 | 最简单，直接使用 qiankun API |
| main-react | React 18 + React Router + Vite | 8102 | 主流选择，生态成熟 |
| main-umi | Umi + @umijs/plugin-qiankun | 8103 | 官方插件，集成最丝滑 |
| main-angular | Angular 18 + Angular Router | 8104 | 需要处理 zone.js 冲突 |
| main-midway | Midway BFF + 静态前端 | 8105 | BFF 架构，后端提供 API |

### 微应用

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| react-app | React 18 + TypeScript + Vite | 3000 |
| vue-app | Vue 3 + TypeScript + Vite | 8081 |
| static-app | HTML/CSS/JavaScript | 8082 |

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
# 安装 pnpm (如未安装)
npm install -g pnpm

# 安装所有应用依赖
pnpm install
```

### 启动方式

**方式一：分别启动（推荐用于学习）**

```bash
# 启动微应用（3个终端）
cd packages/react-app && pnpm dev       # http://localhost:3000
cd packages/vue-app && pnpm dev         # http://localhost:8081  
cd packages/static-app && pnpm serve    # http://localhost:8082

# 启动主应用（选择其中一个）
cd packages/main-app && pnpm dev        # Vue 主应用 - http://localhost:8080
cd packages/main-vanilla && pnpm serve  # 原生 JS 主应用 - http://localhost:8101
cd packages/main-react && pnpm dev      # React 主应用 - http://localhost:8102
cd packages/main-umi && pnpm dev        # Umi 主应用 - http://localhost:8103
cd packages/main-angular && pnpm dev   # Angular 主应用 - http://localhost:8104
cd packages/main-midway && pnpm dev     # Midway 主应用 - http://localhost:8105
```

**方式二：使用根目录脚本**

```bash
pnpm run start:main         # 启动 Vue 主应用
pnpm run start:vanilla      # 启动原生 JS 主应用
pnpm run start:main-react   # 启动 React 主应用
pnpm run start:umi          # 启动 Umi 主应用
pnpm run start:angular      # 启动 Angular 主应用
pnpm run start:midway       # 启动 Midway 主应用
```

## 🔍 各主应用接入 qiankun 的差异

### 1. 原生 JS 主应用 (main-vanilla)

**特点**：最简单，直接使用 qiankun 原生 API

```javascript
// 引入方式：通过 script 标签
<script src="./node_modules/qiankun/dist/index.umd.js"></script>

// 注册微应用
const { registerMicroApps, start, initGlobalState } = window.qiankun

registerMicroApps(microApps)
start({ sandbox: { strictStyleIsolation: true } })
```

**优势**：无需构建工具，代码透明，适合学习 qiankun 底层原理

### 2. React 主应用 (main-react)

**特点**：使用 React + React Router

```tsx
import { registerMicroApps, start, initGlobalState } from 'qiankun'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

useEffect(() => {
  registerMicroApps(microApps)
  start({ sandbox: { strictStyleIsolation: true } })
}, [])
```

**注意**：路由切换时需要确保容器元素存在

### 3. Vue 主应用 (main-app)

**特点**：使用 Vue 3 + Vue Router

```vue
<script setup>
import { registerMicroApps, start, initGlobalState } from 'qiankun'

onMounted(() => {
  registerMicroApps(microApps)
  start({ sandbox: { strictStyleIsolation: true } })
})
</script>
```

**优势**：Composition API 与 qiankun 生命周期概念契合

### 4. Umi 主应用 (main-umi)

**特点**：使用官方插件 `@umijs/plugin-qiankun`，配置最简洁

```typescript
// .umirc.ts
export default defineConfig({
  qiankun: {
    master: {
      apps: [
        { name: 'react-app', entry: '//localhost:3000', activeRule: '/react' }
      ]
    }
  }
})
```

**优势**：官方维护，集成最完善，推荐生产使用

### 5. Angular 主应用 (main-angular)

**特点**：需要处理 zone.js 与 qiankun 沙箱的冲突

```typescript
import { NgZone } from '@angular/core'

constructor(private ngZone: NgZone) {}

ngOnInit() {
  this.ngZone.runOutsideAngular(() => {
    registerMicroApps(microApps)
    start({ sandbox: { strictStyleIsolation: true } })
  })
}
```

**注意**：需要配置 `CUSTOM_ELEMENTS_SCHEMA`

### 6. Midway 主应用 (main-midway)

**特点**：BFF 架构，后端提供 API，前端使用静态 HTML

```typescript
// 后端 Controller
@Get('/*')
async index(ctx) {
  ctx.body = `<!DOCTYPE html>
    <!-- 静态 HTML 主应用 -->
    <script>
      // 使用 qiankun CDN
    <\/script>`
}
```

**优势**：适合需要后端支撑的场景，前后端一体化

## 🎯 对比学习要点

### 对比维度

| 维度 | 原生JS | React | Vue | Umi | Angular | Midway |
|------|--------|-------|-----|-----|---------|--------|
| 接入复杂度 | ⭐ | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |
| 官方支持 | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| 路由集成 | 手动 | React Router | Vue Router | Umi Router | Angular Router | 手动 |
| 学习成本 | 低 | 中 | 中 | 低 | 高 | 中 |
| 生产推荐 | ❌ | ✅ | ✅ | ✅✅ | ⚠️ | ✅ |

### 练习任务

1. **基础对比**：分别启动不同主应用，观察它们如何加载同一个微应用
2. **生命周期**：打开浏览器控制台，观察 bootstrap/mount/unmount 的调用顺序
3. **全局状态**：在不同主应用中更新全局计数，观察微应用是否同步
4. **路由切换**：对比不同框架的路由实现方式
5. **样式隔离**：关闭 `strictStyleIsolation`，观察样式污染情况

## 📝 Qiankun 核心概念

### 微应用生命周期

```typescript
export async function bootstrap() { /* 初始化 */ }
export async function mount(props) { /* 挂载 */ }
export async function unmount() { /* 卸载 */ }
```

### 微应用注册

```typescript
registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:3000',
    container: '#micro-container',
    activeRule: '/react'
  }
])
```

### 全局状态管理

```typescript
const actions = initGlobalState({ count: 0 })
actions.onGlobalStateChange((state, prev) => {})
actions.setGlobalState({ count: 1 })
```

## 🔧 常见问题

### Q: 微应用加载失败？
- 确保微应用已启动且端口正确
- 检查微应用是否正确导出 bootstrap/mount/unmount
- 检查浏览器控制台错误信息

### Q: Vite 微应用无法被加载？
- 确保安装了 `vite-plugin-qiankun`
- 配置：`qiankun('app-name', { useDevMode: true })`

### Q: Angular 主应用有问题？
- 使用 `ngZone.runOutsideAngular` 包裹 qiankun 调用
- 配置 `CUSTOM_ELEMENTS_SCHEMA`

## 📚 参考资料

- [Qiankun 官方文档](https://qiankun.umijs.org/)
- [qiankun GitHub](https://github.com/umijs/qiankun)
- [@umijs/plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun)

## 📄 许可证

MIT License