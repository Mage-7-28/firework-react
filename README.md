

# Firework 动画组件

这是一个使用 React 实现的 Firework（烟花）动画组件项目，提供了可视化效果的粒子动画展示。

## 项目简介

该项目主要用于展示烟花动画效果，基于 React 和 TypeScript 构建。动画通过定义粒子（Particle）的运动轨迹和行为模拟烟花绽放的效果。

## 主要功能

- **烟花动画**：通过定义 `Particle` 接口并实现 `Firework` React 组件，展示粒子动画的动态效果。
- **TypeScript 支持**：整个项目使用 TypeScript 编写，确保类型安全和更好的开发体验。

## 安装与使用

1. **安装依赖**

   确保已安装项目所需的依赖：
   ```bash
   npm install
   ```

2. **引入组件**

   在 React 项目中引入并使用 `Firework` 组件：
   ```tsx
   import { Firework } from './src/Firework';

   function App() {
     return (
       <div>
         <Firework />
       </div>
     );
   }
   ```

## 动画实现说明

- **Particle 接口**：用于定义动画中每个粒子的行为和属性。
- **Firework 组件**：基于 `React.FC` 实现，使用粒子系统驱动动画。

## 开发与构建

- 使用 `tsconfig.json` 管理 TypeScript 编译配置。
- 源代码位于 `src` 目录，包含 `Firework.tsx` 和 `index.ts`。

## 注意事项

- 项目中声明了外部模块 `undici-types` 和 `csstype`，确保相关依赖已安装。
- 动画性能可进一步优化，具体可根据实际需求调整粒子数量和生命周期。

## 许可证

遵循开源项目标准，请参考项目根目录中的许可证文件。