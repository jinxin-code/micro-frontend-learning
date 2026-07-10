# 🌐 Qiankun 微前端教学项目

> 一个完整的微前端架构学习项目，包含 **6 种不同技术栈的主应用** 和 **3 个微应用**，帮助你深入理解和对比不同框架接入 qiankun 的方式。

[![GitHub stars](https://img.shields.io/github/stars/jinxin-code/micro-frontend-learning.svg?style=social)](https://github.com/jinxin-code/micro-frontend-learning)
[![License](https://img.shields.io/github/license/jinxin-code/micro-frontend-learning.svg)](https://github.com/jinxin-code/micro-frontend-learning/blob/main/LICENSE)

---

## � 项目简介

本项目旨在帮助开发者快速掌握微前端架构的核心概念和实践。通过对比学习不同技术栈的主应用如何接入 qiankun，你将深入理解：

- **微应用注册与加载机制**
- **生命周期管理**
- **全局状态通信**
- **样式隔离**
- **不同框架的接入差异**

---

## �📁 项目结构

```
micro-frontend/
├── .gitignore                # Git 忽略配置
├── pnpm-workspace.yaml       # pnpm monorepo 配置
├── package.json              # 根目录脚本
├── pnpm-lock.yaml            # pnpm 依赖锁文件
└── packages/
    # ============ 主应用（6个，不同技术栈）===========
    ├── main-app/             # Vue 3 + Vue Router + Vite - 端口 8080
    ├── main-vanilla/         # 原生 HTML/CSS/JS - 端口 8101
    ├── main-react/           # React 18 + React Router + Vite - 端口 8102
    ├── main-umi/             # Umi + @umijs/plugin-qiankun - 端口 8103
    ├── main-angular/         # Angular 18 + Angular Router - 端口 8104
    ├── main-midway/          # Midway BFF + 静态前端 - 端口 8105
    
    # ============ 微应用（3个，共享）===========
    ├── react-app/            # React 18 + TypeScript + Vite - 端口 3000
    ├── vue-app/              # Vue 3 + TypeScript + Vite - 端口 8081
    └── static-app/           # HTML/CSS/JavaScript - 端口 8082
```

---

## 🛠 技术栈总览

### 主应用对比

| 应用 | 技术栈 | 端口 | 难度 | 特点 |
|------|--------|------|------|------|
| **main-app** | Vue 3 + Vue Router + Vite | 8080 | ⭐⭐ | 主流选择，生态成熟，推荐学习 |
| **main-vanilla** | 原生 HTML/CSS/JS | 8101 | ⭐ | 最简单，直接使用 qiankun API，适合入门 |
| **main-react** | React 18 + React Router + Vite | 8102 | ⭐⭐ | 主流选择，生态成熟 |
| **main-umi** | Umi + @umijs/plugin-qiankun | 8103 | ⭐ | 官方插件，集成最丝滑，生产首选 |
| **main-angular** | Angular 18 + Angular Router | 8104 | ⭐⭐⭐ | 需要处理 zone.js 冲突，较复杂 |
| **main-midway** | Midway BFF + 静态前端 | 8105 | ⭐⭐ | BFF 架构，后端提供 API 服务 |

### 微应用

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| **react-app** | React 18 + TypeScript + Vite + vite-plugin-qiankun | 3000 |
| **vue-app** | Vue 3 + TypeScript + Vite + vite-plugin-qiankun | 8081 |
| **static-app** | HTML/CSS/JavaScript（纯静态） | 8082 |

---

## 🚀 快速开始

### 环境要求

| 工具 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 18.x | 推荐使用 LTS 版本 |
| pnpm | >= 8.x | 包管理器 |

### 安装步骤

```bash
# 1. 安装 pnpm（如未安装）
npm install -g pnpm

# 2. 克隆项目
git clone https://github.com/jinxin-code/micro-frontend-learning.git
cd micro-frontend-learning

# 3. 安装所有依赖（这会安装所有子项目的依赖）
pnpm install
```

### 启动应用

**第一步：启动微应用（需要 3 个终端）**

```bash
# 终端 1：React 微应用
cd packages/react-app && pnpm dev
# 访问: http://localhost:3000

# 终端 2：Vue 微应用
cd packages/vue-app && pnpm dev
# 访问: http://localhost:8081

# 终端 3：静态微应用
cd packages/static-app && pnpm serve
# 访问: http://localhost:8082
```

**第二步：启动主应用（选择任意一个）**

```bash
# Vue 主应用
cd packages/main-app && pnpm dev
# 访问: http://localhost:8080

# 原生 JS 主应用
cd packages/main-vanilla && pnpm serve
# 访问: http://localhost:8101

# React 主应用
cd packages/main-react && pnpm dev
# 访问: http://localhost:8102

# Umi 主应用
cd packages/main-umi && pnpm dev
# 访问: http://localhost:8103

# Angular 主应用
cd packages/main-angular && pnpm dev
# 访问: http://localhost:8104

# Midway 主应用
cd packages/main-midway && pnpm dev
# 访问: http://localhost:8085
```

### 使用根目录脚本

```bash
# 启动所有微应用
pnpm run start:react    # React 微应用
pnpm run start:vue      # Vue 微应用  
pnpm run start:static   # 静态微应用

# 启动主应用
pnpm run start:main         # Vue 主应用
pnpm run start:vanilla      # 原生 JS 主应用
pnpm run start:main-react   # React 主应用
pnpm run start:umi          # Umi 主应用
pnpm run start:angular      # Angular 主应用
pnpm run start:midway       # Midway 主应用
```

---

## 🔍 各主应用接入详解

### 1. 原生 JS 主应用 (main-vanilla)

**接入方式**：通过 `<script>` 标签引入 qiankun UMD 包

```html
<script src="./node_modules/qiankun/dist/index.umd.js"></script>
```

**核心代码**：

```javascript
const { registerMicroApps, start, initGlobalState } = window.qiankun

registerMicroApps([
  { name: 'react-app', entry: '//localhost:3000', container: '#container', activeRule: '/react' }
])

start({ sandbox: { strictStyleIsolation: true } })
```

**学习要点**：
- 最直接地展示了 qiankun 的核心 API
- 无需构建工具，代码完全透明
- 适合理解 qiankun 的底层原理

---

### 2. Vue 3 主应用 (main-app)

**接入方式**：通过 npm 包引入，在 Vue 组件中调用

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

onMounted(() => {
  registerMicroApps(microApps)
  start({ sandbox: { strictStyleIsolation: true } })
})
</script>
```

**学习要点**：
- Vue 3 的 Composition API 与 qiankun 生命周期概念天然契合
- 使用 Vue Router 管理路由，通过 `activeRule` 匹配微应用
- 通过 `provide/inject` 传递全局状态

---

### 3. React 主应用 (main-react)

**接入方式**：通过 npm 包引入，在 useEffect 中调用

```tsx
import { useEffect } from 'react'
import { registerMicroApps, start, initGlobalState } from 'qiankun'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    registerMicroApps(microApps)
    start({ sandbox: { strictStyleIsolation: true } })
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/react" element={<MicroApp />} />
      </Routes>
    </Router>
  )
}
```

**学习要点**：
- React Router 与 qiankun 的路由匹配机制配合
- 使用 useEffect 确保组件挂载后再注册微应用
- 需要注意路由切换时容器元素的存在性

---

### 4. Umi 主应用 (main-umi)

**接入方式**：使用官方插件 `@umijs/plugin-qiankun`

```typescript
// .umirc.ts
import { defineConfig } from 'umi'

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        { name: 'react-app', entry: '//localhost:3000', activeRule: '/react' }
      ],
      sandbox: { strictStyleIsolation: true }
    }
  }
})
```

**学习要点**：
- 配置最简洁，官方维护
- 自动处理路由和生命周期
- 生产环境最推荐的方式

---

### 5. Angular 主应用 (main-angular)

**接入方式**：需要特殊处理 zone.js 冲突

```typescript
import { NgZone } from '@angular/core'
import { registerMicroApps, start } from 'qiankun'

constructor(private ngZone: NgZone) {}

ngOnInit() {
  this.ngZone.runOutsideAngular(() => {
    registerMicroApps(microApps)
    start({ sandbox: { strictStyleIsolation: true } })
  })
}
```

**学习要点**：
- 需要使用 `runOutsideAngular` 避免 zone.js 与 qiankun 沙箱冲突
- 需要在 `AppModule` 中配置 `CUSTOM_ELEMENTS_SCHEMA`
- Angular 的集成相对复杂，需要额外配置

---

### 6. Midway 主应用 (main-midway)

**接入方式**：BFF 架构，后端提供 API，前端使用静态 HTML

```typescript
// 后端 Controller
@Provide()
@Controller('/')
export class HomeController {
  @Get('/*')
  async index(ctx) {
    ctx.body = `<!DOCTYPE html>
      <!-- 静态 HTML 主应用 -->
      <script src="https://cdn.jsdelivr.net/npm/qiankun@2.10.16/dist/index.umd.js"></script>
    `
  }
  
  @Get('/api/user')
  async getUser() {
    return { name: 'Guest', role: 'visitor' }
  }
}
```

**学习要点**：
- Midway 作为 BFF 层提供 API 服务
- 前端使用静态 HTML，通过 CDN 引入 qiankun
- 适合需要后端支撑的微前端场景

---

## 🎯 对比学习指南

### 对比维度表

| 维度 | 原生JS | Vue | React | Umi | Angular | Midway |
|------|--------|-----|-------|-----|---------|--------|
| **接入复杂度** | ⭐ | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |
| **官方支持** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **路由集成** | 手动 | Vue Router | React Router | 自动 | Angular Router | 手动 |
| **学习成本** | 低 | 中 | 中 | 低 | 高 | 中 |
| **生产推荐** | ❌ | ✅ | ✅ | ✅✅ | ⚠️ | ✅ |
| **配置代码量** | 少 | 中 | 中 | 极少 | 多 | 中 |

### 练习任务

#### 基础任务
1. **启动测试**：分别启动 6 个主应用，验证它们都能正常加载微应用
2. **路由切换**：在每个主应用中切换不同微应用，观察加载过程
3. **控制台日志**：打开浏览器控制台，观察生命周期钩子的调用顺序

#### 进阶任务
1. **全局状态同步**：在主应用中点击"更新全局计数"按钮，观察微应用是否同步更新
2. **样式隔离测试**：关闭 `strictStyleIsolation`，观察微应用样式是否污染主应用
3. **独立运行**：直接访问微应用的独立地址，验证微应用可以独立运行

#### 深入任务
1. **源码阅读**：阅读各主应用的核心配置文件，对比接入方式的差异
2. **Angular 调试**：尝试不使用 `runOutsideAngular`，观察会出现什么问题
3. **Umi 配置**：尝试在 Umi 中添加更多配置项，了解官方插件的能力

---

## 📝 Qiankun 核心概念

### 微应用生命周期

每个微应用必须导出三个生命周期钩子：

```typescript
// 微应用入口文件
export async function bootstrap() {
  // 初始化：只会在微应用第一次加载时调用
  console.log('微应用初始化')
}

export async function mount(props) {
  // 挂载：每次微应用激活时调用
  console.log('微应用挂载', props)
}

export async function unmount() {
  // 卸载：每次微应用失活时调用
  console.log('微应用卸载')
}
```

### 微应用注册配置

```typescript
registerMicroApps([
  {
    name: 'react-app',           // 微应用名称，必须唯一
    entry: '//localhost:3000',   // 微应用入口地址
    container: '#micro-container', // 微应用挂载的容器元素
    activeRule: '/react',        // 路由匹配规则
    props: { token: 'xxx' }      // 传递给微应用的自定义参数
  }
])
```

### 全局状态管理

主应用通过 `initGlobalState` 创建全局状态：

```typescript
const actions = initGlobalState({
  count: 0,
  user: { name: 'Guest', role: 'visitor' },
  theme: 'light'
})

// 监听全局状态变化
actions.onGlobalStateChange((state, prev) => {
  console.log('全局状态变化:', prev, '->', state)
})

// 更新全局状态
actions.setGlobalState({ count: 1 })
```

微应用通过 `props` 接收全局状态：

```typescript
export async function mount(props) {
  // 订阅全局状态
  props.onGlobalStateChange((state) => {
    console.log('微应用收到全局状态:', state)
  })
  
  // 更新全局状态
  props.setGlobalState({ count: 2 })
}
```

### 沙箱配置

qiankun 提供三种沙箱模式：

```typescript
start({
  sandbox: {
    strictStyleIsolation: true, // 严格样式隔离（推荐）
    experimentalStyleIsolation: false, // 实验性样式隔离
    sandboxInStrictMode: true // 严格模式下运行沙箱
  }
})
```

---

## 🔧 常见问题

### Q: 微应用加载失败？

**可能原因**：
- 微应用未启动或端口错误
- 微应用未正确导出生命周期钩子
- 跨域问题

**解决方法**：
1. 确保微应用已启动且端口与配置一致
2. 检查微应用入口文件是否正确导出 `bootstrap`、`mount`、`unmount`
3. 检查浏览器控制台的错误信息
4. 确保主应用和微应用的协议一致（都是 http 或都是 https）

### Q: Vite 微应用无法被加载？

**解决方法**：
1. 确保安装了 `vite-plugin-qiankun`
2. 在 `vite.config.ts` 中配置：
   ```typescript
   import qiankun from 'vite-plugin-qiankun'
   
   export default defineConfig({
     plugins: [react(), qiankun('react-app', { useDevMode: true })]
   })
   ```
3. 微应用入口文件需要同时支持独立运行和作为子应用加载

### Q: Angular 主应用有问题？

**解决方法**：
1. 使用 `NgZone.runOutsideAngular` 包裹 qiankun 调用
2. 在 `AppModule` 中配置 `CUSTOM_ELEMENTS_SCHEMA`
3. 确保 Angular 版本与 qiankun 兼容

### Q: 全局状态不生效？

**解决方法**：
1. 确保主应用调用了 `initGlobalState`
2. 微应用需要在 `mount` 钩子中通过 `props` 接收全局状态
3. 检查是否在正确的时机调用了 `setGlobalState`

### Q: 样式污染？

**解决方法**：
1. 在 `start` 中启用 `strictStyleIsolation: true`
2. 微应用使用 CSS Modules 或 scoped styles
3. 避免使用全局样式选择器

---

## 📚 学习资源

### 官方文档
- [Qiankun 官方文档](https://qiankun.umijs.org/)
- [qiankun GitHub](https://github.com/umijs/qiankun)
- [@umijs/plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun)

### 相关文章
- [微前端入门指南](https://qiankun.umijs.org/guide/getting-started)
- [qiankun 原理深度解析](https://qiankun.umijs.org/guide/principle)
- [微前端最佳实践](https://qiankun.umijs.org/guide/best-practices)

### 视频教程
- [qiankun 官方视频课程](https://qiankun.umijs.org/guide/video-course)

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交代码：`git commit -m "feat: xxx"`
4. 推送分支：`git push origin feature/xxx`
5. 创建 Pull Request

### 代码规范
- 使用 TypeScript
- 遵循 ESLint 规范
- 保持代码简洁清晰
- 添加必要的注释

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 💬 交流讨论

如有问题或建议，欢迎：
- 提交 GitHub Issue
- 发送邮件至 jinxin.code@gmail.com

---

*⭐ 如果这个项目对你有帮助，请给它点个 Star！*

---

**最后更新**：2026年7月
**作者**：Jinxin