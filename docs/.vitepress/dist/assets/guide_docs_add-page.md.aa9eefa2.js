import { o as s, c as a, e as n } from './app.f6179061.js';
const l = n(
    `<h1 id="写第一个docs" tabindex="-1">写第一个docs <a class="header-anchor" href="#写第一个docs" aria-hidden="true">#</a></h1><p>编写docs文档使用上和vitePress一样，只是在原有的基础上添加了示例代码块解析器，配置方面也同样做了一些修改</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.vitepress</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># vitePress 配置    </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">components</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># 组件文档 目录 (可自行替换)   </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 代码示例存放目录</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">guide</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># 介绍文档 目录 (可自行替换)  </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 静态资源目录</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.md</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 首页</span></span>
<span class="line"></span></code></pre></div><h2 id="添加页面" tabindex="-1">添加页面 <a class="header-anchor" href="#添加页面" aria-hidden="true">#</a></h2><p>在docs目录下创建一个文件夹，命名为<code>MyDocs</code> (名称按照自己的喜好)，并创建名称叫<code>docs-demo</code>的md文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.vitepress</span><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">components</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example</span><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">guide</span><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyDocs</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs-demo.md</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.md</span><span style="color:#A6ACCD;">       </span></span>
<span class="line"></span></code></pre></div><p>此时打开地址就可以访问到你的创建的页面<code>http://localhost:5174/MyDocs/docs-demo</code></p><h2 id="配置侧边栏" tabindex="-1">配置侧边栏 <a class="header-anchor" href="#配置侧边栏" aria-hidden="true">#</a></h2><p>在.vitepress/navigation/sidebar目录下创建json文件</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">/MyDocs/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 约定式：/”你目录名称“/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">菜单标题</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">该部分的标题</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs-demo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>外层的/MyDocs/是你的目录名称并且用/包裹，原因在于vitePress配置侧边栏的link路径是目录+文件约定配置，所以在config -&gt; navigation 里面是默认处理拼接成/MyDocs/docs-demo。</p><p>text是侧边栏的标题名称。items配置单个页面，items里面的text配置页面在侧边栏的标题，link页面文件名称。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>需要注意的是：添加完路由需要重新运行，因为默认的配置是在运行时自动查找navigation目录里的json文件</p></div><h2 id="添加导航" tabindex="-1">添加导航 <a class="header-anchor" href="#添加导航" aria-hidden="true">#</a></h2><p>在.vitepress/navigation/nav.json 添加以下内容</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/MyDocs/docs-demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">activeMatch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/MyDocs/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p>和侧边栏同理，重新运行即可看到顶部导航栏添加了内容</p>`,
    18,
  ),
  p = [l],
  D = JSON.parse(
    '{"title":"写第一个docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"添加页面","slug":"添加页面","link":"#添加页面","children":[]},{"level":2,"title":"配置侧边栏","slug":"配置侧边栏","link":"#配置侧边栏","children":[]},{"level":2,"title":"添加导航","slug":"添加导航","link":"#添加导航","children":[]}],"relativePath":"guide/docs/add-page.md"}',
  ),
  o = { name: 'guide/docs/add-page.md' },
  y = Object.assign(o, {
    setup(e) {
      return (t, c) => (s(), a('div', null, p));
    },
  });
export { D as __pageData, y as default };