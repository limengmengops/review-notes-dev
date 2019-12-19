(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{269:function(a,t,r){"use strict";r.r(t);var v=r(0),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("blockquote",[r("p",[a._v("专栏原创出处："),r("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),r("OutboundLink")],1),a._v(" ，"),r("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),r("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-内存模型-顺序一致性"}},[a._v("1 内存模型-顺序一致性")])]),r("li",[r("a",{attrs:{href:"#_2-数据竞争"}},[a._v("2 数据竞争")])]),r("li",[r("a",{attrs:{href:"#_3-理论参考模型-顺序一致性内存模型"}},[a._v("3 理论参考模型-顺序一致性内存模型")])]),r("li",[r("a",{attrs:{href:"#_4-jmm-顺序一致性与理论参考模型对比"}},[a._v("4 JMM-顺序一致性与理论参考模型对比")])])])]),r("p"),a._v(" "),r("h2",{attrs:{id:"_1-内存模型-顺序一致性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-内存模型-顺序一致性"}},[a._v("#")]),a._v(" 1 内存模型-顺序一致性")]),a._v(" "),r("p",[a._v("我们下面讨论的 "),r("code",[a._v("理论参考模型-顺序一致性内存模型")]),a._v(" 与 "),r("code",[a._v("JMM-顺序一致性内存模型")]),a._v(" 不是完全一样。最后的对比会说明差异化。")]),a._v(" "),r("h2",{attrs:{id:"_2-数据竞争"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据竞争"}},[a._v("#")]),a._v(" 2 数据竞争")]),a._v(" "),r("p",[a._v("当程序未正确同步时，就会存在数据竞争。"),r("br"),a._v("\njava 内存模型规范对数据竞争的定义如下：在一个线程中写一个变量，在另一个线程读同一个变量，而且写和读没有通过同步来排序。\n ")]),a._v(" "),r("blockquote",[r("p",[a._v("如果一个多线程程序能正确同步，这个程序将是一个没有数据竞争的程序，程序的执行将具有顺序一致性。")])]),a._v(" "),r("h2",{attrs:{id:"_3-理论参考模型-顺序一致性内存模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-理论参考模型-顺序一致性内存模型"}},[a._v("#")]),a._v(" 3 理论参考模型-顺序一致性内存模型")]),a._v(" "),r("p",[a._v("  顺序一致性内存模型是一个被计算机科学家理想化了的理论参考模型，它为程序员提供了极强的内存可见性保证。JMM 在规范里也保证了顺序一致性。顺序一致性内存模型有两大特性：")]),a._v(" "),r("ul",[r("li",[a._v("① 一个线程中的所有操作必须按照程序的顺序来执行")]),a._v(" "),r("li",[a._v("② 所有线程都只能看到一个单一的操作执行顺序")])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("=举例说明=："),r("br"),a._v("\n假设有两个线程 A 和 B 并发执行（线程 A 执行后线程 B 执行）。其中")]),a._v(" "),r("ul",[r("li",[a._v("A 线程有三个操作，它们在程序中的顺序是：A1->A2->A3。")]),a._v(" "),r("li",[a._v("B 线程有三个操作，它们在程序中的顺序是：B1->B2->B3。")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B-%E9%A1%BA%E5%BA%8F%E4%B8%80%E8%87%B4%E6%80%A7.png",alt:"Java内存模型-顺序一致性"}})]),a._v(" "),r("p",[r("strong",[a._v("针对第 ① 特征说明")]),a._v("：")]),a._v(" "),r("ul",[r("li",[a._v("线程 A 程序的执行顺序永远是 A1->A2->A3")]),a._v(" "),r("li",[a._v("线程 B 程序的执行顺序永远是 B1->B2->B3")])]),a._v(" "),r("p",[r("strong",[a._v("针对第 ② 特征说明")]),a._v("：")]),a._v(" "),r("ul",[r("li",[a._v("如果正确同步的话，线程 A 执行后释放监视器给线程 B 执行顺序将是 A1->A2->A3->B1->B2->B3。")]),a._v(" "),r("li",[a._v("如果未正确同步的话，可能（CPU 抢占问题）出现的顺序是 A1->A2->B1->A3->B2->B3。")])]),a._v(" "),r("blockquote",[r("p",[a._v("未正确同步程序在顺序一致性模型中虽然整体执行顺序是无序的，但所有线程都只能看到一个一致的整体执行顺序。以上图为例，线程 A 和 B 看到的执行顺序都是：A1->A2->B1->A3->B2->B3。之所以能得到这个保证是因为顺序一致性内存模型中的每个操作必须立即对任意线程可见。")])]),a._v(" "),r("h2",{attrs:{id:"_4-jmm-顺序一致性与理论参考模型对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-jmm-顺序一致性与理论参考模型对比"}},[a._v("#")]),a._v(" 4 JMM-顺序一致性与理论参考模型对比")]),a._v(" "),r("p",[a._v("顺序一致性，保证程序的执行顺序一致，JMM 会根据一定规则（比如遵循 happens-before 原则），会对程序执行指令进行重排序，达到对编译器和处理器优化的目标。在 JMM 模型下，在不影响程序执行结果的前提下，编译器、处理器会对指令进行重排序。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B-%E9%A1%BA%E5%BA%8F%E4%B8%80%E8%87%B4%E6%80%A7-%E4%B8%B4%E7%95%8C%E5%8C%BA%E9%87%8D%E6%8E%92%E5%BA%8F.png",alt:"Java内存模型-顺序一致性-临界区重排序"}})]),a._v(" "),r("p",[a._v("实际上，一致性模型我们很少用。"),r("br"),a._v("\n因为这样编译器和处理器无法对程序做到优化，在 Java 中我们使用的是可以进行指令重排序的 JMM 模型。"),r("br"),a._v("\n还有一个原因，顺序一致模型要求线程的每一个操作都具有原子性，也就是说，读写都会操作主存，这样的效率肯定会比 JMM 模型下先对线程本地内存操作的方式要低的多。")])])}),[],!1,null,null,null);t.default=_.exports}}]);