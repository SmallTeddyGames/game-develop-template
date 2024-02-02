# Web端游戏开发模板

## 项目介绍

### 🪢 frame
该项目致力于让所有前端开发者可以直接套用，在此基础上进行简单的前端游戏开发，项目使用了 `vue3` 作为主要开发框架，用 `vite` 工具构建，由于 `vue3` 框架全面支持了 `typescript` 语法，所以本项目也采用了 `typescript` 语言来替代 `javascript`，使用 `vue-router` 来做路由管理，同时使用 `pnpm` 作为包管理工具，来替代 `npm` 和 `yarn`。

### 🎀 css-config
值得注意的是，该项目采用了大佬 `antfu` 的很多依赖工具，除了 `vite` 之外，还使用了原子化的 `css` 开发库 `unocss`，
如果想学习的小伙伴可以参考官网的开发文档：[UnoCss 官网](https://unocss.dev/)，如果想要查看一些 `css` 属性对应的语法转换，可以直接访问：[UnoCss 可视化配置](https://unocss.dev/interactive/)。并且本项目除了传统的 `flex` 布局之外，还使用了 `grid` 布局，如果对该布局不了解的小伙伴，也可以参考这个网站来进行了解和学习：[CssGrid 布局](	https://cssgrid-generator.netlify.app/)。

### 🔅 icons
本项目中还使用了 `iconify` 图标工具库，小伙伴在开发的时候，如果想要找自己喜欢的图标，可以访问这个网站去查询：[icons 图标大全](https://icones.js.org/collection/all)。

### 📃 eslint-config
项目中的 `eslint` 规范也同样采用了 `antfu` 的语法规范库 `@antfu/eslint-config` 的配置，如果有需要自定义个人 `eslint` 配置的可以直接在根目录下的 `eslint.config.ts` 替换个人配置，或者基于 [eslint 配置](https://github.com/antfu/eslint-config) 网站的配置上进行修改。

### 📎️ vueuse
除了上面的一些工具外，还使用了常用的 `vueuse` 工具，值得注意的是，本项目没有使用 `pinia` 来做状态管理，而是使用了 `vueuse` 中的 `useGlobalState` 方法在本地来进行统一的状态管理。

### 🛠️gh-page
在项目配置方面，使用了 `gh-pages` 工具来进行项目在 `github` 上的部署，用户可以直接访问 `https://<username>.github.io/<repo-name>` 来访问项目。部署的方式也很简单：

- 1、创建一个部署的分支，个人习惯直接用 `deploy` 分支，名字根据个人爱好随意
- 2、修改 `deploy` 分支中路由的跟路径为 `<repo-name>`
    ```javascript
    // 修改前
    history: createWebHistory('/')
    // 修改后
    history: createWebHistory('/game-develop-template')
    ```
- 3、修改 `vite.config.ts` 配置，在 `defineConfig` 中增加 `base: './'` 属性。
- 4、执行 `npm run develop` 命令，这个命令会先执行 `predeploy` 中的 `pnpm run build` 打包命令，之后会执行 `deploy` 的 `gh-pages -d dist`，第二个命令会将打包好的 `dist` 包上传到项目 `gh-pages` 分支中，之后 `github` 项目仓库中的 `Actions` 会配置该项目的 `Github Pages`，您可以在 `github` 项目仓库的 `Settings` 中的 `Pages` 选项卡中查看。

### 💡 vscode-setting
除了上面的配置外，推荐直接根据项目的 `.vscode` 的 `extensions.json` 安装 `vscode` 插件，可以得到更好的开发效果。该配置仓库可参考：[vscode 配置](https://github.com/antfu/vscode-settings)。

<br />

## 项目启动

### 1、默认安装方式

```bash
# 安装依赖
pnpm install
# 启动项目
pnpm run dev
```

### 2、推荐使用工具
个人比较推荐 `antfu` 大佬的 `ni` 工具。地址为：[ni 工具](https://github.com/antfu/ni)

```bash
# 安装命令
npm i -g @antfu/ni
# 安装依赖
ni
# 启动项目
nr
```

<br />

## 项目首页展示

![游戏布局界面](./mdAssets/game-layout.png)

<br />

## 待办任务模板

- [x] 任务 1
- [ ] 任务 2
- [ ] 任务 3 (备注内容)
- [x] 任务 4
