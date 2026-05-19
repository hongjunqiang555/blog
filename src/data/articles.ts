import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: 'react-hooks-guide',
    title: 'React Hooks 完全指南',
    summary: '深入理解 useState、useEffect、useContext 等核心 Hooks 的使用方法和最佳实践。',
    content: `## 什么是 React Hooks？

React Hooks 是 React 16.8 引入的新特性，允许你在函数组件中使用 state 和其他 React 特性。

## useState

\`useState\` 是最基础的 Hook，用于在函数组件中添加状态。

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

### 使用规则

1. 只在最顶层使用 Hook
2. 只在 React 函数中调用 Hook

## useEffect

\`useEffect\` 用于处理副作用，比如数据获取、订阅、手动修改 DOM 等。

\`\`\`tsx
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
  return () => {
    // cleanup
  };
}, [count]);
\`\`\`

## useContext

\`useContext\` 让你不使用组件嵌套就可以订阅 React 的 Context。

\`\`\`tsx
const theme = useContext(ThemeContext);
\`\`\`

## 自定义 Hook

你可以创建自己的 Hook 来复用状态逻辑：

\`\`\`tsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}
\`\`\`

> Hooks 让函数组件拥有了类组件的全部能力，同时代码更简洁、更易于测试和复用。`,
    category: 'React',
    tags: ['React', 'Hooks', '前端'],
    date: '2024-12-15',
    author: 'Blog Author',
  },
  {
    id: 'typescript-advanced',
    title: 'TypeScript 高级类型技巧',
    summary: '掌握 TypeScript 的泛型、条件类型、映射类型等高级特性，写出更安全的代码。',
    content: `## 泛型 (Generics)

泛型允许你编写可重用的组件，同时保持类型安全：

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>('hello');
\`\`\`

## 条件类型

条件类型可以根据类型关系选择不同的类型：

\`\`\`typescript
type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'
\`\`\`

## 映射类型

映射类型可以从已有类型创建新类型：

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## 模板字面量类型

TypeScript 4.1 引入了模板字面量类型：

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>; // 'onClick'
\`\`\`

## 实用工具类型

| 类型 | 描述 |
|------|------|
| \`Partial<T>\` | 所有属性可选 |
| \`Required<T>\` | 所有属性必选 |
| \`Pick<T, K>\` | 选取部分属性 |
| \`Omit<T, K>\` | 排除部分属性 |
| \`Record<K, T>\` | 构造对象类型 |

> 善用 TypeScript 的类型系统，可以在编译时捕获大量错误。`,
    category: 'TypeScript',
    tags: ['TypeScript', '类型系统', '前端'],
    date: '2024-12-10',
    author: 'Blog Author',
  },
  {
    id: 'vite-deep-dive',
    title: 'Vite 构建工具深度解析',
    summary: '了解 Vite 的核心原理、HMR 机制和插件系统，提升前端开发效率。',
    content: `## 为什么选择 Vite？

传统的打包工具（如 Webpack）在项目规模增大时，启动和热更新速度会显著下降。Vite 利用浏览器原生 ES 模块支持，实现了极快的开发体验。

## 核心原理

### 开发模式

Vite 在开发模式下不打包代码，而是利用浏览器的原生 ESM：

\`\`\`
浏览器请求模块 → Vite 拦截 → 按需编译 → 返回结果
\`\`\`

### 生产构建

生产环境使用 Rollup 进行打包，确保输出优化：

\`\`\`javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
\`\`\`

## HMR（热模块替换）

Vite 的 HMR 基于 ESM，只需要精确地更新被修改的模块：

\`\`\`typescript
if (import.meta.hot) {
  import.meta.hot.accept('./module.ts', (newModule) => {
    // 处理更新
  });
}
\`\`\`

## 插件系统

Vite 插件兼容 Rollup 插件接口：

\`\`\`typescript
function myPlugin(): Plugin {
  return {
    name: 'my-plugin',
    transform(code, id) {
      if (id.endsWith('.custom')) {
        return transformCustomFile(code);
      }
    },
  };
}
\`\`\`

> Vite 正在成为前端构建工具的新标准，值得每个前端开发者深入学习。`,
    category: '工程化',
    tags: ['Vite', '构建工具', '前端工程化'],
    date: '2024-11-28',
    author: 'Blog Author',
  },
  {
    id: 'css-tailwind-tips',
    title: 'TailwindCSS 实用技巧总结',
    summary: '从响应式设计到暗色模式，分享 TailwindCSS 开发中的实用技巧和常见模式。',
    content: `## 响应式设计

Tailwind 使用移动优先的断点系统：

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  响应式网格
</div>
\`\`\`

| 断点 | 最小宽度 | CSS |
|------|----------|-----|
| sm | 640px | @media (min-width: 640px) |
| md | 768px | @media (min-width: 768px) |
| lg | 1024px | @media (min-width: 1024px) |
| xl | 1280px | @media (min-width: 1280px) |

## 暗色模式

使用 \`dark:\` 前缀支持暗色模式：

\`\`\`html
<div class="bg-white dark:bg-gray-800">
  <p class="text-gray-900 dark:text-gray-100">
    自动适应主题
  </p>
</div>
\`\`\`

## 常用组合模式

### 卡片组件

\`\`\`html
<div class="rounded-lg shadow-md p-6
  bg-white dark:bg-gray-800
  hover:shadow-lg transition-shadow">
  <h3 class="text-lg font-bold">标题</h3>
  <p class="text-gray-600 dark:text-gray-300 mt-2">内容</p>
</div>
\`\`\`

### 渐变文字

\`\`\`html
<span class="bg-gradient-to-r from-blue-500 to-purple-500
  bg-clip-text text-transparent font-bold">
  渐变文字效果
</span>
\`\`\`

## 自定义配置

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
    },
  },
};
\`\`\`

> TailwindCSS 的原子化理念让样式开发变得快速且一致。`,
    category: 'CSS',
    tags: ['TailwindCSS', 'CSS', '响应式设计'],
    date: '2024-11-20',
    author: 'Blog Author',
  },
  {
    id: 'git-workflow',
    title: 'Git 工作流最佳实践',
    summary: '团队协作中的 Git 分支策略、Commit 规范和 Code Review 流程总结。',
    content: `## 分支策略

推荐使用 GitHub Flow 或 Git Flow：

\`\`\`
main ──────────────────────────────
  \\                    /
   feature/login ────
\`\`\`

### 分支命名规范

- \`feature/xxx\` — 新功能
- \`fix/xxx\` — Bug 修复
- \`refactor/xxx\` — 重构
- \`docs/xxx\` — 文档

## Commit 规范

使用 Conventional Commits：

\`\`\`
feat: 添加用户登录功能
fix: 修复列表分页问题
docs: 更新 API 文档
refactor: 重构权限校验模块
chore: 更新依赖版本
\`\`\`

## Code Review 要点

- [ ] 代码是否符合团队规范
- [ ] 是否有潜在的性能问题
- [ ] 错误处理是否完善
- [ ] 是否有充分的测试覆盖
- [ ] 是否有安全隐患

## 常用命令

\`\`\`bash
# 交互式 rebase
git rebase -i HEAD~3

# 暂存当前修改
git stash
git stash pop

# 查看提交图
git log --oneline --graph --all
\`\`\`

> 良好的 Git 工作流是团队高效协作的基础。`,
    category: '工程化',
    tags: ['Git', '团队协作', '工程化'],
    date: '2024-11-15',
    author: 'Blog Author',
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getCategories(): string[] {
  return [...new Set(articles.map((a) => a.category))];
}

export function getAllTags(): string[] {
  return [...new Set(articles.flatMap((a) => a.tags))];
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((a) => a.tags.includes(tag));
}
