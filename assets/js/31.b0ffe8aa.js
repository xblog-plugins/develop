(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{450:function(s,n,a){"use strict";a.r(n);var i=a(23),e=Object(i.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("日记这个功能看你是否需要实现，如果不需要那么就不管")])]),s._v(" "),a("p",[s._v("代码在根目录的 "),a("code",[s._v("diary.php")]),s._v(" 下，我们这边是通过 "),a("code",[s._v("xy_diary()")]),s._v(" 来获取日记列表。")]),s._v(" "),a("p",[s._v("日记卡片在 "),a("code",[s._v("content/diary.php")]),s._v(" 下，每篇日记都有一个卡片，你只需要负责显示就行了，日记的内容和信息可以通过对应的函数来获取，这里我简单贴一下代码，所有的函数都可以在API参考里找到")]),s._v(" "),a("div",{staticClass:"language-php+HTML line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div class="diary-card">\n    <img alt class="user-icon" src="<?php plugins_diary_avatar(); ?>" />\n    <div class="arrow"></div>\n    <div class="diary-content">\n        <div class="diary-head">\n            <div class="diary-head-name">\n                <?php plugins_diary_nickname(); ?>\n            </div><div class="diary-head-time">\n                <?php plugins_diary_date(); ?>\n            </div>\n        </div>\n        <?php if (!get_plugins_diary_encrypt()):?>\n        <div class="diary-body">\n            <?php plugins_diary_content(); ?>\n        </div>\n        <?php else: ?>\n        <div class="lock-face">\n            <div class="lock-text">\n                这篇日记已被上锁了，请输入密码解锁\n            </div>\n            <div class="lock-input">\n                <el-input v-model="password" type="password" placeholder="请输入访问密码">\n                    <el-button slot="prepend" icon="el-icon-key" ></el-button>\n                </el-input>\n            </div>\n            <el-button class="lock-btn" type="primary" @click="getEncryptContent(<?php echo get_plugins_diary_id() ?>)">\n                点击访问\n            </el-button>\n        </div>\n        <?php endif;?>\n        <div class="diary-footer" @click="gotoDiary(<?php echo get_plugins_diary_id() ?>)">\n            <div class="diary-comment">\n                <i class="far fa-comment"></i><?php plugins_diary_comment(); ?>条评论\n            </div>\n            <div class="diary-like">\n                <i class="far fa-thumbs-up"></i><?php plugins_diary_good(); ?>人点赞\n            </div>\n        </div>\n    </div>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);