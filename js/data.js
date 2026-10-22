/**
 * ★ 网站所有内容都在这里，修改后刷新页面即可生效。
 *
 * - avatar / image：填图片路径（如 "assets/avatar.jpg"）；留空则显示渐变占位
 * - link：留空则不显示链接
 * - gradient：占位图的渐变色，可随意改
 */
window.SITE = {
  name: "林小川",
  birthYear: 1995, // 年龄会按当前年份自动计算
  city: "中国",
  role: "学习研究者 · 公众号「林小川说学习」作者",
  tagline: "看透知识本质，摆脱死记硬背。",
  avatar: "",
  bio: "我持续思考两个问题：知识是什么？有什么方法能快速理解任何学科？在 AI 时代，背诵公式和解题套路正在贬值，真正的竞争力来自学科大图景与一般性思维。我希望帮助更多人掌握终生受益的学习力。",

  stats: [
    { value: 120, suffix: "+", label: "原创文章" },
    { value: 5, suffix: " 层", label: "知识分层框架" },
    { value: 10, suffix: "k+", label: "读者" }
  ],

  experience: [
    {
      period: "2024 — 至今",
      title: "公众号作者",
      org: "林小川说学习",
      desc: "撰写「学习看本质」系列，解析数学、语文、C 语言、数据结构等学科的核心问题与思维方式。"
    },
    {
      period: "2021 — 2024",
      title: "学习方法研究",
      org: "独立研究",
      desc: "系统研读吴金闪《教的更少，学得更多》，构建知识五层次框架在各学科中的应用方法。"
    },
    {
      period: "2017 — 2021",
      title: "本科",
      org: "某某大学 · 计算机科学",
      desc: "在学习编程的过程中意识到：理解“为什么”远比记住“怎么做”更重要。"
    }
  ],

  projects: [
    {
      title: "学习看本质",
      desc: "每个学科都是为了解决一个核心人类问题而演化出来的。这个系列从“它要解决什么问题”出发，重新理解一门学科。",
      tags: ["系列文章", "学科本质"],
      link: "",
      featured: true
    },
    {
      title: "知识五层次",
      desc: "从经验、事实、概念到学科大图景与一般性思维，一张图看清你的学习停在哪一层。",
      tags: ["框架", "可视化"],
      link: ""
    },
    {
      title: "C 语言的内存网格",
      desc: "把 C 语言理解为指挥 CPU 在内存网格中搬运数据的工具。",
      tags: ["计算机", "类比教学"],
      link: ""
    },
    {
      title: "数学是关系的语言",
      desc: "从静态数量关系到等量关系，再到变化关系，看清数学的演化主线。",
      tags: ["数学"],
      link: ""
    },
    {
      title: "日常思考记录",
      desc: "捕捉闪念与灵感，把碎片思考沉淀为系统知识。",
      tags: ["笔记", "方法"],
      link: ""
    },
    {
      title: "AI 时代的学习力",
      desc: "当第 1–2 层知识被 AI 吞噬，如何把时间投向学科大图景与一般性思维。",
      tags: ["AI", "学习方法"],
      link: ""
    }
  ],

  portfolio: [
    {
      title: "知识五层次图谱",
      category: "信息图",
      image: "",
      gradient: ["#2997ff", "#5e5ce6"],
      desc: "将吴金闪教授的知识分层理论绘制为一张可视化图谱。",
      link: ""
    },
    {
      title: "数学本质三部曲",
      category: "长文",
      image: "",
      gradient: ["#ff9f0a", "#ff375f"],
      desc: "静态数量关系、等量关系、变化关系三篇深度长文。",
      link: ""
    },
    {
      title: "数据结构思维导图",
      category: "思维导图",
      image: "",
      gradient: ["#30d158", "#0a84ff"],
      desc: "从数据关系出发，梳理存储结构与算法设计的方法论。",
      link: ""
    },
    {
      title: "语文：信息交换",
      category: "长文",
      image: "",
      gradient: ["#bf5af2", "#ff375f"],
      desc: "语文要解决的核心问题：表达清楚、理解准确。",
      link: ""
    },
    {
      title: "学习力工作坊",
      category: "课程",
      image: "",
      gradient: ["#64d2ff", "#30d158"],
      desc: "问题导向、可视化、体验式三原则的实践课程。",
      link: ""
    }
  ],

  contact: {
    title: "一起聊聊学习。",
    sub: "欢迎交流、合作或只是打个招呼。",
    email: "you@example.com",
    links: [
      { label: "公众号：林小川说学习", url: "" },
      { label: "GitHub", url: "https://github.com/" }
    ]
  }
};
