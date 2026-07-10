# 🌐 single-spa 微前端教学项目

> 基于 single-spa 的微前端架构学习项目，包含 Vue 和 React 主应用，以及 React、Vue、静态微应用。

## 📁 项目结构

```
single-spa/
├── pnpm-workspace.yaml       # pnpm monorepo 配置
├── package.json              # 根目录脚本
├── .gitignore                # Git 忽略配置
└── packages/
    # ============ 主应用 ============
    ├── main-app/             # Vue 3 主应用 - 端口 8201
    └── main-react/           # React 18 主应用 - 端口 8202
    
    # ============ 微应用 ============
    ├── react-app/            # React 微应用 - 端口 8300
    ├── vue-app/              # Vue 微应用 - 端口 8301
    └── static-app/           # 静态微应用 - 端口 8302
```

## 🛠 技术栈

### 主应用

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| main-app | Vue 3 + single-spa | 8201 |
| main-react | React 18 + single-spa | 8202 |

### 微应用

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| react-app | React 18 + vite-plugin-single-spa | 8300 |
| vue-app | Vue 3 + vite-plugin-single-spa | 8301 |
| static-app | HTML/CSS/JavaScript | 8302 |

## 🚀 快速开始

### 安装依赖

```bash
cd single-spa
pnpm install
```

### 启动方式

**启动微应用**：

```bash
cd packages/react-app && pnpm dev    # http://localhost:8300
cd packages/vue-app && pnpm dev      # http://localhost:8301
cd packages/static-app && pnpm serve # http://localhost:8302
```

**启动主应用**：

```bash
cd packages/main-app && pnpm dev       # Vue 主应用 - http://localhost:8201
cd packages/main-react && pnpm dev     # React 主应用 - http://localhost:8202
```

## 🔍 single-spa 核心概念

### 1. 微应用注册

single-spa 使用 `registerApplication` 注册微应用：

```typescript
registerApplication({
  name: '@single-spa/react-app',
  app: () => import('//localhost:8300/main.js'),
  activeWhen: ['/react'],
  customProps: { token: 'xxx' }
})
```

### 2. 生命周期

每个微应用必须导出三个生命周期钩子：

```typescript
export async function bootstrap(props) { /* 初始化 */ }
export async function mount(props) { /* 挂载 */ }
export async function unmount(props) { /* 卸载 */ }
```

### 3. 模块加载

single-spa 使用 SystemJS 加载微应用模块，微应用需要输出 SystemJS 格式：

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: 'system'
      }
    }
  }
})
```

### 4. 与 qiankun 的区别

| 维度 | qiankun | single-spa |
|------|---------|------------|
| 定位 | 企业级解决方案 | 底层框架 |
| JS 沙箱 | 内置 | 需要额外配置 |
| 样式隔离 | 内置 | 需要额外配置 |
| 模块加载 | HTML Entry | SystemJS |
| 封装程度 | 高 | 低 |
| 学习成本 | 低 | 高 |

## 📚 参考资料

- [single-spa 官方文档](https://single-spa.js.org/)
- [single-spa GitHub](https://github.com/single-spa/single-spa)
- [vite-plugin-single-spa](https://github.com/joeldenning/vite-plugin-single-spa)