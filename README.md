# 🌐 微前端学习项目

> 一个完整的微前端架构对比学习项目，包含 **qiankun** 和 **single-spa** 两大主流方案，帮助你深入理解和对比不同微前端框架的实现方式。

[![GitHub stars](https://img.shields.io/github/stars/jinxin-code/micro-frontend-learning.svg?style=social)](https://github.com/jinxin-code/micro-frontend-learning)
[![License](https://img.shields.io/github/license/jinxin-code/micro-frontend-learning.svg)](https://github.com/jinxin-code/micro-frontend-learning/blob/main/LICENSE)

---

## 📖 项目简介

本项目旨在帮助开发者全面掌握微前端架构的核心概念和实践。通过对比学习 **qiankun** 和 **single-spa** 两种主流方案，你将深入理解：

- **微应用注册与加载机制**
- **生命周期管理**
- **全局状态通信**
- **样式隔离**
- **不同框架的接入差异**
- **两种方案的优缺点对比**

---

## 📁 项目结构

```
micro-frontend/
├── README.md                 # 根目录说明文档（你正在阅读）
├── .gitignore                # Git 忽略配置
│
├── qiankun/                  # qiankun 方案（已完成）
│   ├── packages/
│   │   ├── main-app/         # Vue 3 主应用 - 端口 8080
│   │   ├── main-vanilla/     # 原生 JS 主应用 - 端口 8101
│   │   ├── main-react/       # React 主应用 - 端口 8102
│   │   ├── main-umi/         # Umi 主应用 - 端口 8103
│   │   ├── main-angular/     # Angular 主应用 - 端口 8104
│   │   ├── main-midway/      # Midway 主应用 - 端口 8105
│   │   ├── react-app/        # React 微应用 - 端口 3000
│   │   ├── vue-app/          # Vue 微应用 - 端口 8081
│   │   └── static-app/       # 静态微应用 - 端口 8082
│   ├── README.md             # qiankun 方案详细文档
│   └── package.json          # qiankun 方案脚本
│
└── single-spa/               # single-spa 方案（计划中）
    ├── README.md             # single-spa 方案详细文档（待创建）
    └── packages/             # single-spa 项目（待创建）
```

---

## 🔧 技术栈对比

### 两大微前端方案

| 维度 | qiankun | single-spa |
|------|---------|------------|
| **定位** | 企业级微前端解决方案 | 微前端底层框架 |
| **封装程度** | 高（开箱即用） | 低（需要自己封装） |
| **样式隔离** | 内置支持 | 需要额外配置 |
| **JS 沙箱** | 内置支持 | 需要额外配置 |
| **官方插件** | 丰富（Umi 等） | 较少 |
| **学习成本** | 低 | 高 |
| **生产成熟度** | 高 | 高 |
| **社区活跃度** | 高 | 高 |

### qiankun 主应用技术栈

| 应用 | 技术栈 | 端口 |
|------|--------|------|
| main-app | Vue 3 + Vue Router + Vite | 8080 |
| main-vanilla | 原生 HTML/CSS/JS | 8101 |
| main-react | React 18 + React Router + Vite | 8102 |
| main-umi | Umi + @umijs/plugin-qiankun | 8103 |
| main-angular | Angular 18 + Angular Router | 8104 |
| main-midway | Midway BFF + 静态前端 | 8105 |

---

## 🚀 快速开始

### 环境要求

| 工具 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 18.x | 推荐使用 LTS 版本 |
| pnpm | >= 8.x | 包管理器 |

### 启动 qiankun 方案

```bash
# 进入 qiankun 目录
cd qiankun

# 安装依赖
pnpm install

# 启动微应用（3个终端）
cd packages/react-app && pnpm dev      # http://localhost:3000
cd packages/vue-app && pnpm dev        # http://localhost:8081
cd packages/static-app && pnpm serve   # http://localhost:8082

# 启动主应用（选择任意一个）
cd packages/main-app && pnpm dev       # Vue 主应用 - http://localhost:8080
cd packages/main-vanilla && pnpm serve # 原生 JS 主应用 - http://localhost:8101
cd packages/main-react && pnpm dev     # React 主应用 - http://localhost:8102
cd packages/main-umi && pnpm dev       # Umi 主应用 - http://localhost:8103
cd packages/main-angular && pnpm dev  # Angular 主应用 - http://localhost:8104
cd packages/main-midway && pnpm dev    # Midway 主应用 - http://localhost:8105
```

详细的启动说明请查看 [qiankun/README.md](qiankun/README.md)

---

## 🎯 学习路线

### 第一阶段：qiankun 入门

1. **启动项目**：按照快速开始指南启动 qiankun 方案
2. **基础概念**：理解微应用注册、生命周期、全局状态管理
3. **框架对比**：分别启动不同技术栈的主应用，对比接入方式的差异
4. **进阶学习**：阅读源码，理解沙箱机制、样式隔离原理

### 第二阶段：single-spa 入门（计划中）

1. **了解 single-spa**：阅读官方文档，理解核心概念
2. **启动项目**：启动 single-spa 方案
3. **对比学习**：对比 single-spa 与 qiankun 的实现差异

### 第三阶段：方案对比

1. **架构对比**：对比两种方案的架构设计
2. **性能对比**：对比加载速度、运行时性能
3. **场景选择**：根据业务场景选择合适的方案

---

## 📚 学习资源

### qiankun 相关
- [Qiankun 官方文档](https://qiankun.umijs.org/)
- [qiankun GitHub](https://github.com/umijs/qiankun)
- [@umijs/plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun)

### single-spa 相关（计划中）
- [single-spa 官方文档](https://single-spa.js.org/)
- [single-spa GitHub](https://github.com/single-spa/single-spa)

---

## 📋 待办事项

### 当前任务
- [x] 创建 qiankun 方案项目
- [x] 实现 6 种技术栈主应用
- [x] 实现 3 个共享微应用
- [x] 编写 qiankun 详细文档

### 计划任务
- [ ] 创建 single-spa 方案项目
- [ ] 实现 single-spa 主应用和微应用
- [ ] 编写 single-spa 详细文档
- [ ] 编写 qiankun vs single-spa 对比文档

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