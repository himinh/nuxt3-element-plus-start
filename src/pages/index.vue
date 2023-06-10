<script setup lang="ts">
const groupData = {
  title: 'Groups',
  type: 'Groups',
  data: [
    {
      group_id: 21,
      id: 11,
      title: 'uni-app实战直播app全栈开发',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
      price: '8.00',
      t_price: '90.00',
      type: 'video',
      start_time: '2021-04-15T16:00:00.000Z',
      end_time: '2024-06-29T16:00:00.000Z',
    },
    {
      group_id: 29,
      id: 6,
      title: 'VueCli 实战在线教育后台系统',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
      price: '5.00',
      t_price: '9.98',
      type: 'media',
      start_time: '2021-05-15T17:04:00.000Z',
      end_time: '2024-06-29T16:00:00.000Z',
    },
    {
      group_id: 30,
      id: 3,
      title: 'uni-app实战仿微信app开发',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png',
      price: '50.00',
      t_price: '9.98',
      type: 'column',
      start_time: '2021-05-15T17:05:00.000Z',
      end_time: '2024-06-22T16:00:00.000Z',
    },
    {
      group_id: 31,
      id: 25,
      title: 'uni-app实战在线教育类app开发',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
      price: '0.10',
      t_price: '10.00',
      type: 'audio',
      start_time: '2021-05-16T08:31:00.000Z',
      end_time: '2024-06-29T16:00:00.000Z',
    },
  ],
}

const latestData = {
  title: 'Latest',
  type: 'latest',
  data: [
    {
      content: '<p>3333</p>',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/5cb264268d50e7ebbc16.png',
      created_time: '2022-02-08T13:58:21.000Z',
      id: 931,
      is_single: 1,
      price: '0.20',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '300.00',
      title: 'Vue3实战商城后台管理系统开发',
      try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div id="auto-id-1655816958297" class="cintrocon j-courseintro">本季度基于Vue3 + ElementPlus + Vite实战开发商城后台管理系统，其中包括Vite的使用，Vue3全新的 &lt;script setup&gt; 语法，vuex4、Vue-router4、使用ElementPlus 库、多权限管理、商品多规格实现、订单发货、导出订单、图库模块、分销模块、分享海报以及部署服务器上线知识等。<br /><br />【课程演示】<br />课程演示地址：http://shopadmin.dishawang.com<br />账号：admin&nbsp;&nbsp;密码：admin<br /><br />【常见问题】<br />问题1：老师，这门课有涉及&nbsp;Typescript&nbsp;吗？<br />回答：靓仔，这门课没有加ts哦，主要是考虑到小白，打算下一门vue3的实战新课再加入<br /><br />问题2：老师，这门课有讲后端开发吗？<br />回答：靓仔，只讲前端和前后端交互，不过会提供线上api接口和接口文档，另外&nbsp;后端api源码&nbsp;等课程完结之后也会共享到群文件中，同时也会提供后端api接口源码的部署教程。<br /><br /></div>\n<div class="cintrocon j-courseintro"><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/dfbdafe91634662e007f.png?x-oss-process=image/format,webp" width="880" height="495" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/dca0d24638ed46f80796.png?x-oss-process=image/format,webp" width="880" height="426" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a3085f1026a152988d44.png?x-oss-process=image/format,webp" width="880" height="495" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a3e2def9547a603cc50f.png?x-oss-process=image/format,webp" width="880" height="883" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/28c10c21ff40821189e9.png?x-oss-process=image/format,webp" width="880" height="863" /></div>\n<div class="cintrocon j-courseintro">&nbsp;</div>',
      type: 'media',
      updated_time: '2022-06-21T13:13:55.000Z',
    },
    {
      content:
        '<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度基于vue-element-admin实战开发在线教育后台系统，课程包括：图文，音频，视频，电子书、会员、直播、问答、题库、拼团秒杀、优惠券、可视化拖拽管理多端（PC端&nbsp;+&nbsp;移动端）。课程涉及vue&nbsp;+&nbsp;vuex&nbsp;+&nbsp;vue-router&nbsp;+&nbsp;vue-cli&nbsp;+&nbsp;axios&nbsp;+&nbsp;element-ui&nbsp;+&nbsp;Mock.js等内容。<br /><br /><br />课程大纲见以下图！</div>\n<div class="j-courseintroImgs introimg">\n<div><img id="auto-id-1624901492689" class="intro-img" src="https://edu-image.nosdn.127.net/165b8b2aa1374255b2fea9c3db5b1f0e.png?imageView&amp;quality=100&amp;type=webp" width="880" height="663" data-src="//edu-image.nosdn.127.net/165b8b2aa1374255b2fea9c3db5b1f0e.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901492690" class="intro-img" src="https://edu-image.nosdn.127.net/d37a5093c82b4fe4b9af437d2da953ff.png?imageView&amp;quality=100&amp;type=webp" width="880" height="1463" data-src="//edu-image.nosdn.127.net/d37a5093c82b4fe4b9af437d2da953ff.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901492691" class="intro-img" src="https://edu-image.nosdn.127.net/87033003ea6744b88ac69001d9896163.png?imageView&amp;quality=100&amp;type=webp" width="880" height="914" data-src="//edu-image.nosdn.127.net/87033003ea6744b88ac69001d9896163.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901492692" class="intro-img" src="https://edu-image.nosdn.127.net/7ffa5057198e4a869eab90f3622c10b3.png?imageView&amp;quality=100&amp;type=webp" width="880" height="1312" data-src="//edu-image.nosdn.127.net/7ffa5057198e4a869eab90f3622c10b3.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901492693" class="intro-img" src="https://edu-image.nosdn.127.net/c7ac94b12b0f46998679c645c977084d.png?imageView&amp;quality=100&amp;type=webp" width="880" height="700" data-src="//edu-image.nosdn.127.net/c7ac94b12b0f46998679c645c977084d.png?imageView&amp;quality=100&amp;type=webp" /></div>\n</div>',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
      created_time: '2021-02-28T17:06:15.000Z',
      id: 6,
      is_single: 1,
      price: '9.98',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '20.00',
      title: 'VueCli 实战在线教育后台系统',
      try: '<p>VueCli 实战在线教育后台系统试看内容</p>',
      type: 'media',
      updated_time: '2021-06-28T17:31:58.000Z',
    },
    {
      content:
        '<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app&nbsp;+&nbsp;egg.js&nbsp;实战视频点播类app、小程序和H5全栈开发，另外还会结合subNVue实现自定义播放器组件，vuex管理项目状态，腾讯云点播&nbsp;VOD转码处理和分发加速等。一次开发，同时搞定Android、iOS、小程序和H5端等。<br /><br /><br /></div>\n<div class="j-courseintroImgs introimg">\n<div><img id="auto-id-1624901537244" class="intro-img" src="https://edu-image.nosdn.127.net/b1b0635105b34419982d4a02436a81d3.png?imageView&amp;quality=100&amp;type=webp" width="880" height="495" data-src="//edu-image.nosdn.127.net/b1b0635105b34419982d4a02436a81d3.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901537245" class="intro-img" src="https://edu-image.nosdn.127.net/2b830fc536b640cd9802a639a1624d7f.png?imageView&amp;quality=100&amp;type=webp" width="880" height="1224" data-src="//edu-image.nosdn.127.net/2b830fc536b640cd9802a639a1624d7f.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901537246" class="intro-img" src="https://edu-image.nosdn.127.net/1160f4706501415493a28a222642137f.png?imageView&amp;quality=100&amp;type=webp" width="880" height="683" data-src="//edu-image.nosdn.127.net/1160f4706501415493a28a222642137f.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901537247" class="intro-img" src="https://edu-image.nosdn.127.net/7ac6ddf9c93f4de18fe39749d1d4b6b3.png?imageView&amp;quality=100&amp;type=webp" width="880" height="669" data-src="//edu-image.nosdn.127.net/7ac6ddf9c93f4de18fe39749d1d4b6b3.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901537248" class="intro-img" src="https://edu-image.nosdn.127.net/2d5e77f43ce84905b6ce63b62771f14b.png?imageView&amp;quality=100&amp;type=webp" width="880" height="1485" data-src="//edu-image.nosdn.127.net/2d5e77f43ce84905b6ce63b62771f14b.png?imageView&amp;quality=100&amp;type=webp" /></div>\n</div>',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/47d1aa930177515cd95e.png',
      created_time: '2021-02-28T17:06:21.000Z',
      id: 7,
      is_single: 1,
      price: '9.98',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '20.00',
      title: 'uni-app实战视频点播app小程序',
      try: '<p>uni-app实战视频点播app小程序试看内容</p>',
      type: 'media',
      updated_time: '2021-06-28T17:33:10.000Z',
    },
    {
      content:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/876f865cd563c5d87dc6.mp3',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
      created_time: '2021-04-01T19:39:47.000Z',
      id: 25,
      is_single: 1,
      price: '10.00',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '20.00',
      title: 'uni-app实战在线教育类app开发',
      try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度基于uni-app实战开发在线教育类app和小程序，课程包括：图文，音频，视频，电子书、会员、直播、问答、考试、拼团秒杀、优惠券。一次开发，同时搞定Android、iOS、微信小程序、H5端。<br /><br /><br /></div>\n<div class="j-courseintroImgs introimg">\n<div><img id="auto-id-1624901407338" class="intro-img" src="https://edu-image.nosdn.127.net/a8c9d36af9964ae4831b08a1ad8c3560.png?imageView&amp;quality=100&amp;type=webp" width="880" height="495" data-src="//edu-image.nosdn.127.net/a8c9d36af9964ae4831b08a1ad8c3560.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407339" class="intro-img" src="https://edu-image.nosdn.127.net/1c3925b14b6446e5ace8c357e22bcc48.png?imageView&amp;quality=100&amp;type=webp" width="880" height="586" data-src="//edu-image.nosdn.127.net/1c3925b14b6446e5ace8c357e22bcc48.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407340" class="intro-img" src="https://edu-image.nosdn.127.net/36c138b44bb0443386ab974192832e54.png?imageView&amp;quality=100&amp;type=webp" width="880" height="990" data-src="//edu-image.nosdn.127.net/36c138b44bb0443386ab974192832e54.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407341" class="intro-img" src="https://edu-image.nosdn.127.net/076b9318be594246829df6b39e5243a3.png?imageView&amp;quality=100&amp;type=webp" width="880" height="733" data-src="//edu-image.nosdn.127.net/076b9318be594246829df6b39e5243a3.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407342" class="intro-img" src="https://edu-image.nosdn.127.net/fc4971d032464fcb8f2c2869960356bc.png?imageView&amp;quality=100&amp;type=webp" width="880" height="495" data-src="//edu-image.nosdn.127.net/fc4971d032464fcb8f2c2869960356bc.png?imageView&amp;quality=100&amp;type=webp" /></div>\n</div>',
      type: 'audio',
      updated_time: '2021-06-28T17:31:08.000Z',
    },
    {
      content:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c968f15ea596b084bcb1.mp4',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
      created_time: '2021-03-11T16:38:42.000Z',
      id: 11,
      is_single: 1,
      price: '90.00',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '100.00',
      title: 'uni-app实战直播app全栈开发',
      try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度为uni-app&nbsp;+&nbsp;egg.js&nbsp;实战直播app、小程序全栈开发，课程涉及：node.js直播服务器搭建，socket.io实时送礼物、实时弹幕功能等。一次开发，同时搞定Android、iOS、小程序端。<br /><br /></div>\n<div class="j-courseintroImgs introimg">\n<div><img id="auto-id-1624901719776" class="intro-img" src="https://edu-image.nosdn.127.net/ce91fc9fc9804aa7b585ff2adba42d12.jpg?imageView&amp;quality=100&amp;type=webp" width="880" height="495" data-src="//edu-image.nosdn.127.net/ce91fc9fc9804aa7b585ff2adba42d12.jpg?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901719777" class="intro-img" src="https://edu-image.nosdn.127.net/741c9ae082d04163884d2190a9e27487.jpg?imageView&amp;quality=100&amp;type=webp" width="880" height="1124" data-src="//edu-image.nosdn.127.net/741c9ae082d04163884d2190a9e27487.jpg?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901719778" class="intro-img" src="https://edu-image.nosdn.127.net/82c5a9559ebb4c55aa9a675ba90128a0.jpg?imageView&amp;quality=100&amp;type=webp" width="880" height="1093" data-src="//edu-image.nosdn.127.net/82c5a9559ebb4c55aa9a675ba90128a0.jpg?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901719779" class="intro-img" src="https://edu-image.nosdn.127.net/2cd90f8940794713810fa1dc1fe805fd.jpg?imageView&amp;quality=100&amp;type=webp" width="880" height="1485" data-src="//edu-image.nosdn.127.net/2cd90f8940794713810fa1dc1fe805fd.jpg?imageView&amp;quality=100&amp;type=webp" /></div>\n</div>',
      type: 'video',
      updated_time: '2021-06-28T17:35:37.000Z',
    },
  ],
}

const recommendedData = {
  title: 'Recommended',
  type: 'recommended',
  data: [
    {
      content: '<p>3333</p>',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/5cb264268d50e7ebbc16.png',
      created_time: '2022-02-08T13:58:21.000Z',
      id: 931,
      is_single: 1,
      price: '0.20',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '300.00',
      title: 'Vue3实战商城后台管理系统开发',
      try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div id="auto-id-1655816958297" class="cintrocon j-courseintro">本季度基于Vue3 + ElementPlus + Vite实战开发商城后台管理系统，其中包括Vite的使用，Vue3全新的 &lt;script setup&gt; 语法，vuex4、Vue-router4、使用ElementPlus 库、多权限管理、商品多规格实现、订单发货、导出订单、图库模块、分销模块、分享海报以及部署服务器上线知识等。<br /><br />【课程演示】<br />课程演示地址：http://shopadmin.dishawang.com<br />账号：admin&nbsp;&nbsp;密码：admin<br /><br />【常见问题】<br />问题1：老师，这门课有涉及&nbsp;Typescript&nbsp;吗？<br />回答：靓仔，这门课没有加ts哦，主要是考虑到小白，打算下一门vue3的实战新课再加入<br /><br />问题2：老师，这门课有讲后端开发吗？<br />回答：靓仔，只讲前端和前后端交互，不过会提供线上api接口和接口文档，另外&nbsp;后端api源码&nbsp;等课程完结之后也会共享到群文件中，同时也会提供后端api接口源码的部署教程。<br /><br /></div>\n<div class="cintrocon j-courseintro"><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/dfbdafe91634662e007f.png?x-oss-process=image/format,webp" width="880" height="495" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/dca0d24638ed46f80796.png?x-oss-process=image/format,webp" width="880" height="426" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a3085f1026a152988d44.png?x-oss-process=image/format,webp" width="880" height="495" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a3e2def9547a603cc50f.png?x-oss-process=image/format,webp" width="880" height="883" /><img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/28c10c21ff40821189e9.png?x-oss-process=image/format,webp" width="880" height="863" /></div>\n<div class="cintrocon j-courseintro">&nbsp;</div>',
      type: 'media',
      updated_time: '2022-06-21T13:13:55.000Z',
    },
    {
      content: '<p>egg.js图文入门</p>',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c9a7d63fcca8f62dd377.png',
      created_time: '2021-03-11T16:11:45.000Z',
      id: 10,
      is_single: 1,
      price: '90.00',
      school_id: 11,
      status: 0,
      sub_count: 0,
      t_price: '100.00',
      title: 'egg.js图文入门',
      try: '<p>egg.js图文入门<img class="wscnph" src="http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/322da14afbb6f84b303f.png" /></p>',
      type: 'media',
      updated_time: '2021-08-24T06:00:07.000Z',
    },
    {
      content:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/ed1b742f7a95b4db32d3.mp3',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/7099da5662a42568deba.jpg',
      created_time: '2021-07-31T13:57:36.000Z',
      id: 897,
      is_single: 1,
      price: '20.00',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '30.00',
      title: '我的第三个音频教程',
      try: '<p>我的第三个音频教程</p>',
      type: 'audio',
      updated_time: '2021-07-31T13:57:36.000Z',
    },
    {
      content:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/876f865cd563c5d87dc6.mp3',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
      created_time: '2021-04-01T19:39:47.000Z',
      id: 25,
      is_single: 1,
      price: '10.00',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '20.00',
      title: 'uni-app实战在线教育类app开发',
      try: '<h2 class="u-ctit ctit1">课程概述</h2>\n<div class="cintrocon j-courseintro">本季度基于uni-app实战开发在线教育类app和小程序，课程包括：图文，音频，视频，电子书、会员、直播、问答、考试、拼团秒杀、优惠券。一次开发，同时搞定Android、iOS、微信小程序、H5端。<br /><br /><br /></div>\n<div class="j-courseintroImgs introimg">\n<div><img id="auto-id-1624901407338" class="intro-img" src="https://edu-image.nosdn.127.net/a8c9d36af9964ae4831b08a1ad8c3560.png?imageView&amp;quality=100&amp;type=webp" width="880" height="495" data-src="//edu-image.nosdn.127.net/a8c9d36af9964ae4831b08a1ad8c3560.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407339" class="intro-img" src="https://edu-image.nosdn.127.net/1c3925b14b6446e5ace8c357e22bcc48.png?imageView&amp;quality=100&amp;type=webp" width="880" height="586" data-src="//edu-image.nosdn.127.net/1c3925b14b6446e5ace8c357e22bcc48.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407340" class="intro-img" src="https://edu-image.nosdn.127.net/36c138b44bb0443386ab974192832e54.png?imageView&amp;quality=100&amp;type=webp" width="880" height="990" data-src="//edu-image.nosdn.127.net/36c138b44bb0443386ab974192832e54.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407341" class="intro-img" src="https://edu-image.nosdn.127.net/076b9318be594246829df6b39e5243a3.png?imageView&amp;quality=100&amp;type=webp" width="880" height="733" data-src="//edu-image.nosdn.127.net/076b9318be594246829df6b39e5243a3.png?imageView&amp;quality=100&amp;type=webp" /><img id="auto-id-1624901407342" class="intro-img" src="https://edu-image.nosdn.127.net/fc4971d032464fcb8f2c2869960356bc.png?imageView&amp;quality=100&amp;type=webp" width="880" height="495" data-src="//edu-image.nosdn.127.net/fc4971d032464fcb8f2c2869960356bc.png?imageView&amp;quality=100&amp;type=webp" /></div>\n</div>',
      type: 'audio',
      updated_time: '2021-06-28T17:31:08.000Z',
    },
    {
      content:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/7684ab0418281d5f26cb.mp3',
      cover:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b5a17594d214105a4351.jpg',
      created_time: '2021-07-31T09:04:37.000Z',
      id: 895,
      is_single: 1,
      price: '10.00',
      school_id: 11,
      status: 1,
      sub_count: 0,
      t_price: '20.00',
      title: '我的音频课程1',
      try: '<p>我的音频课程1</p>',
      type: 'audio',
      updated_time: '2021-07-31T09:04:37.000Z',
    },
  ],
}
</script>

<template>
  <Banner />
  <ImageNav />
  <ImageAdd />
  <ListCard :data="groupData" />
  <ListCard :data="latestData" />
  <ListCard :data="recommendedData" />
</template>
