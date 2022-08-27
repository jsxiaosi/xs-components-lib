# 写第一个docs

编写docs文档使用上和vitePress一样，只是在原有的基础上添加了示例代码块解析器，配置方面也同样做了一些修改

## 目录结构
``` bash
.
├── .vitepress      # vitePress 配置    
├── components      # 组件文档 目录 (可自行替换)   
├── example         # 代码示例存放目录
├── guide           # 介绍文档 目录 (可自行替换)  
├── public          # 静态资源目录
└── index.md        # 首页
```

## 添加页面

在docs目录下创建一个文件夹，命名为`MyDocs` (名称按照自己的喜好)，并创建名称叫`docs-demo`的md文件
``` bash
.
├── .vitepress        
├── components      
├── example         
├── guide     
├── MyDocs  
│   ├── docs-demo.md
├── public         
└── index.md       
```

此时打开地址就可以访问到你的创建的页面`http://localhost:5174/MyDocs/docs-demo`

## 配置侧边栏
在.vitepress/route/pages目录下创建json文件
``` json
{
  "/MyDocs/": [   // 约定式：/”你目录名称“/
    {
      "text": "菜单标题",
      "items": [
        {
          "text": "该部分的标题",
          "link": "docs-demo"
        }
      ]
    }
  ]
}
```
重新运行即可看到侧边栏


## 添加导航
在.vitepress/route/nav.json 添加以下内容
``` json
  {
    "text": "标题",
    "link": "/MyDocs/docs-demo",
    "activeMatch": "/MyDocs/"
  },
```
重新运行即可看到顶部导航栏添加了内容




