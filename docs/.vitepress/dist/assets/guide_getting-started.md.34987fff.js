import { o as s, c as a, e as n } from './app.f6179061.js';
const l = n(
    `<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h1><h2 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-hidden="true">#</a></h2><p>首先得有 node，并确保 node 版本是 v16 或以上。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># v16+</span></span>
<span class="line"></span></code></pre></div><h2 id="代码拉取" tabindex="-1">代码拉取 <a class="header-anchor" href="#代码拉取" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># （https or ssh）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/jsxiaosi/xiaosiCommitLib.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:jsxiaosi/xiaosiCommitLib.git</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><ul><li>安装依赖</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span></code></pre></div><h3 id="develop" tabindex="-1">Develop <a class="header-anchor" href="#develop" aria-hidden="true">#</a></h3><ul><li>运行文档</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span>
<span class="line"></span></code></pre></div><ul><li>运行组件开发调试模板</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><h3 id="production" tabindex="-1">Production <a class="header-anchor" href="#production" aria-hidden="true">#</a></h3><ul><li>文档</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span></code></pre></div><ul><li>组件打包</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre></div>`,
    19,
  ),
  e = [l],
  r = JSON.parse(
    '{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发环境","slug":"开发环境","link":"#开发环境","children":[]},{"level":2,"title":"代码拉取","slug":"代码拉取","link":"#代码拉取","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"Develop","slug":"develop","link":"#develop","children":[]},{"level":3,"title":"Production","slug":"production","link":"#production","children":[]}]}],"relativePath":"guide/getting-started.md"}',
  ),
  p = { name: 'guide/getting-started.md' },
  d = Object.assign(p, {
    setup(o) {
      return (t, i) => (s(), a('div', null, e));
    },
  });
export { r as __pageData, d as default };
