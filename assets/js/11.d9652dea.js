(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(t,s,a){"use strict";a.r(s);var i=a(0),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p",[t._v("计算机理论专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机理论 "),a("OutboundLink")],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#前提概念"}},[t._v("前提概念")]),a("ul",[a("li",[a("a",{attrs:{href:"#机器数"}},[t._v("机器数")])]),a("li",[a("a",{attrs:{href:"#机器数的真值"}},[t._v("机器数的真值")])]),a("li",[a("a",{attrs:{href:"#为什么计算机没有减法？"}},[t._v("为什么计算机没有减法？")])]),a("li",[a("a",{attrs:{href:"#补数的概念（重点）"}},[t._v("补数的概念（重点）")])])])]),a("li",[a("a",{attrs:{href:"#原码"}},[t._v("原码")])]),a("li",[a("a",{attrs:{href:"#反码"}},[t._v("反码")])]),a("li",[a("a",{attrs:{href:"#补码"}},[t._v("补码")])]),a("li",[a("a",{attrs:{href:"#总结"}},[t._v("总结")])]),a("li",[a("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"前提概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提概念"}},[t._v("#")]),t._v(" 前提概念")]),t._v(" "),a("h3",{attrs:{id:"机器数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器数"}},[t._v("#")]),t._v(" 机器数")]),t._v(" "),a("p",[t._v("一个数在计算机中的二进制表示形式，叫做这个数的机器数。"),a("br"),t._v("\n机器数是带符号的，在计算机用机器数的最高位存放符号，正数为 0，负数为 1。")]),t._v(" "),a("blockquote",[a("p",[t._v("用一个 4 位的二进制表示，最高位是符号位，0001 换成十进制为 1 ，1001 换成十进制为 -1。本篇文章使用 4 位的二进制进行描述。")])]),t._v(" "),a("h3",{attrs:{id:"机器数的真值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器数的真值"}},[t._v("#")]),t._v(" 机器数的真值")]),t._v(" "),a("p",[t._v("因为第一位是符号位，所以机器数的形式值就不等于真正的数值。")]),t._v(" "),a("p",[t._v("例如：二进制 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1001")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v(" ，高位的 1 是符号位，后面的 001 是真值。")]),t._v(" "),a("ul",[a("li",[t._v("以二进制数换算成十进制是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mn",[t._v("3")])],1),a("mo",[t._v("+")]),a("msup",[a("mn",[t._v("2")]),a("mn",[t._v("0")])],1),a("mo",[t._v("=")]),a("mn",[t._v("9")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^3 + 2^0 = 9")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("9")])])])])]),t._v(" "),a("li",[t._v("以机器数的真值去换算成十进制是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mn",[t._v("0")])],1),a("mo",[t._v("=")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^0 = -1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])])])]),t._v(" "),a("h3",{attrs:{id:"为什么计算机没有减法？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么计算机没有减法？"}},[t._v("#")]),t._v(" 为什么计算机没有减法？")]),t._v(" "),a("p",[t._v('对于计算机，加减乘数已经是最基础的运算，要设计的尽量简单，计算机辨别"符号位"显然会让计算机的基础电路设计变得十分复杂。')]),t._v(" "),a("p",[t._v("于是人们想出了将符号位也参与运算的方法。我们知道，根据运算法则减去一个正数等于加上一个负数，即："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("mo",[t._v("+")]),a("mo",[t._v("(")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1 - 1 = 1 + (-1) = 0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("， 所以机器可以只有加法而没有减法，这样计算机运算的设计就更简单了。")]),t._v(" "),a("h3",{attrs:{id:"补数的概念（重点）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补数的概念（重点）"}},[t._v("#")]),t._v(" 补数的概念（重点）")]),t._v(" "),a("p",[t._v("我们的钟表，现在时针指向 3 点，如果想指向到 2 点时怎么办，可以倒拨 1 也可以正拨 11，我们可以认为是 1 与 11 互为补数。同理 2 与 10 互为补数。"),a("br"),t._v("\n那么 12 就是模，符号记作（mod 12），求一个数的补数可以记为：")]),t._v(" "),a("ul",[a("li",[t._v("3 互补 9（mod 12）")]),t._v(" "),a("li",[t._v("4 互补 8（mod 12）")]),t._v(" "),a("li",[t._v("5 互补 7（mod 12）")])]),t._v(" "),a("p",[t._v("若用一般公式可表示为："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("−")]),a("mi",[t._v("b")]),a("mo",[t._v("=")]),a("mi",[t._v("a")]),a("mo",[t._v("−")]),a("mi",[t._v("b")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mi",[t._v("o")]),a("mi",[t._v("d")]),a("mo",[t._v("=")]),a("mi",[t._v("a")]),a("mo",[t._v("+")]),a("mo",[t._v("(")]),a("mi",[t._v("m")]),a("mi",[t._v("o")]),a("mi",[t._v("d")]),a("mo",[t._v("−")]),a("mi",[t._v("b")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a-b=a-b+mod=a+(mod-b)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，对“模”而言，a 和 b 互为补数。")]),t._v(" "),a("p",[t._v("所以我们减去一个数的时候，在计算机里可以用加它的补数来实现，这样减法就变成了加法。")]),t._v(" "),a("p",[t._v("其实补数就是补码的概念，只是叫法不同。台湾和香港“一的补数/一补数”表示大陆的“反码”，“二的补数/二补数”才表示大陆的“补码”。")]),t._v(" "),a("h2",{attrs:{id:"原码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原码"}},[t._v("#")]),t._v(" 原码")]),t._v(" "),a("p",[t._v("原码就是符号位加上机器数的真值。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ul",[a("li",[t._v("[m]原 = 1001 ，表示十进制 -1")]),t._v(" "),a("li",[t._v("[m]原 = 0001 ，表示十进制 1")])]),t._v(" "),a("h2",{attrs:{id:"反码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反码"}},[t._v("#")]),t._v(" 反码")]),t._v(" "),a("p",[t._v("反码是用来表示负数的，在原码基础上，符号位不变，其余位置取反。")]),t._v(" "),a("ul",[a("li",[t._v("正数的反码，为本身")]),t._v(" "),a("li",[t._v("负数的反码，为符号不变其余求反")])]),t._v(" "),a("p",[t._v("反码通常是用来由原码求补码或者由补码求原码的过渡码。")]),t._v(" "),a("blockquote",[a("p",[t._v("此处不需要太纠结它。因为反码并不能解决减法的运算问题，但是计算机可能会使用反码进行存储用于其他计算，如有求知欲可深入研究。")])]),t._v(" "),a("h2",{attrs:{id:"补码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补码"}},[t._v("#")]),t._v(" 补码")]),t._v(" "),a("p",[t._v("补码是用来处理负数的，负数的补码就是它的补数。上面补数示例中的 3 的补码就是 9 。")]),t._v(" "),a("p",[t._v("补码与原码快速转换公式（并不是补码的定义）：")]),t._v(" "),a("ul",[a("li",[t._v("正数的补码：为本身")]),t._v(" "),a("li",[t._v("负数的补码：在反码的基础上，加 1。")]),t._v(" "),a("li",[t._v('负数的补码：至低位向高位，第一个 "1" 和 1 后面的 "0" 不变，符号位不变，其余位置取反。')])]),t._v(" "),a("p",[t._v("介于上面的规则，计算机里采用补码来存储数据，我们看到的机器数是补码表示的。")]),t._v(" "),a("h4",{attrs:{id:"补码转原码、反码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补码转原码、反码"}},[t._v("#")]),t._v(" 补码转原码、反码")]),t._v(" "),a("ul",[a("li",[t._v("补码转原码：符号位不变，其余取反加 1")]),t._v(" "),a("li",[t._v("补码转反码：减 1")])]),t._v(" "),a("h4",{attrs:{id:"当运算结果为负数时，计算结果怎么表示？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当运算结果为负数时，计算结果怎么表示？"}},[t._v("#")]),t._v(" 当运算结果为负数时，计算结果怎么表示？")]),t._v(" "),a("p",[t._v("结果不为 0 的运算同样可以通过使用补码来得到正确的结果。"),a("br"),t._v("\n如果结果为负数，也是通过补码的形式来表示的。")]),t._v(" "),a("p",[t._v("比如："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("3")]),a("mo",[t._v("−")]),a("mn",[t._v("5")]),a("mo",[t._v("=")]),a("mo",[t._v("−")]),a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3-5=-2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("5")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v("，即 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")]),a("mn",[t._v("0")]),a("mn",[t._v("1")]),a("mn",[t._v("1")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mn",[t._v("1")]),a("mn",[t._v("1")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("mn",[t._v("1")]),a("mn",[t._v("1")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0011 + 1011 = 1110")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v(" ，1110 的最高位为 1，表示是一个负数。"),a("br"),t._v('\n我们可以通过"负负为正"来计算他是多少，对它取反后加 1 为 1010。符号位 1（表示负数），\n机器数真值 '),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")]),a("mn",[t._v("1")]),a("mn",[t._v("0")]),a("mo",[t._v("=")]),a("msup",[a("mn",[t._v("2")]),a("mn",[t._v("1")])],1),a("mo",[t._v("=")]),a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("010=2^1=2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(" ，因此结果为 -2")]),t._v(" "),a("h4",{attrs:{id:"为什么补码表示数时，负数可以比正数多表示一个？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么补码表示数时，负数可以比正数多表示一个？"}},[t._v("#")]),t._v(" 为什么补码表示数时，负数可以比正数多表示一个？")]),t._v(" "),a("p",[t._v("我们以 4 位的有符号二进制数为示例表示（模为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mn",[t._v("4")])],1),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("mn",[t._v("6")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^4=16")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("4")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("6")])])])]),t._v("）：")]),t._v(" "),a("blockquote",[a("p",[t._v("补码的符号位是数值的一部分，")])]),t._v(" "),a("p",[t._v("参考上面补数的公式 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("−")]),a("mi",[t._v("b")]),a("mo",[t._v("=")]),a("mi",[t._v("a")]),a("mo",[t._v("−")]),a("mi",[t._v("b")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mi",[t._v("o")]),a("mi",[t._v("d")]),a("mo",[t._v("=")]),a("mi",[t._v("a")]),a("mo",[t._v("+")]),a("mo",[t._v("(")]),a("mi",[t._v("m")]),a("mi",[t._v("o")]),a("mi",[t._v("d")]),a("mo",[t._v("−")]),a("mi",[t._v("b")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a-b=a-b+mod=a+(mod-b)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("[m] 原 = 1101，[m] 补 = 1011")]),t._v(" "),a("li",[t._v("[m] 原对应十进制 = -5，[m] 补对应十进制 = 11")])]),t._v(" "),a("p",[t._v("可以看到 5 和 11 互为补数。")]),t._v(" "),a("p",[t._v("那么 0（-0） 和 8 也互为补数，因此 -0(1000) 被它的补码 8(1111) 替代了，失去了-0，得到了 8。所以负数表示的范围比正数表示范围多一个。")]),t._v(" "),a("p",[t._v("所以计算机里没有 -0 的概念，而有符号的数据范围变为：["),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("−")]),a("msup",[a("mn",[t._v("2")]),a("mi",[t._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("-2^n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.664392em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.747722em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" , "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mi",[t._v("n")])],1),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^n - 1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.664392em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.747722em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("]")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("计算机为了简化设计，把减法运算变为加法运算，采用了模和补数的概念。")]),t._v(" "),a("li",[t._v("因为反码和补码设计出来是专门处理负数的，因此正数的反码、补码还是本身。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://baike.baidu.com/item/%E8%A1%A5%E7%A0%81/6854613?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度百科-补码 "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/28685048/answer/41735701",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎回答-fhylhlasdf"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);