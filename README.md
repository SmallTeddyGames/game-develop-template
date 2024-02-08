# 🧸 Web端游戏开发模板项目

<img alt="game-code-font" src="./mdAssets/game-code-font.png">

<details open>
  <summary><h2>🎮 项目介绍</h2></summary>
  
### 🪢 frame
  
该项目致力于让所有前端开发者可以直接套用，在此基础上进行简单的前端游戏开发，项目使用了 `vue3` 作为主要开发框架，用 `vite` 工具构建。由于 `vue3` 框架全面支持了 `typescript` 语法，所以本项目也采用了 `typescript` 语言来替代 `javascript`。
  
使用 `vue-router` 来做路由管理，同时使用 `pnpm` 作为包管理工具，来替代 `npm` 和 `yarn`。
  
### 🎀 css-config
  
值得注意的是，该项目采用了大佬 `antfu` 的很多依赖工具，除了 `vite` 之外，还使用了原子化的 `css` 开发库 `unocss`， 如果想学习的小伙伴可以参考官网的开发文档：[UnoCss 官网](https://unocss.dev/)，如果想要查看一些 `css` 属性对应的语法转换，可以直接访问：[UnoCss 可视化配置](https://unocss.dev/interactive/)。
  
并且本项目除了传统的 `flex` 布局之外，还使用了 `grid` 布局，如果对该布局不了解的小伙伴，也可以参考这个网站来进行了解和学习：[CssGrid 布局]( https://cssgrid-generator.netlify.app/)。

### 🔅 icons
  
本项目中还使用了 `iconify` 图标工具库，小伙伴在开发的时候，如果想要找自己喜欢的图标，可以访问这个网站去查询：[icons 图标大全](https://icones.js.org/collection/all)。
  
### 📃 eslint-config
  
项目中的 `eslint` 规范也同样采用了 `antfu` 的语法规范库 `@antfu/eslint-config` 的配置，如果有需要自定义个人 `eslint` 配置的可以直接在根目录下的 `eslint.config.ts` 替换个人配置，或者基于 [eslint 配置](https://github.com/antfu/eslint-config) 网站的配置上进行修改。
  
### 📎️ vueuse
  
除了上面的一些工具外，还使用了常用的 `vueuse` 工具，值得注意的是，本项目没有使用 `pinia` 来做状态管理，而是使用了 `vueuse` 中的 `useGlobalState` 方法在本地来进行统一的状态管理。
  
### 🛠️ gh-page
  
在项目配置方面，使用了 `gh-pages` 工具来进行项目在 `github` 上的部署，用户可以直接访问 `https://<username>.github.io/<repo-name>` 来访问项目。部署的方式也很简单：
  
- 1、创建一个部署的分支，个人习惯直接用 `deploy` 分支，名字根据个人爱好随意；
- 2、修改 `deploy` 分支中路由的跟路径为 `<repo-name>`；
  
```typescript
  // 修改前
  history: createWebHistory('/')
  
  // 修改后
  history: createWebHistory('/game-develop-template')
  ```
  
- 3、修改 `vite.config.ts` 配置，在 `defineConfig` 中增加 `base: './'` 属性；
- 4、执行 `npm run develop` 命令，这个命令会先执行 `predeploy` 中的 `pnpm run build` 打包命令，之后会执行 `deploy` 的 `gh-pages -d dist`，第二个命令会将打包好的 `dist` 包上传到项目 `gh-pages` 分支中，之后 `github` 项目仓库中的 `Actions` 会配置该项目的 `Github Pages`，您可以在 `github` 项目仓库的 `Settings` 中的 `Pages` 选项卡中查看；
  
### 💡 vscode-setting
  
除了上面的配置外，推荐直接根据项目的 `.vscode` 的 `extensions.json` 安装 `vscode` 插件，可以得到更好的开发效果。该配置仓库可参考：[vscode 配置](https://github.com/antfu/vscode-settings)。
</details>

<details open>
  <summary><h2>🚗 项目启动</h2></summary>

### 🎯 默认安装方式
  
```bash
# 安装依赖
pnpm install

# 启动项目
pnpm run dev
```
  
### 🎭 推荐使用工具
  
> 个人比较推荐 `antfu` 大佬的 `ni` 工具。地址为：[ni 工具](https://github.com/antfu/ni)
  
```bash
# 安装命令
npm i -g @antfu/ni

# 安装依赖
ni

# 启动项目
nr
  ```
</details>

<details open>
  <summary><h2>🌁 项目首页展示</h2></summary>

  ![游戏布局界面](./mdAssets/game-layout.png)
</details>

<details open>
  <summary><h2>📋 项目目录介绍</h2></summary>

```bash
game-develop-template
├─ .gitignore # git 忽略文件
├─ CHANGELOG.md # 改动日志
├─ LICENSE # 开源协议
├─ README.md # README
├─ auto-imports.d.ts # auto-import配置
├─ eslint.config.ts # eslint配置
├─ index.html # index
├─ src
│  ├─ App.vue # main
│  ├─ assets # 资源
│  ├─ main.ts #  main
│  ├─ router # 路由
│  ├─ store # 状态管理
│  ├─ styles # 样式
│  ├─ utils # 工具
│  ├─ views # 页面
│  │  ├─ Game #  游戏页面
│  │  │  ├─ GameMain.vue # 游戏主页面
│  │  │  └─ Home.vue # home
│  │  ├─ Layout # 布局
│  │  │  ├─ GameContent.vue # 中心
│  │  │  └─ GameNav.vue # 导航
│  │  ├─ NavButton # 导航功能按钮
│  │  │  ├─ ChangeGameStatus.vue # 切换游戏状态
│  │  │  ├─ ColorSchemeToggle.vue # 切换主题
│  │  │  ├─ FullScreenToggle.vue # 切换全屏、
│  │  │  └─ GitHubButton.vue # 打开github
│  │  └─ Type # 类型
│  │     └─ index.ts
│  └─ vite-env.d.ts # 环境变量
├─ tsconfig.json # 基础配置
├─ tsconfig.node.json # 服务端配置
├─ uno.config.ts # unocss配置
└─ vite.config.ts # 开发配置
```
</details>

<details open>
  <summary><h2>📦 项目开发配置说明</h2></summary>

### 🚉 vue-router

该项目采用 `vue-router` 做路由管理，路由配置在 `src/router/index.ts` 中。

您可以根据自己的游戏开发进度自己添加对应的路由界面。

### ⛽ vueuse

该项目采用 `vueuse` 做状态管理，状态配置在 `src/stores/index.ts`。

```typescript
export const useGlobalState: () => Ref<GameInfoType> = createGlobalState(
  () => useStorage('global-state', {
  // 游戏难度
  difficulty: 'middle',
  // 当前局此
  rounds: 0,
  // 游戏状态
  gameState: 'init',
  // 背景图片
  bgImage: 'game-bg',
  // 是否显示游戏日志
  isShowGameInfo: true,
  // 游戏日志
  gameLogItems: []
  })
)
```

您可以直接在 `useGlobalState` 中添加自己需要的属性进行全局的状态管理。

同时，在 `src/views/NavButton` 中，在 `ColorSchemeToggle.vue` 中使用了 `useColorMode` 来进行暗黑模式的切换，在 `FullScreenToggle.vue` 中使用了 `useFullscreen` 来进行全屏效果的实现。

### 🔦 unplugin-auto-import

该项目采用 `unplugin-auto-import` 来自动引入 `vue` 等相关 `API`。感兴趣的小伙伴可以参考该项目官网：
[unplugin-auto-import 官网](https://github.com/antfu/unplugin-auto-import)。

本项目对 `unplugin-auto-import` 进行了配置，配置文件在 `vite.config.ts` 中，具体如下：

```typescript
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        AutoImport({
            // 转型目标
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

            // 要注册的全局导入
            imports: [
                // vue 自动导入
                'vue',
                // vue-router 自动导入
                {
                    'vue-router': [
                        'createRouter',
                        'createWebHistory'
                    ]
                },
                // @vueuse/core 自动导入
                {
                    '@vueuse/core': [
                        'createGlobalState',
                        'useStorage',
                        'useColorMode',
                        'useFullscreen'
                    ]
                },
                // @/store 自动导入
                {
                    '@/store': [
                        'useGlobalState'
                    ]
                }
            ]
        }),
    ]
})
```

### 🎀 uno-css

项目使用了 `uno-css` 作为样式库，具体配置在 `uno.config.ts` 中，主要配置了 `shortcuts`、`rules`、`global`、`preflight` 等。

其中，您可以通过配置 `shortcuts` 中的属性，来自定义样式配置。

```typescript
shortcuts: {
    "border-base": "border-gray-200 dark:border-gray-500",
    "bg-active": "bg-gray:10",
    "flex-center": "flex items-center justify-center",
    "card-size": "w-120px h-164px",
    "bg-mask": "bg-white-80 dark:bg-black-30"
}
```

通过修改 `rules` 来自定义 `uno-css` 的规则，例如：

```typescript
rules: [
    [/^t-a-(\d+)$/, ([, d]) => ({transition: `all 0.${d}s linear`})],
    [ /^bg-white-(\d+)$/, ([, d]) => ({"background-color": `rgb(255 255 255 / ${d}%)`}) ],
    [ /^bg-black-(\d+)$/, ([, d]) => ({"background-color": `rgb(0 0 0 / ${d}%)`}) ],
    [/^l-s-(\d+)$/, ([, d]) => ({"letter-spacing": `${d}px`})],
]
```

> 更多配置请直接访问官网：[UnoCss 官网](https://unocss.dev/)

### 🔧 utils

项目提供了几个简单的工具函数：
- 1、获取 `assets` 静态资源路径的函数 `getAssetsFile`;
- 2、根据最大数字生成随机数的函数 `getRandomNumber`；
- 3、深拷贝函数 `deepClone`；
- 4、防抖函数 `debounce`
- 5、节流函数 `throttle`
</details>

<details open>
  <summary><h2>🎑 静态资源修改</h2></summary>

  1、修改 `src/assets` 中的游戏 `layout` 静态资源 `game-bg`。

  2、修改 `public` 中的 `svg` 图标，并在 `index.html` 中同步修改。

</details>

<details open>
  <summary><h2>📝 待办任务模板</h2></summary>

- [x] 任务 1
- [ ] 任务 2
  - [ ] 子任务 2-1
  - [ ] 子任务 2-2
- [ ] 任务 3 (备注内容)
- [x] 任务 4
</details>
