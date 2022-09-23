function keyBy(list, by) {
  return list.reduce((acc, x) => {
    acc[by(x)] = x
    return acc
  }, {})
}

export const baseResUrl = 'https://raw.githubusercontent.com/BelinChung/api-mock/master/assets/emotions/'

export const emotionData = {
  default: [
    {
      phrase: '[微笑]',
      url: '2018new_weixioa02_org.png'
    },
    {
      phrase: '[可爱]',
      url: '2018new_keai_org.png'
    },
    {
      phrase: '[太开心]',
      url: '2018new_taikaixin_org.png'
    },
    {
      phrase: '[鼓掌]',
      url: '2018new_guzhang_org.png'
    },
    {
      phrase: '[嘻嘻]',
      url: '2018new_xixi_org.png'
    },
    {
      phrase: '[哈哈]',
      url: '2018new_haha_org.png'
    },
    {
      phrase: '[笑cry]',
      url: '2018new_xiaoku_thumb.png'
    },
    {
      phrase: '[挤眼]',
      url: '2018new_jiyan_org.png'
    },
    {
      phrase: '[馋嘴]',
      url: '2018new_chanzui_org.png'
    },
    {
      phrase: '[黑线]',
      url: '2018new_heixian_org.png'
    },
    {
      phrase: '[汗]',
      url: '2018new_han_org.png'
    },
    {
      phrase: '[挖鼻]',
      url: '2018new_wabi_thumb.png'
    },
    {
      phrase: '[哼]',
      url: '2018new_heng_org.png'
    },
    {
      phrase: '[怒]',
      url: '2018new_nu_org.png'
    },
    {
      phrase: '[委屈]',
      url: '2018new_weiqu_org.png'
    },
    {
      phrase: '[可怜]',
      url: '2018new_kelian_org.png'
    },
    {
      phrase: '[失望]',
      url: '2018new_shiwang_org.png'
    },
    {
      phrase: '[悲伤]',
      url: '2018new_beishang_org.png'
    },
    {
      phrase: '[泪]',
      url: '2018new_leimu_org.png'
    },
    {
      phrase: '[允悲]',
      url: '2018new_kuxiao_org.png'
    },
    {
      phrase: '[害羞]',
      url: '2018new_haixiu_org.png'
    },
    {
      phrase: '[污]',
      url: '2018new_wu_org.png'
    },
    {
      phrase: '[爱你]',
      url: '2018new_aini_org.png'
    },
    {
      phrase: '[亲亲]',
      url: '2018new_qinqin_org.png'
    },
    {
      phrase: '[色]',
      url: '2018new_huaxin_org.png'
    },
    {
      phrase: '[憧憬]',
      url: '2018new_chongjing_org.png'
    },
    {
      phrase: '[舔屏]',
      url: '2018new_tianping_org.png'
    },
    {
      phrase: '[坏笑]',
      url: '2018new_huaixiao_org.png'
    },
    {
      phrase: '[阴险]',
      url: '2018new_yinxian_org.png'
    },
    {
      phrase: '[笑而不语]',
      url: '2018new_xiaoerbuyu_org.png'
    },
    {
      phrase: '[偷笑]',
      url: '2018new_touxiao_org.png'
    },
    {
      phrase: '[酷]',
      url: '2018new_ku_org.png'
    },
    {
      phrase: '[并不简单]',
      url: '2018new_bingbujiandan_org.png'
    },
    {
      phrase: '[思考]',
      url: '2018new_sikao_org.png'
    },
    {
      phrase: '[疑问]',
      url: '2018new_ningwen_org.png'
    },
    {
      phrase: '[费解]',
      url: '2018new_wenhao_org.png'
    },
    {
      phrase: '[晕]',
      url: '2018new_yun_org.png'
    },
    {
      phrase: '[衰]',
      url: '2018new_shuai_org.png'
    },
    {
      phrase: '[骷髅]',
      url: '2018new_kulou_org.png'
    },
    {
      phrase: '[嘘]',
      url: '2018new_xu_org.png'
    },
    {
      phrase: '[闭嘴]',
      url: '2018new_bizui_org.png'
    },
    {
      phrase: '[傻眼]',
      url: '2018new_shayan_org.png'
    },
    {
      phrase: '[吃惊]',
      url: '2018new_chijing_org.png'
    },
    {
      phrase: '[吐]',
      url: '2018new_tu_org.png'
    },
    {
      phrase: '[感冒]',
      url: '2018new_kouzhao_org.png'
    },
    {
      phrase: '[生病]',
      url: '2018new_shengbing_org.png'
    },
    {
      phrase: '[拜拜]',
      url: '2018new_baibai_org.png'
    },
    {
      phrase: '[鄙视]',
      url: '2018new_bishi_org.png'
    },
    {
      phrase: '[白眼]',
      url: '2018new_landelini_org.png'
    },
    {
      phrase: '[左哼哼]',
      url: '2018new_zuohengheng_org.png'
    },
    {
      phrase: '[右哼哼]',
      url: '2018new_youhengheng_org.png'
    },
    {
      phrase: '[抓狂]',
      url: '2018new_zhuakuang_org.png'
    },
    {
      phrase: '[怒骂]',
      url: '2018new_zhouma_org.png'
    },
    {
      phrase: '[打脸]',
      url: '2018new_dalian_org.png'
    },
    {
      phrase: '[顶]',
      url: '2018new_ding_org.png'
    },
    {
      phrase: '[互粉]',
      url: '2018new_hufen02_org.png'
    },
    {
      phrase: '[钱]',
      url: '2018new_qian_org.png'
    },
    {
      phrase: '[哈欠]',
      url: '2018new_dahaqian_org.png'
    },
    {
      phrase: '[困]',
      url: '2018new_kun_org.png'
    },
    {
      phrase: '[睡]',
      url: '2018new_shuijiao_thumb.png'
    },
    {
      phrase: '[求饶]',
      url: 'moren_qiurao02_org.png'
    },
    {
      phrase: '[吃瓜]',
      url: '2018new_chigua_org.png'
    },
    {
      phrase: '[打call]',
      url: 'moren_dacall02_org.png'
    },
    {
      phrase: '[awsl]',
      url: 'moren_awsl02_org.png'
    },
    {
      phrase: '[裂开]',
      url: '202011_liekai_org.png'
    },
    {
      phrase: '[doge]',
      url: '2018new_doge02_org.png'
    },
    {
      phrase: '[二哈]',
      url: '2018new_erha_org.png'
    },
    {
      phrase: '[喵喵]',
      url: '2018new_miaomiao_org.png'
    },
    {
      phrase: '[酸]',
      url: 'hot_wosuanle_org.png'
    },
    {
      phrase: '[中国赞]',
      url: '2018new_zhongguozan_org.png'
    },
    {
      phrase: '[抱抱]',
      url: '2018new_baobao_org.png'
    },
    {
      phrase: '[摊手]',
      url: '2018new_tanshou_org.png'
    },
    {
      phrase: '[跪了]',
      url: '2018new_gui_org.png'
    },
    {
      phrase: '[鲜花]',
      url: '2018new_xianhua_org.png'
    },
    {
      phrase: '[裂开]',
      url: '202011_liekai_org.png'
    },
    {
      phrase: '[抱一抱]',
      url: '2020_hug_org.png'
    },
    {
      phrase: '[红灯笼]',
      url: '2021_lantern_org.png'
    },
    {
      phrase: '[烟花]',
      url: '2021_fireworks_org.png'
    },
    {
      phrase: '[雪花]',
      url: 'yunying2020_snowflakes_org.png'
    },
    {
      phrase: '[给你小心心]',
      url: 'qixi2018_xiaoxinxin_org.png'
    },
    {
      phrase: '[小红花]',
      url: '2020_redflower_org.png'
    }
  ],
  others: [
    {
      phrase: '[心]',
      url: '2018new_xin_org.png'
    },
    {
      phrase: '[伤心]',
      url: '2018new_xinsui_org.png'
    },
    {
      phrase: '[男孩儿]',
      url: '2018new_nanhai_org.png'
    },
    {
      phrase: '[女孩儿]',
      url: '2018new_nvhai_org.png'
    },
    {
      phrase: '[握手]',
      url: '2018new_woshou_org.png'
    },
    {
      phrase: '[赞]',
      url: '2018new_zan_org.png'
    },
    {
      phrase: '[good]',
      url: '2018new_good_org.png'
    },
    {
      phrase: '[弱]',
      url: '2018new_ruo_org.png'
    },
    {
      phrase: '[NO]',
      url: '2018new_no_org.png'
    },
    {
      phrase: '[耶]',
      url: '2018new_ye_org.png'
    },
    {
      phrase: '[拳头]',
      url: '2018new_quantou_org.png'
    },
    {
      phrase: '[ok]',
      url: '2018new_ok_org.png'
    },
    {
      phrase: '[加油]',
      url: '2018new_jiayou_org.png'
    },
    {
      phrase: '[来]',
      url: '2018new_guolai_org.png'
    },
    {
      phrase: '[作揖]',
      url: '2018new_zuoyi_org.png'
    },
    {
      phrase: '[haha]',
      url: '2018new_hahashoushi_org.png'
    },
    {
      phrase: '[熊猫]',
      url: '2018new_xiongmao_org.png'
    },
    {
      phrase: '[兔子]',
      url: '2018new_tuzi_org.png'
    },
    {
      phrase: '[猪头]',
      url: '2018new_zhutou_thumb.png'
    },
    {
      phrase: '[草泥马]',
      url: '2018new_caonima_org.png'
    },
    {
      phrase: '[奥特曼]',
      url: '2018new_aoteman_org.png'
    },
    {
      phrase: '[太阳]',
      url: '2018new_taiyang_org.png'
    },
    {
      phrase: '[月亮]',
      url: '2018new_yueliang_org.png'
    },
    {
      phrase: '[浮云]',
      url: '2018new_yunduo_org.png'
    },
    {
      phrase: '[下雨]',
      url: '2018new_yu_org.png'
    },
    {
      phrase: '[沙尘暴]',
      url: '2018new_shachenbao_org.png'
    },
    {
      phrase: '[微风]',
      url: '2018new_weifeng_thumb.png'
    },
    {
      phrase: '[围观]',
      url: '2018new_weiguan_org.png'
    },
    {
      phrase: '[飞机]',
      url: '2018new_feiji_org.png'
    },
    {
      phrase: '[照相机]',
      url: '2018new_xiangji_org.png'
    },
    {
      phrase: '[话筒]',
      url: '2018new_huatong_org.png'
    },
    {
      phrase: '[蜡烛]',
      url: '2018new_lazhu_org.png'
    },
    {
      phrase: '[音乐]',
      url: '2018new_yinyue_org.png'
    },
    {
      phrase: '[喜]',
      url: '2018new_xizi_org.png'
    },
    {
      phrase: '[给力]',
      url: '2018new_geili_org.png'
    },
    {
      phrase: '[威武]',
      url: '2018new_weiwu_org.png'
    },
    {
      phrase: '[可乐]',
      url: 'moren_kele_org.png'
    },
    {
      phrase: '[干杯]',
      url: '2018new_ganbei_org.png'
    },
    {
      phrase: '[蛋糕]',
      url: '2018new_dangao_org.png'
    },
    {
      phrase: '[礼物]',
      url: '2018new_liwu_org.png'
    },
    {
      phrase: '[钟]',
      url: '2018new_zhong_org.png'
    },
    {
      phrase: '[肥皂]',
      url: '2018new_feizao_thumb.png'
    },
    {
      phrase: '[绿丝带]',
      url: '2018new_lvsidai_org.png'
    },
    {
      phrase: '[围脖]',
      url: '2018new_weibo_org.png'
    },
    {
      phrase: '[赞啊]',
      url: 'lxhzan_thumb.gif'
    },
    {
      phrase: '[胖丁微笑]',
      url: 'film_pangdingsmile_org.png'
    },
    {
      phrase: '[佩奇]',
      url: 'hot_pigpeiqi_org.png'
    },
    {
      phrase: '[大侦探皮卡丘微笑]',
      url: 'pikaqiu_weixiao_org.png'
    },
    {
      phrase: '[圣诞老人111]',
      url: 'xmax_oldman01_org.png'
    },
    {
      phrase: '[紫金草]',
      url: 'gongjiri_zijinhua_org.png'
    },
    {
      phrase: '[文明遛狗]',
      url: 'gongyi_wenminglgnew_org.png'
    },
    {
      phrase: '[神马]',
      url: 'horse2_org.gif'
    },
    {
      phrase: '[马到成功]',
      url: 'mdcg_org.gif'
    },
    {
      phrase: '[炸鸡啤酒]',
      url: 'zhajibeer_org.gif'
    },
    {
      phrase: '[最右]',
      url: 'remen_zuiyou180605_org.png'
    },
    {
      phrase: '[织]',
      url: 'zz2_org.gif'
    },
    {
      phrase: '[五仁月饼_旧]',
      url: '2018zhongqiu_yuebing_org.png'
    },
    {
      phrase: '[给你小心心]',
      url: 'qixi2018_xiaoxinxin_org.png'
    },
    {
      phrase: '[吃狗粮]',
      url: 'qixi2018_chigouliang_org.png'
    },
    {
      phrase: '[弗莱见钱眼开]',
      url: '2018newyear_richdog_org.gif'
    },
    {
      phrase: '[星星]',
      url: 'hot_star171109_org.png'
    },
    {
      phrase: '[半星]',
      url: 'hot_halfstar_org.png'
    },
    {
      phrase: '[空星]',
      url: 'hot_blankstar_org.png'
    },
    {
      phrase: '[圣诞袜]',
      url: '2020_santastockings_org.png'
    },
    {
      phrase: '[圣诞帽]',
      url: '2020_santahat_org.png'
    },
    {
      phrase: '[圣诞老人]',
      url: '2020_santaclaus_org.png'
    },
    {
      phrase: '[平安果]',
      url: '2020_apple_org.png'
    },
    {
      phrase: '[姜饼人]',
      url: '2020_gingerbread_org.png'
    },
    {
      phrase: '[欢度国庆]',
      url: 'guoqing20_huandugq_org.png'
    },
    {
      phrase: '[七夕布谷鸟]',
      url: '2020qixi_bugubird_org.png'
    },
    {
      phrase: '[撒狗粮]',
      url: 'qixi2020_sagouliang_org.png'
    },
    {
      phrase: '[求脱单]',
      url: 'qixi2020_qiutuodan_org.png'
    },
    {
      phrase: '[酷炫街舞给手]',
      url: 'yunying_jiewu03_org.png'
    },
    {
      phrase: '[这就是街舞3]',
      url: 'yunying_jiewu02_org.png'
    },
    {
      phrase: '[毛巾助力]',
      url: 'yunying_jiewu01_org.png'
    },
    {
      phrase: '[超新星运动会]',
      url: 'yunying_starquanyunhui_org.png'
    },
    {
      phrase: '[棒棒糖]',
      url: '2020liuyi_bangbangtang_org.png'
    },
    {
      phrase: '[纸飞机]',
      url: '2020liuyi_zhifeiji_org.png'
    },
    {
      phrase: '[炸鸡腿]',
      url: 'yunying_zhaji_org.png'
    },
    {
      phrase: '[点亮平安灯]',
      url: 'feiyan_dianliangpingan_org.png'
    },
    {
      phrase: '[点亮橙色]',
      url: 'gongyi_dlchengse03_org.png'
    },
    {
      phrase: '[锦鲤]',
      url: 'hbf2019_jinli_org.png'
    },
    {
      phrase: '[看涨]',
      url: 'kanzhangv2_org.gif'
    },
    {
      phrase: '[看跌]',
      url: 'kandiev2_org.gif'
    }
  ]
}

export const emotionMap = keyBy([...emotionData.default, ...emotionData.others], (i) => i.phrase)
