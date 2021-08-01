(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{445:function(s,t,a){"use strict";a.r(t);var r=a(23),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是主题"}},[s._v("#")]),s._v(" 什么是主题")]),s._v(" "),a("p",[s._v("主题是继插件功能以来，博客系统的又一个重大的功能，通过主题我们可以实现和WordPress主题一样的效果，大家可以给博客系统设置风格完全不同的主题。")]),s._v(" "),a("p",[s._v("目前博客系统已经开发了三套主题了 分别是 "),a("code",[s._v("xtheme")]),s._v(" ，"),a("code",[s._v("kratos")]),s._v(" 和"),a("code",[s._v("sakura")]),s._v(" 目前我暂时不会开发新主题了，后续更多主题适配还需要靠大家。。")]),s._v(" "),a("h2",{attrs:{id:"主题的基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题的基本结构"}},[s._v("#")]),s._v(" 主题的基本结构")]),s._v(" "),a("p",[s._v("目前主题开发遵循的是规定大于自定义的原则，大家开发的时候必须要按照这个规则来，一方面是减轻我的开发压力，二是大家可以相互借鉴，某些样式不错的地方可以直接拷贝。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.xiaoyou66.com/Public/Uploads/2021-06-05/60bb37a20ddc9.png",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"theme-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-json"}},[s._v("#")]),s._v(" theme.json")]),s._v(" "),a("p",[s._v("这个是我们主题的主要入口，主题必须要有这个文件，我这边才可以正常识别，一个典型的主题json文件如下")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sakura"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/xiaoyou66/kratos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小游"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress主题Sakura移植版本"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("name")]),s._v(" 表示主题的名字")]),s._v(" "),a("li",[a("code",[s._v("url")]),s._v(" 表示主题的地址")]),s._v(" "),a("li",[a("code",[s._v("author")]),s._v(" 表示主题的开发作者")]),s._v(" "),a("li",[a("code",[s._v("description")]),s._v(" 表示主题的描述信息")]),s._v(" "),a("li",[a("code",[s._v("version")]),s._v(" 表示主题的版本号")])]),s._v(" "),a("h2",{attrs:{id:"setting-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-json"}},[s._v("#")]),s._v(" setting.json")]),s._v(" "),a("p",[s._v("这个表示我们主题的设置内容，里面主要包含主题的各种设置信息，这里给大家简单看一下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/b4f7914d4600e.png",alt:"image-20210731164922644"}})]),s._v(" "),a("p",[s._v("这个在设置中就变成了下面这个效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/052a88bb500d9.png",alt:"image-20210731165008907"}})]),s._v(" "),a("p",[s._v("每个字段我就不介绍了，大家可以参考插件开发里面快速入门里面的界面章节，如果想使用，可以使用"),a("code",[s._v("xy_option")]),s._v(" 来获取，比如下面这样")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/08/01/05233009f6e76.png",alt:"image-20210801161842196"}})]),s._v(" "),a("h2",{attrs:{id:"开发的一些规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发的一些规范"}},[s._v("#")]),s._v(" 开发的一些规范")]),s._v(" "),a("ol",[a("li",[s._v("css等内容尽量放"),a("code",[s._v("header.php")]),s._v(" 中 js等内容尽量放 "),a("code",[s._v("footer.php")]),s._v(" 中")])])])}),[],!1,null,null,null);t.default=e.exports}}]);