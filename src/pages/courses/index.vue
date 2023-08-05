<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const page = ref<number>(route.query.page ? +route.query.page : 1)

const data: any[] = [
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/5cb264268d50e7ebbc16.png',
    id: 931,
    price: '0.20',
    t_price: '300.00',
    title: 'Vue3实战商城后台管理系统开发',
    try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div id="auto-id-1655816958297" class="cintrocon j-courseintro">本季度基于Vue3 + ElementPlus + Vite实战开发商城后台管理系统，其中包括Vite的使用，Vue3全新的 &lt;script setup&gt; 语法，vuex4、Vue-router4、使用ElementPlus 库、多权限管理、商品多规格实现、订单发货、导出订单、图库模块、分销模块、分享海报以及部署服务器上线知识等。</div>\n<div class="cintrocon j-courseintro">&nbsp;</div>\n<div class="cintrocon j-courseintro">【线上课程地址】<span style="color: #3366ff;"><a style="color: #3366ff;" href="https://study.163.com/course/courseMain.htm?courseId=1212775807&amp;share=2&amp;shareId=480000001892585" target="_blank" rel="noopener">https://study.163.com/course/courseMain.htm?courseId=1212775807&amp;share=2&amp;shareId=480000001892585</a></span></div>\n<div class="cintrocon j-courseintro"><br />【效果演示】<br />课程演示地址：http://shopadmin.dishawang.com<br />账号：admin&nbsp;&nbsp;密码：admin<br /><br />【常见问题】<br />问题1：老师，这门课有涉及&nbsp;Typescript&nbsp;吗？<br />回答：靓仔，这门课没有加ts哦，主要是考虑到小白，打算下一门vue3的实战新课再加入<br /><br />问题2：老师，这门课有讲后端开发吗？<br />回答：靓仔，只讲前端和前后端交互，不过会提供线上api接口和接口文档，另外&nbsp;后端api源码&nbsp;等课程完结之后也会共享到群文件中，同时也会提供后端api接口源码的部署教程。<br /><br /></div>\n<div class="cintrocon j-courseintro"><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/dfbdafe91634662e007f.png?x-oss-process=image/format,webp" width="880" height="495" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/dca0d24638ed46f80796.png?x-oss-process=image/format,webp" width="880" height="426" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a3085f1026a152988d44.png?x-oss-process=image/format,webp" width="880" height="495" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a3e2def9547a603cc50f.png?x-oss-process=image/format,webp" width="880" height="883" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/28c10c21ff40821189e9.png?x-oss-process=image/format,webp" width="880" height="863" /></div>\n<div class="cintrocon j-courseintro">&nbsp;</div>',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/77a1b28c5721e548af18.png',
    id: 906,
    price: '148.00',
    t_price: '398.00',
    title: 'uni-app多端企业网盘全栈开发',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具有Html+Css+JavaScript基础，有一定的Vue.js基础，挑战高薪职位</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app&nbsp;+&nbsp;egg.js实战多端企业网盘全栈开发，另外还会结合vuecli&nbsp;+&nbsp;iview&nbsp;+&nbsp;bootstrap4实现PC端企业网盘，vuex管理项目状态，OSS对象存储分发加速等。本项目会兼容Android、iOS、小程序、H5端和PC端等。<br /><br /><br />【其他uniapp实战系列教程推荐】：https://study.163.com/series/1202883608.htm<br /><br />（全网最详细的uniapp实战开发app小程序课程，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。）</div>\n<div class="j-courseintroImgs introimg"><img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLCUJgedgBN0n2pvicQOD1Es0KKoy20Wzpicd4w86MQzmb0sP2WVaHyILSZnNDI1Rl1Xs/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBT0mdxf7tfBl8oyJibu6fbTSib9aGCNzUH5JFHujwaicfbB7aKpGDiaYU9ticM78BFm144/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBAdycqhmQLTpHBqeehHKTFUUqzOOKLTrGMGZic2V7zaNqt9SwXWZy11zic2trA5A3WA/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLCq3sdeFjDxLnlrzNTtw5kkJ0z5k1gys7h0m1pGHQjdghstiaMBjnUVTRxGHlicItHXE/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLDQNX5Ne5wpgKoMjuTrpcW3L6xIAlmicgMNCR2MiaVNVjvcah0MibJicTty0SeZNw2ntMM/" alt="" /></div>\n</div>',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/fcd589d5aff7a247e352.png',
    id: 905,
    price: '0.00',
    t_price: '398.00',
    title: 'uni-app实战商城类app和小程序',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具备Html+Css+Javascript基础知识和Vuejs基础知识。</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app实战项目第2季度，将实战商城类app和小程序，其中会包括发布到安卓端app，iOS端app、微信小程序，另外还会涉及Weex（nvue），Vuex模块化管理，商城支付模块等。<br /><br />【其他uniapp实战系列教程推荐】：https://study.163.com/series/1202883608.htm<br /><br />（全网最详细的uniapp实战开发app小程序课程，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。）</div>\n<div class="j-courseintroImgs introimg"><img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBRAIuxF2uwDVe7AMTRGVtYkDt0x8mLm3ZjawJrVoYiadWib55fvKJ77DaXNRpaftS9s/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBpkNibszRrwM3W7EiaHv7KAPdq2yZiak00vkiaPvAqeVmo8rxNwlxDRm03qbS7sB19Su8/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLA1Z12MO7jBFnRibAMTRODCjglL3boTg234khK3pDSaXL6TU6SpHmibEHibKMpcHgXibbc/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLAIAJCa6iaoviczryriawq6nogEVCgM1mb4NKhkefcw5ibIJZHkq4eXw9sbSnf0vqro2xc/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLAPf8MzhdxellanNUQ2ojah6g6fz9kJ9dqnSOP6ic7g7dHWZ6xfkq00icORITmSm7pnI/" alt="" /></div>\n</div>',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/87db258b9004597476b4.png',
    id: 904,
    price: '0.10',
    t_price: '298.00',
    title: 'uni-app实战社区交友类app开发',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具备Html+Css+Javascript基础知识。</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app实战项目第一季度，将实战开发社区交友类app，其中会包括发布到安卓端app，iOS端app、微信小程序和支付宝小程序。<br /><br /><br />【其他uniapp实战系列教程推荐】：https://study.163.com/series/1202883608.htm<br /><br />（详细的uniapp实战开发app小程序课程，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。）</div>\n<div class="j-courseintroImgs introimg"><img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLDbYAbMo8T65h4Hwo3vHuN6iczJH8chDgcia5DY7KpdzjRANGGAFLRFhk4Oiaf33R1jTI/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLARaPhkRu4C66CgGvu0yUubicXGMcWkK1llHZnu3UhkVeuhyvDq1jNArvKUxQcr8iaq0/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBUg3BeicdWwxrxULh5uMUuibhPTV42uwhVns9FFicvf8McicegmSuorOG4QhKNtO4zN60/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBpaIVWEJXJI6pmp0jwYXmdLbleiaBvbHaH3SOXLVUojUfFEibMYWCxT5M8VNBXSJPZw/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLCuzRxQtD8SRiaMLAVEn7XQZa8PcszaA9bRPbyJxODZcXQZf74bxt6bLhsNCHBW1vRE/" alt="" /></div>\n</div>',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/372e5bef5d7ff8f5f34c.png',
    id: 903,
    price: '68.00',
    t_price: '198.00',
    title: 'uniCloud社区交友入门实战',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具有Html+Css+JavaScript基础，有一定的Vue.js基础，挑战高薪职位</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本课程将以uniCloud社区交友安卓app和H5开发实战为大家系统的讲解uniCloud，讲解包括但不限于DBschema，clientDB，uni-id等插件，云函数等等。<br /><br /><br />【其他uniapp实战系列教程推荐】：https://study.163.com/series/1202883608.htm<br /><br />（全网最详细的uniapp实战开发app小程序课程，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。）</div>\n<div class="j-courseintroImgs introimg">&nbsp;</div>\n</div>',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
    id: 25,
    price: '10.00',
    t_price: '20.00',
    title: 'uni-app实战在线教育类app开发',
    try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度基于uni-app实战开发在线教育类app和小程序，课程包括：图文，音频，视频，电子书、会员、直播、问答、考试、拼团秒杀、优惠券。一次开发，同时搞定Android、iOS、微信小程序、H5端。<br /><br /><br /></div>\n<div class="j-courseintroImgs introimg"><img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLD6C6icWmYEkB4uTfB9u2hZW6GTGVprZfT7thc6WE0OSrwFoKDvEVtktcOVHficuXqxQ/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBeIhftsxCXWIyL5SZ3H6F4ICDfRLBZ3l8H3VQ7c5iaUDnGI6XlyznEGb17hSgF0qVM/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLC5e84JoIsCv5d1PZbacdpWiaUj7yIw9u5kvvhdHeqYjNzdcGkJ9sIu96uzxZyjTMIE/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLDia6hnBmIxkqqRzJLnACs1rJYRyPAADUqsSembTlBibEyu4CgXqowykkOppBKYyk4y8/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLD7hKyl7zyLAwpMO60qv0USL2khgHq99KKNWHM7Yhf7rXwaJV8vHHxwG5FXR4TLAN0/" alt="" /></div>',
    type: 'audio',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
    id: 11,
    price: '90.00',
    t_price: '100.00',
    title: 'uni-app实战直播app全栈开发',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具有Html+Css+JavaScript基础，有一定的Vue.js基础，挑战高薪职位</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app + egg.js 实战直播app、小程序全栈开发，课程涉及：node.js直播服务器搭建，socket.io实时送礼物、实时弹幕功能等。一次开发，同时搞定Android、iOS、小程序端。<br /><br />【其他uniapp实战系列教程推荐】：https://study.163.com/series/1202883608.htm<br /><br />（详细的uniapp实战开发app小程序课程，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。）</div>\n<div class="j-courseintroImgs introimg"><img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLA3O1mAI5j1Q9FKb8BEcOKzWYZicKU1L7zbEApw9vaicwibnet4cN6rAsY9gloGU7m9H4/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLAvZVfSRsWH1BJy1Dxib1F7wosFjr4KylNaY9O1P6LOpOWmmV2ysboGibJhoAH0A5c6U/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBkLMDraAXFCY8PMcJicibZiadHibwyq3BZQN9CnFT295unmpOFmvccsyZUqJ1cp10j0Qw/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLAezJPuuiaSnicMKDwfz7A1rKibgG77WaEiclA1UeKUgnGEa4QwDjuGFx0ibGfD779PUGBQ/" alt="" /></div>\n</div>',
    type: 'video',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/47d1aa930177515cd95e.png',
    id: 7,
    price: '9.98',
    t_price: '20.00',
    title: 'uni-app实战视频点播app小程序',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具有Html+Css+JavaScript基础，有一定的Vue.js基础，挑战高薪职位</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app&nbsp;+&nbsp;egg.js&nbsp;实战视频点播类app、小程序和H5全栈开发，另外还会结合subNVue实现自定义播放器组件，vuex管理项目状态，腾讯云点播&nbsp;VOD转码处理和分发加速等。一次开发，同时搞定Android、iOS、小程序和H5端等。<br /><br /><br />【其他uniapp实战系列教程推荐】：https://study.163.com/series/1202883608.htm<br /><br />（详细的uniapp实战开发app小程序课程，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。）</div>\n<div class="j-courseintroImgs introimg"><img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBULSLRGjrTiczEWdhz95ibFBWLSfcpKribricFgqgT17Belx4efiaZEmNwjcEvDVibLLtNg/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLCuUTwHTYv99l2QmlewibBNDYUONlgSFYTGyW0y32KpICiciccpuJkTq1iaPQXoaRZ6RFU/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBfWrsI68rp1cGxs8PhemPRTYBJxdUwFJiarphBicrtiaZm58auj9og1cW4GRiaGC6EBew/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLBTGbcyIW81lujf1oGCBuiaMwA5LcY1pt9KHBMVnQS9jQ5uMovH4aIO4nc8z4ucCUY8/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLDibyQVibMKibLUyVEcUReVLLRVT5XUdico6SO4OS3iaicEG9AHWfpe4kGOH0CeQdcDcjW6U/" alt="" /></div>\n</div>',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
    id: 6,
    price: '9.98',
    t_price: '20.00',
    title: 'VueCli 实战在线教育后台系统',
    try: '<div class="u-ctn-intro j-course-user-box">\n<h2 class="u-ctit ctit1">适用人群</h2>\n<p class="j-targetuser cintrocon">具有一定javaScript基础<br />具有一定Vuejs基础</p>\n</div>\n<div class="u-ctn-intro u-ctn-intro-last">\n<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度基于vue-element-admin实战开发在线教育后台系统，课程包括：图文，音频，视频，电子书、会员、直播、问答、题库、拼团秒杀、优惠券、可视化拖拽管理多端（PC端&nbsp;+&nbsp;移动端）。课程涉及vue&nbsp;+&nbsp;vuex&nbsp;+&nbsp;vue-router&nbsp;+&nbsp;vue-cli&nbsp;+&nbsp;axios&nbsp;+&nbsp;element-ui&nbsp;+&nbsp;Mock.js等内容。<br /><br /><br />【在线教育系列的其他课程】<br />uni-app实战在线教育类app开发：https://study.163.com/course/courseMain.htm?courseId=1211586802&amp;share=2&amp;shareId=480000001892585<br /><br />\n<p>课程大纲见以下图！<br /><br /></p>\n<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLDia8uicE3trsLzE4X9j9Sw7r39WXE78tOZGNYPJF2QhX6xCjicOnfO57hNljrUqd6cnk/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLB9eJlwKSfwdrw9tUliatiayvajt2rr8NaHazc6YA8903EqcIdEJicomc5taTXFbIicjKA/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLAKptlQkdzQVDTZGoR21maUCwmI91se2zcomQN74MWZibnz1yaRxHMHu0iaVogzMkxqY/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLA9wZQYYyvzwxvq0svyUJ2AzEAKZpqQglf4icLcS91HsFlKdo5s7EaM322z4NPJxOyU/" alt="" />&nbsp;<img src="https://10.idqqimg.com/qqke_course_info/ajNVdqHZLLApMz9jLBTdKZQ05DuSicSczj2nQERIibBYicJfHYZUpvkdkhFUYLOVGBKGepnpghFQrI/" alt="" /></div>\n</div>',
    type: 'media',
  },
]
const handleCurrentChange = (val: number) => {
  // console.log('Size change:', val)
  page.value = val
  router.push({
    query: {
      page: val,
    },
  })
}
</script>
<template>
  <div>
    <!-- breadcrumb -->
    <div class="my-5">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Courses</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- data list  -->
    <el-row :gutter="20">
      <el-col v-for="item in data" :key="item.id" :span="6">
        <!-- <CourseCard :item="item" /> -->
      </el-col>
    </el-row>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-5 mb-10">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="100"
        :current-page="page"
        class="mt-4"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
