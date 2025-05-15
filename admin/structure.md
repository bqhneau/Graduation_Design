## 运行命令

``` bash
  tree -L 3 -I node_modules
```



## admin 端 项目结构

``` md
  .
  ├── babel.config.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── public
  │   ├── favicon.ico
  │   ├── favicon.png
  │   └── index.html
  ├── README.md
  ├── src
  │   ├── App.vue
  │   ├── assets
  │   │   ├── css
  │   │   ├── img
  │   │   └── logo.png
  │   ├── components
  │   │   └── HelloWorld.vue
  │   ├── main.js
  │   ├── plugins
  │   │   └── element.js
  │   ├── router
  │   │   └── index.js
  │   ├── store
  │   │   ├── index.js
  │   │   └── modules
  │   └── views
  │       ├── examine
  │       ├── kefu
  │       ├── login.vue
  │       ├── loginparticles.vue
  │       ├── main.vue
  │       ├── management
  │       ├── myself
  │       ├── numbering
  │       └── user
  ├── structure.md
  └── vue.config.js
```

  .
  ├── babel.config.js                 # Babel配置文件，用于JavaScript代码转换
  ├── jsconfig.json                   # JavaScript配置文件，提供编辑器支持
  ├── package-lock.json               # 依赖包版本锁定文件
  ├── package.json                    # 项目配置文件，包含依赖和脚本命令
  ├── public                          # 静态资源目录
  │   ├── favicon.ico                 # 网站图标（ICO格式）
  │   ├── favicon.png                 # 网站图标（PNG格式）
  │   └── index.html                  # HTML模板文件
  ├── README.md                       # 项目说明文档
  ├── src                             # 源代码目录
  │   ├── App.vue                     # 根组件
  │   ├── assets                      # 资源文件目录
  │   │   ├── css                     # CSS样式文件
  │   │   ├── img                     # 图片资源
  │   │   └── logo.png                # 项目logo
  │   ├── components                  # 公共组件目录
  │   │   └── HelloWorld.vue          # 示例组件
  │   ├── main.js                     # 项目入口文件
  │   ├── plugins                     # 插件目录
  │   │   └── element.js              # Element UI配置文件
  │   ├── router                      # 路由配置目录
  │   │   └── index.js                # 路由主配置文件
  │   ├── store                       # Vuex状态管理目录
  │   │   ├── index.js                # Vuex主配置文件
  │   │   └── modules                 # Vuex模块目录
  │   └── views                       # 页面视图目录
  │       ├── examine                 # 审核相关页面
  │       │   ├── contentexamine.vue  # 内容审核页面
  │       │   └── comment.vue         # 评论审核页面
  │       ├── kefu                    # 客服相关页面
  │       │   ├── fankui.vue          # 意见反馈页面
  │       │   ├── jubao.vue           # 违规举报页面
  │       │   └── shensu.vue          # 账号申诉页面
  │       ├── login.vue               # 登录页面
  │       ├── loginparticles.vue      # 登录页面粒子效果组件
  │       ├── main.vue                # 主页面（包含侧边栏和顶部导航）
  │       ├── management              # 管理相关页面
  │       │   ├── carousel.vue        # 轮播图管理页面
  │       │   └── managementlable.vue # 标签管理页面
  │       ├── myself                  # 个人中心页面
  │       │   └── myself.vue          # 个人信息管理页面
  │       ├── numbering               # 数据中心页面
  │       │   └── numbering.vue       # 数据统计页面
  │       └── user                    # 用户管理页面
  │           ├── useruser.vue        # 普通用户管理页面
  │           └── useradmin.vue       # 管理员用户管理页面
  ├── structure.md                    # 项目结构说明文档
  └── vue.config.js                   # Vue项目配置文件