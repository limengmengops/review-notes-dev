(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{308:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是柯里化"}},[t._v("什么是柯里化")])]),a("li",[a("a",{attrs:{href:"#foldleft-示例"}},[t._v("foldLeft 示例")])]),a("li",[a("a",{attrs:{href:"#有关-foldleft-和-foldright-的所有调用形式"}},[t._v("有关 foldLeft 和 foldRight 的所有调用形式")])]),a("li",[a("a",{attrs:{href:"#隐式参数"}},[t._v("隐式参数")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"什么是柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是柯里化"}},[t._v("#")]),t._v(" 什么是柯里化")]),t._v(" "),a("p",[t._v("柯里化就是未使用全部的参数列表调用多参数列表的方法时，会得到一个函数，该函数接收前面未使用的参数列表作为其参数。")]),t._v(" "),a("ul",[a("li",[t._v("方法可以定义多个参数列表，一个"),a("code",[t._v("()")]),t._v("包含的内容即为一个参数列表。")])]),t._v(" "),a("h2",{attrs:{id:"foldleft-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foldleft-示例"}},[t._v("#")]),t._v(" foldLeft 示例")]),t._v(" "),a("p",[t._v("在 Scala 集合 trait TraversableOnce 定义了 foldLeft。")]),t._v(" "),a("ul",[a("li",[t._v("foldLeft 对一个集合进行运算，将函数 op 应用到初始值 z 和集合从左往右的第一个元素上")]),t._v(" "),a("li",[t._v("然后将函数 op 应用到计算结果和集合的下一个元素上，依次类推，直到计算完集合中的所有元素。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scala LinearSeqOptimized 中定义的 foldLeft 方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@deprecatedName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v("'f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" B "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" z\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" these "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("these"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isEmpty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" these"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        these "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" these"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      acc\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 foldLeft 是柯里化方法，有两个参数列表，当只使用第一个参数列表调用该方法时")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会得到一个函数，该函数以剩余的参数列表作为参数，即 (B, A) => B")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于第一个参数列表传入 0，scala 自动推断类型，得到剩余一个参数的类型 (Int, Int) => Int")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最终返回一个高阶函数，返回的高阶函数的类型为：((Int, Int) => Int) => Int")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" fold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 55")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以使用所有的参数列表进行柯里化方法的调用")]),t._v("\n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上述调用可以实现方法的复用，可以在 fold 的基础上定义其他计算过程")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" res2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不使用多参数列表，而是采用匿名函数作为参数调用方法，写法更为繁琐")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scala 无法进行类型推断，需要手动指明函数参数的类型")]),t._v("\n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 scala 的类型推断可以让柯里化方法的调用更为简洁")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个 _ 代表初始值或者该函数运算的结果，第二个 _ 代表集合中的下一个元素 ")]),t._v("\n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"有关-foldleft-和-foldright-的所有调用形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关-foldleft-和-foldright-的所有调用形式"}},[t._v("#")]),t._v(" 有关 foldLeft 和 foldRight 的所有调用形式")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldRight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foldRight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foldLeft")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foldRight")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"隐式参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式参数"}},[t._v("#")]),t._v(" 隐式参数")]),t._v(" "),a("p",[t._v("如果要指定参数列表中的某些参数为隐式 (implicit)，应该使用多参数列表。")]),t._v(" "),a("ul",[a("li",[t._v("该隐式参数列表必须为最后一个参数列表。")]),t._v(" "),a("li",[t._v("如果要定义多个隐式参数，这些隐式参数必须在同一个参数列表中，参数列表的开头加一个 implicit 关键字即可。")]),t._v(" "),a("li",[t._v("隐式参数不可以和普通参数定义在同一个参数列表中。")]),t._v(" "),a("li",[t._v("更多介绍请参考 《隐式参数》章节。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" ec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" execute1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" ec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" execute2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" ec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// does not compile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);