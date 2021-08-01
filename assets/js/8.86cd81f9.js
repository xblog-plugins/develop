(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{427:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("界面功能应该是用的最多的一个功能，包括侧边栏，更多功能等部分全部都在这里")])]),t._v(" "),a("blockquote",[a("p",[t._v("记得在auth里面加上 "),a("code",[t._v("widget")])])]),t._v(" "),a("p",[t._v("界面函数主要包括添加侧边栏，添加界面和添加设置界面设置，这里我一个一个来进行介绍")]),t._v(" "),a("h2",{attrs:{id:"添加侧边栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加侧边栏"}},[t._v("#")]),t._v(" 添加侧边栏")]),t._v(" "),a("p",[t._v("这里我也懒得写例子了，这里就拿个人信息卡片来进行举例吧~效果如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/1b5867f5c9967.png",alt:"image-20210730082712987"}})]),t._v(" "),a("p",[t._v("首先我们需要自己写好样式和html")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/a37812a43b51e.png",alt:"image-20210730082855090"}})]),t._v(" "),a("p",[t._v("大家写的时候按照下面这个规范来，因为我后续应该会直接从style里面提取css样式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/5027fe0c408d9.png",alt:"image-20210730082947849"}})]),t._v(" "),a("p",[t._v("当然如果只能是静态的肯定是不够的，我们可以在里面插入一些动态数据，这里就需要用到模板引擎了")]),t._v(" "),a("p",[t._v("我在知乎上随便找了一篇文章"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/299048675",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO语言模板引擎 GO语言标准库http/template - 知乎 (zhihu.com)"),a("OutboundLink")],1),t._v("，更详细的请自己参考官方文档")]),t._v(" "),a("p",[t._v("比如我这里就用到了两语法，第一个是显示变量")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/4ef7311bf6211.png",alt:"image-20210730083435490"}})]),t._v(" "),a("p",[t._v("第二个就是判断，如果bili这个变量不为空，那么我们就显示if里面的内容，如果为空就不显示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/eeb4e771faf71.png",alt:"image-20210730083904528"}})]),t._v(" "),a("p",[t._v("界面写完了还不够，我们还需要去注册一下这个界面才行，比如我这个插件的代码如下")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用博客系统提供的接口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" widget "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xBlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" database "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xBlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("database\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tools "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xBlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些字段")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dbArticle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"article"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dbComment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyIntroduce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_introduce"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyBackground "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_background"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyAvatar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_avatar"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyGithub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_github"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyTelegram "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_telegram"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyTwitter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_twitter"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyZhiHu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_zhi_hu"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keySteam "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_steam"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keyBili "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_bili_bili"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加卡片")]),t._v("\nwidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化数据库链接")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newDb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbArticle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" commentDb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newDb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbComment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyBackground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        avatar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyAvatar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        post"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        diary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"diary"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" commentDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        introduce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyIntroduce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bili"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyBili"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        github"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyGithub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        twitter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyTwitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        telegram"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyTelegram"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        steam"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keySteam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        zhiHu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyZhiHu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br")])]),a("p",[a("code",[t._v("addSide")]),t._v("这个函数有三个参数，第一个是标题，如果没有的话就不会显示，如果加了标题的话就是下面这个效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/997da5879a287.png",alt:"image-20210730084533342"}})]),t._v(" "),a("p",[t._v("第二个参数是html文件的名字，因为我的设置的就是"),a("code",[t._v("index.html")]),t._v("所以这里填"),a("code",[t._v("index.html")])]),t._v(" "),a("p",[t._v("第三参数就是回调函数，因为侧边栏有些数据是要实时刷新的，所以我们需要通过回调函数返回变量，返回的变量就可以直接在html上显示出来了。如果你那个是纯静态的，然就不需要回调函数")]),t._v(" "),a("p",[t._v("这里我使用了 "),a("code",[t._v("tools.getSetting")]),t._v(" 可以从数据库中获取设置信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/ef31be81a0e66.png",alt:"image-20210730085720525"}})]),t._v(" "),a("p",[t._v("第三个参数是是否开启调试，其实用的不多，大家不用管")]),t._v(" "),a("p",[t._v("重载插件后，自己可以到侧边栏设置哪里可以看到自己注册的侧边栏信息，自己记得拖动到对应的侧边栏，这样才能使用哦！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/30/bc884353b5f47.png",alt:"image-20210730085918543"}})]),t._v(" "),a("h2",{attrs:{id:"添加界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加界面"}},[t._v("#")]),t._v(" 添加界面")]),t._v(" "),a("p",[t._v("添加界面可以在博客系统上注册一个界面，这个和侧边栏不同，侧边栏只是在侧边栏注册，这个是直接显示一个界面。比如友人帐，我的追番等等，这里就拿友人帐来进行举例，其实这个和侧边栏流程差不多。")]),t._v(" "),a("p",[t._v("首先也是写一个"),a("code",[t._v("index.html")]),t._v("界面，里面写内容")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/e6f3013b562e6.png",alt:"image-20210731154201832"}})]),t._v(" "),a("p",[t._v("最上面写样式，中间写内容，下面就写script标签。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：因为我的友人帐用到了vue，因为vue里面的字符串模板也是用的{{}} 会和go的模板语法冲突，所以这里我们需要修改一下vue，比如我这里用的是"),a("code",[t._v("${}")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/f0276d7608b79.png",alt:"image-20210731155256607"}})])]),t._v(" "),a("p",[t._v("然后我们这里渲染界面就可以这样去渲染了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/76035bf1b1f35.png",alt:"image-20210731155322634"}})]),t._v(" "),a("p",[t._v("下面就是在主函数注册界面，这个参数比较多，这里我一个一个来介绍")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyBackground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    headMeta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"友人帐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"element"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"element"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    full"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    side"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 友链设置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyFriendName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        dec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyFriendDec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyFriendLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        avatar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyFriendAvatar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("第一个是option参数，第二个是回调函数，回调函数这个和侧边栏是一样的，都是可以通过回调函数返回值，给主界面显示。下面说一下option参数。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("background")]),t._v(" 这个是背景，用于显示背景信息")]),t._v(" "),a("li",[a("code",[t._v("file")]),t._v(" 这个表示我们的html文件")]),t._v(" "),a("li",[a("code",[t._v("headMeta")]),t._v(" 表示head标签，这个可以用来自己设置一些head信息，目前只能设置title，后续可以支持更多")]),t._v(" "),a("li",[a("code",[t._v("css")]),t._v(" 表示自己用到的一些css库，比如我这里用到了element，目前博客系统内置了一些常见库，请自己移步到API参考里面查看。如果有一些没有的，可以自己直接贴库的URL地址")]),t._v(" "),a("li",[a("code",[t._v("script")]),t._v(" 表示用到的JavaScript库，博客系统同样内置了一些库")]),t._v(" "),a("li",[a("code",[t._v("url")]),t._v(" 这个是后续扩展字段，比如你想注册多个界面就可以用这个来区分，目前这个还没开发完整")]),t._v(" "),a("li",[a("code",[t._v("full")]),t._v(" 表示是否需要全屏，目前还没做，是一个保留字段")]),t._v(" "),a("li",[a("code",[t._v("side")]),t._v(" 这个表示是否需要显示侧边栏信息 目前也还待开发，是一个保留字段")])]),t._v(" "),a("p",[t._v("如何查看自己渲染的界面呢？还记得前面插件信息里面的那个"),a("code",[t._v("unique")]),t._v("字段吗？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/98302884e81ce.png",alt:"image-20210731161007404"}})]),t._v(" "),a("p",[t._v("我们只需要在url里面输入 "),a("code",[t._v("/more/friends")]),t._v(" 就可以访问这个界面了！下面这个就是实际效果了！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/7028973f8060a.png",alt:"image-20210731161047474"}})]),t._v(" "),a("p",[t._v("好了，这个就介绍到自己，自己感兴趣的可以去看看我写的那几个插件")]),t._v(" "),a("h2",{attrs:{id:"添加设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加设置"}},[t._v("#")]),t._v(" 添加设置")]),t._v(" "),a("p",[t._v("前面我们介绍了添加界面，但是有界面还是不够的，我们还需要对界面进行设置，或者我们的插件某些功能需要进行设置，同样需要设置功能，这个时候我们就可以通过设置功能来实现了。")]),t._v(" "),a("p",[t._v("普通的设置可以直接来进行设置，但是遇到一些比较复杂的，比如友人帐所有友链的管理，都需要自己写界面了，同时还需要集成到我的后台管理设置里面去。")]),t._v(" "),a("h3",{attrs:{id:"普通设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通设置"}},[t._v("#")]),t._v(" 普通设置")]),t._v(" "),a("p",[t._v("这里我拿豆瓣插件来举例")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"豆瓣设置"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"豆瓣用户ID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keyDouBanUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"豆瓣cookie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keyDouBanCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"每日定时同步"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"switch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keyDouBanSync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"立即同步(耗时操作，请勿重复点击！)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"row"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keyDouBanSyncNow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin/plugins/dou_ban"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("首先这个有三个参数，第一个是设置的标题，第二个是设置的类型，普通设置类型为1，第三个就是设置的内容了。设置的内容是一个数组类型的数据。")]),t._v(" "),a("p",[t._v("这里我单独解释一下每个key的意义吧。首先第一个"),a("code",[t._v("title")]),t._v("表示设置的名字，第二个"),a("code",[t._v("type")]),t._v("是设置的类型。")]),t._v(" "),a("p",[t._v("目前包括")]),t._v(" "),a("p",[a("code",[t._v("switch")]),t._v(" 开关类型")]),t._v(" "),a("p",[a("code",[t._v("text")]),t._v(" 文本域")]),t._v(" "),a("p",[a("code",[t._v("input")]),t._v(" 输入框")]),t._v(" "),a("p",[a("code",[t._v("upload")]),t._v(" 图片上传")]),t._v(" "),a("p",[a("code",[t._v("number")]),t._v(" 步进器")]),t._v(" "),a("p",[a("code",[t._v("row")]),t._v(" 按钮类型，点击按钮会触发http请求")]),t._v(" "),a("p",[t._v("第三个"),a("code",[t._v("key")]),t._v("的话就是设置的唯一标识，这里每个插件的设置必须使用"),a("code",[t._v("plugins_插件名字")]),t._v("作为前缀，避免造成设置互相干扰的情况。")]),t._v(" "),a("p",[t._v("第四个"),a("code",[t._v("default")]),t._v(" 是设置默认的值，用户没有设置的情况下，默认为什么")]),t._v(" "),a("p",[t._v("这里我给大家看一下数据库的设置信息，所有的设置都会保存到这个表中")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/00fd27771f0f2.png",alt:"image-20210731162301187"}})]),t._v(" "),a("p",[t._v("key就是我们前面设置的key的值，大家在设置的时候务必确保key是唯一的，避免冲突")]),t._v(" "),a("p",[t._v("value就是设置的值了，这个值可以是任意类型的数据，大家可以根据自己的情况来灵活发挥。")]),t._v(" "),a("p",[t._v("反映到我们的实际界面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/dd8662512095c.png",alt:"image-20210731162614413"}})]),t._v(" "),a("h3",{attrs:{id:"复杂设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂设置"}},[t._v("#")]),t._v(" 复杂设置")]),t._v(" "),a("blockquote",[a("p",[t._v("目前想使用复杂设置的必须要提前写好然后集成到我们后台管理界面中，然后等版本更新后才能使用。。")])]),t._v(" "),a("p",[t._v("就拿友链管理来进行举例，像这种复杂的设置根本是不可能通过"),a("code",[t._v("json")]),t._v("来进行表达了，这个时候就需要我们自己去写界面了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/dbbf4713f95b9.png",alt:"image-20210731162703639"}})]),t._v(" "),a("p",[t._v("这里可以看到插件中其实非常简单，我们只需要让插件的"),a("code",[t._v("type")]),t._v("等于2就行了，第三个参数表示我们界面的名字")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"友链管理"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"friend"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个时候我们就把所有的逻辑全部放到后台管理哪里去了（因为这种界面设置很麻烦，所以需要集成到我的后台管理界面里去）在"),a("code",[t._v("components")]),t._v("这个文件夹的"),a("code",[t._v("plugins")]),t._v("文件夹里，注意名字一一对应，上面设置的那个name就是下面这个文件夹对应的name")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/bfe257853c66f.png",alt:"image-20210731163337679"}})]),t._v(" "),a("p",[t._v("下面这个就是友链设置的界面了，这个其实是通过"),a("code",[t._v("vue")]),t._v("来实现的。。。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/07/31/2b28b01460a76.png",alt:"image-20210731163556655"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);