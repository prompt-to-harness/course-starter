# Course Starter

Prompt to Harness 课程第 1–3 章使用的项目起点，基于 React、TypeScript 和 Vite。

## 项目介绍

这是一个个人主页与小游戏实验室：介绍自己，展示正在探索的小项目，随后逐步加入游戏。初始页面可以运行，人物、项目和联系方式都是虚构占位内容，等待你把它变成自己的作品。

## 创建自己的项目

1. 点击 [Use this template → Create a new repository](https://github.com/new?template_name=course-starter&template_owner=prompt-to-harness)，创建自己的仓库。保留默认设置，只复制 `main` 即可。
2. 在新仓库点击 **Code**，复制你自己的仓库地址，然后执行：

   ```bash
   git clone 你自己的仓库地址
   cd 你的仓库目录
   ```

如果暂时无法使用模板，可以[下载 main 的 ZIP](https://github.com/prompt-to-harness/course-starter/archive/refs/heads/main.zip)，解压到新目录，在这个目录执行 `git init`。ZIP 不包含 Git 历史；之后再连接到自己的远端仓库。

课程练习在你自己的仓库中完成，不需要向课程仓库提交 PR。

## 本地运行

需要 **Node.js 22（22.12 或更高的 22.x 版本）** 和 npm。安装当前 Node 22 版本即可；使用 nvm 时可执行 `nvm install` 和 `nvm use`，仓库的 `.nvmrc` 已指定版本系列。

在包含 `package.json` 的目录中运行：

```bash
npm install
npm run dev
```

打开终端中 Vite 显示的本地地址。按 `Ctrl+C` 停止服务。

如果提示 Node 版本不支持，先用 `node --version` 检查版本，切换到 Node 22 后重新安装。仓库使用 npm 和 `package-lock.json`；按已有锁文件重新安装时，也可以使用 `npm ci`。

## 构建与检查

```bash
npm run build
npm run preview
```

`build` 检查 TypeScript 并生成 `dist/`；`preview` 在本地预览这份构建结果，需要先构建。它不负责把网站发布到公网。

每次修改后，除了构建，还要打开实际页面，在桌面和手机宽度下看一遍，并用 `git diff` 检查改了什么。

## 从哪里开始

第一章先改本 README 的「项目介绍」，完成一次小范围修改；再阅读 [BRIEF.md](./BRIEF.md)，把目标变成具体请求，改进首页。

| 文件 | 内容 |
| --- | --- |
| [src/content/site.ts](./src/content/site.ts) | 示例名字、主标题、简介、联系方式和项目内容 |
| [src/App.tsx](./src/App.tsx) | 页面结构和导航 |
| [src/styles.css](./src/styles.css) | 页面样式和自制 CSS 图形 |
| [index.html](./index.html) | 浏览器标题、页面语言和描述 |

项目卡片的 `href` 是可选字段：有真实入口后再添加，没有入口时展示为进行中的项目。只填写你愿意公开的内容；页面也可以保留虚构身份。使用中文页面时记得把 `index.html` 的 `lang` 改成 `zh-CN`。

下一章继续使用自己的项目。需要对照讲师代码或重新练习时，先阅读 [CHECKPOINTS.md](./CHECKPOINTS.md)，保留自己的内容再另建副本。

## 许可

本仓库的原创代码、示例内容和 CSS 图形采用 [MIT License](./LICENSE)。页面使用系统字体，不需要远程字体或图片服务。
