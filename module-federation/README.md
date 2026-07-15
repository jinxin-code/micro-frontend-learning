# 🌐 Module Federation 微前端教学项目

> 基于 Webpack 5 Module Federation 的微前端架构学习项目，包含 Host 主应用和多个 Remote 远程应用。

## 📁 项目结构

```
module-federation/
├── pnpm-workspace.yaml       # pnpm monorepo 配置
├── package.json              # 根目录脚本
├── .gitignore                # Git 忽略配置
└── packages/
    # ============ Host 主应用 ============
    ├── host-app/             # React 主应用 - 端口 8401
    
    # ============ Remote 远程应用 ============
    ├── remote-react/         # React 远程应用 - 端口 8402
    ├── remote-vue/           # Vue 远程应用 - 端口 8403
    └── remote-utils/         # 工具组件远程应用 - 端口 8404
```

## 🛠 技术栈

### Host 主应用

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| host-app | React 18 + Webpack 5 | 8401 |

### Remote 远程应用

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| remote-react | React 18 + Webpack 5 | 8402 |
| remote-vue | Vue 3 + Webpack 5 | 8403 |
| remote-utils | React 18 + Webpack 5 | 8404 |

## 🚀 快速开始

### 安装依赖

```bash
cd module-federation
pnpm install
```

### 启动方式

**启动 Remote 远程应用**：

```bash
cd packages/remote-react && pnpm dev    # http://localhost:8402
cd packages/remote-vue && pnpm dev      # http://localhost:8403
cd packages/remote-utils && pnpm dev    # http://localhost:8404
```

**启动 Host 主应用**：

```bash
cd packages/host-app && pnpm dev        # http://localhost:8401
```

## 🔍 Module Federation 核心概念

### 1. exposes（暴露）

Remote 应用通过 `exposes` 配置暴露模块：

```javascript
new ModuleFederationPlugin({
  name: 'remoteReact',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
    './Button': './src/components/Button'
  }
})
```

### 2. remotes（引用）

Host 应用通过 `remotes` 配置引用远程模块：

```javascript
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    remoteReact: 'remoteReact@http://localhost:8402/remoteEntry.js'
  }
})
```

### 3. shared（共享）

共享依赖，避免重复加载：

```javascript
shared: {
  react: { singleton: true, requiredVersion: '^18.3.1' },
  'react-dom': { singleton: true, requiredVersion: '^18.3.1' }
}
```

### 4. 加载远程模块

使用 `lazy` 和 `Suspense` 加载远程组件：

```javascript
const RemoteApp = lazy(() => import('remoteReact/App'))

<Suspense fallback={<div>Loading...</div>}>
  <RemoteApp />
</Suspense>
```

## 📊 与 qiankun/single-spa 的区别

| 维度 | qiankun | single-spa | Module Federation |
|------|---------|------------|-------------------|
| **定位** | 企业级解决方案 | 底层框架 | 构建时模块共享 |
| **加载方式** | HTML Entry | SystemJS | 模块级加载 |
| **运行时隔离** | 内置 JS 沙箱 | 需要额外配置 | 无运行时隔离 |
| **样式隔离** | 内置支持 | 需要额外配置 | 需要额外配置 |
| **依赖共享** | 手动配置 | 手动配置 | 自动共享（shared） |
| **跨框架** | ✅ | ✅ | ✅ |
| **适用场景** | 大型企业应用 | 需要高度定制 | 组件库共享、微前端 |

## 📚 参考资料

- [Webpack 5 Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Module Federation Documentation](https://webpack.js.org/plugins/module-federation-plugin/)
- [Module Federation Examples](https://github.com/module-federation/module-federation-examples)