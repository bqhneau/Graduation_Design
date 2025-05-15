## 运行命令

``` bash
  tree -L 3 -I node_modules
```



## web 端 项目结构

``` md
  .
  ├── babel.config.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── public
  │   ├── favicon .ico
  │   ├── favicon.png
  │   └── index.html
  ├── README.md
  ├── src
  │   ├── App.vue
  │   ├── assets
  │   │   ├── css
  │   │   ├── images
  │   │   └── logo.png
  │   ├── components
  │   │   ├── activity.vue
  │   │   ├── carousel.vue
  │   │   ├── comment.vue
  │   │   ├── company.vue
  │   │   ├── foot.vue
  │   │   ├── help.vue
  │   │   ├── job.vue
  │   │   ├── news.vue
  │   │   ├── oldstuff.vue
  │   │   └── oldstuffhot.vue
  │   ├── main.js
  │   ├── plugins
  │   │   └── element.js
  │   ├── router
  │   │   └── index.js
  │   ├── store
  │   │   ├── index.js
  │   │   └── modules
  │   └── views
  │       ├── activity.vue
  │       ├── content
  │       ├── help.vue
  │       ├── home.vue
  │       ├── index.vue
  │       ├── job.vue
  │       ├── kefu
  │       ├── news.vue
  │       ├── NotFound.vue
  │       ├── oldstuff.vue
  │       ├── search.vue
  │       └── webadmin
  ├── structure.md
  ├── todo.md
  └── vue.config.js
```

## 带描述

```md
  .
  ├── babel.config.js                 # Babel配置文件，用于JavaScript代码转换
  ├── jsconfig.json                   # JavaScript配置文件，提供编辑器支持
  ├── package-lock.json               # 依赖包版本锁定文件
  ├── package.json                    # 项目配置文件，包含依赖和脚本命令
  ├── public                          # 静态资源目录
  │   ├── favicon .ico                # 网站图标（ICO格式）
  │   ├── favicon.png                 # 网站图标（PNG格式）
  │   └── index.html                  # HTML模板文件
  ├── README.md                       # 项目说明文档
  ├── src                             # 源代码目录
  │   ├── App.vue                     # 根组件
  │   ├── assets                      # 资源文件目录
  │   │   ├── css                     # CSS样式文件
  │   │   ├── images                  # 图片资源
  │   │   └── logo.png                # 项目logo
  │   ├── components                  # 公共组件目录
  │   │   ├── activity.vue            # 活动组件
  │   │   ├── carousel.vue            # 轮播图组件
  │   │   ├── comment.vue             # 评论组件
  │   │   ├── company.vue             # 公司/组织组件
  │   │   ├── foot.vue                # 页脚组件
  │   │   ├── help.vue                # 帮助组件
  │   │   ├── job.vue                 # 招聘信息组件
  │   │   ├── news.vue                # 新闻组件
  │   │   ├── oldstuff.vue            # 二手物品组件
  │   │   └── oldstuffhot.vue         # 热门二手物品组件
  │   ├── main.js                     # 项目入口文件
  │   ├── plugins                     # 插件目录
  │   │   └── element.js              # Element UI配置文件
  │   ├── router                      # 路由配置目录
  │   │   └── index.js                # 路由主配置文件
  │   ├── store                       # Vuex状态管理目录
  │   │   ├── index.js                # Vuex主配置文件
  │   │   └── modules                 # Vuex模块目录
  │   └── views                       # 页面视图目录
  │       ├── activity.vue            # 活动页面
  │       ├── content                 # 内容详情页面目录
  │       ├── help.vue                # 帮助页面
  │       ├── home.vue                # 首页
  │       ├── index.vue               # 入口页面
  │       ├── job.vue                 # 招聘信息页面
  │       ├── kefu                    # 客服相关页面目录
  │       ├── news.vue                # 新闻页面
  │       ├── NotFound.vue            # 404页面
  │       ├── oldstuff.vue            # 二手物品页面
  │       ├── search.vue              # 搜索页面
  │       └── webadmin                # 前端管理页面目录
  ├── structure.md                    # 项目结构说明文档
  ├── todo.md                         # 待办事项文档
  └── vue.config.js                   # Vue项目配置文件
```