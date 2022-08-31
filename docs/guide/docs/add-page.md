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
在.vitepress/navigation/sidebar目录下创建json文件
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
外层的/MyDocs/是你的目录名称并且用/包裹，原因在于vitePress配置侧边栏的link路径是目录+文件约定配置，所以在config -> navigation 里面是默认处理拼接成/MyDocs/docs-demo。

text是侧边栏的标题名称。items配置单个页面，text页面在侧边栏的标题，link页面文件名称。

需要注意的是：添加完路由需要重新运行，因为默认的配置是在运行时自动查找navigation目录里的json文件


## 添加导航
在.vitepress/navigation/nav.json 添加以下内容
``` json
  {
    "text": "标题",
    "link": "/MyDocs/docs-demo",
    "activeMatch": "/MyDocs/"
  },
```
和侧边栏同理，重新运行即可看到顶部导航栏添加了内容




