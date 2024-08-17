export const TITLE = '大数据应用与开发实验室';
import { reactive } from 'vue';
// 介绍中的作品展示
export const WEBS = reactive([
  {
    title: '大数据官方代码仓库',
    desc: '大数据实验室自己的代码仓库，使用企业级代码托管，继续代码开发以及议题管理',
    url: 'http://bhbigdata.top:8099/users/sign_in',
    openHere: true,
    buttonText: '预览',
    imgUrl: 'https://www.ivikey.top/cdn/imgs/newlogo.png',
    mobile: false,
  },
  {
    title: '大数据官方chatGPT',
    desc: '大数据实验室内部使用的chatGPT，接入chatGPT3.5，不限问答次数，内部成员免费使用',
    url: 'https://alvincn.top/',
    openHere: true,
    buttonText: '预览',
    imgUrl: 'https://www.ivikey.top/cdn/imgs/project/chatgpt.webp',
    mobile: false,
  },
  {
    title: '大数据实验室学习统计平台',
    desc: '大数据实验室内部使用的学习平台，包括任务集、积分等任务，内部统计学习时间',
    url: 'http://www.ivikey.top/studyteam/#/login',
    openHere: true,
    buttonText: '预览',
    mobile: false,
    imgUrl: 'https://www.ivikey.top/cdn/imgs/project/study.jpg',
  },
  {
    title: '今天吃什么',
    desc: '不知道吃什么？今天吃什么帮你解决！',
    url: 'http://www.ivikey.top/eat/',
    openHere: true,
    buttonText: '预览',
    imgUrl: 'https://www.ivikey.top/cdn/imgs/project/eat.png',
    mobile: true,
  },
  {
    title: '今日请假',
    desc: '一个模拟今日校园请假程序的网站，没意思开发的，仅供娱乐',
    url: 'http://www.ivikey.top/todayschool/#/home',
    openHere: true,
    buttonText: '预览',
    imgUrl: 'https://www.ivikey.top/cdn/imgs/project/todayschool.png',
    mobile: true,
  },
  {
    title: '表白网页',
    desc: '一个七夕表白网页，来自理工男的浪漫',
    url: 'http://www.ivikey.top/love/',
    openHere: true,
    buttonText: '预览',
    imgUrl: 'https://www.ivikey.top/cdn/imgs/project/heart.png',
    mobile: true,
  },
]);
// logo地址
export const LOGO_URL = 'https://www.ivikey.top/cdn/imgs/newlogo.png'
// 介绍奖项图片展示
export const IMGS = reactive([
  'https://www.ivikey.top/cdn/imgs/door.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/ability.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/chuangguo.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/huanlianwangjin.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/hulianwangjia.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/hulianwangjin.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/hulianwangxiao.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/hulianwangyin.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/jishe.jpg',
  'https://www.ivikey.top/cdn/imgs/Awards/lanqiaototal.png',
]);
// 介绍中的数字展示
export const COUTNS = reactive([
  {
    count: '100%',
    content: '实验室就业率保持在100%，学长学姐们均就业于IT行业，华为、用友、九号汽车等大型企业',
    desc: '就业率',
  },
  {
    count: '90%',
    content: '实验室学长学姐们广泛就业于北上广深杭州等一线及新一线城市',
    desc: '一线城市',
  },
  {
    count: '5项',
    content: '实验室成立于2019年，虽然是基地成立最晚的实验室，但一直保持着一年获得一个国奖',
    desc: '国家级',
  },
  {
    count: '10余项',
    content: '对于奖项，对于没有进入国家级的比赛，也均获得了省级成就',
    desc: '省级',
  },
]);
// 介绍中的简介
export const INTRODUCE = reactive([
  {
    title: '实验室简介',
    content:
      '大数据应用与开发工作室成立于2019 年至今一直进行校企合作。实验室以项目开发为主，同时参与互联网+创新创业大赛、挑战杯、中国软件杯等竟赛的运行机制。旨在培养和提升学生在大数据环境下的数据挖掘分析和软件应用开发水平，提高动手操作和项目实践能力。',
  },
]);
// 控制台展示大数据
export const BIGDATA = `
                                                                                                                                                                                                                                                                                                                                                          
BBBBBBBBBBBBBBBBB     iiii                                  d::::::d                          tttt                                   1111111               444444444        222222222222222           1111111   
B::::::::::::::::B   i::::i                                 d::::::d                       ttt:::t                                  1::::::1              4::::::::4       2:::::::::::::::22        1::::::1   
B::::::BBBBBB:::::B   iiii                                  d::::::d                       t:::::t                                 1:::::::1             4:::::::::4       2::::::222222:::::2      1:::::::1   
BB:::::B     B:::::B                                        d:::::d                        t:::::t                                 111:::::1            4::::44::::4       2222222     2:::::2      111:::::1   
  B::::B     B:::::Biiiiiii    ggggggggg   ggggg    ddddddddd:::::d   aaaaaaaaaaaaa  ttttttt:::::ttttttt      aaaaaaaaaaaaa           1::::1           4::::4 4::::4                   2:::::2         1::::1   
  B::::B     B:::::Bi:::::i   g:::::::::ggg::::g  dd::::::::::::::d   a::::::::::::a t:::::::::::::::::t      a::::::::::::a          1::::1          4::::4  4::::4                   2:::::2         1::::1   
  B::::BBBBBB:::::B  i::::i  g:::::::::::::::::g d::::::::::::::::d   aaaaaaaaa:::::at:::::::::::::::::t      aaaaaaaaa:::::a         1::::1         4::::4   4::::4                2222::::2          1::::1   
  B:::::::::::::BB   i::::i g::::::ggggg::::::ggd:::::::ddddd:::::d            a::::atttttt:::::::tttttt               a::::a         1::::l        4::::444444::::444         22222::::::22           1::::l   
  B::::BBBBBB:::::B  i::::i g:::::g     g:::::g d::::::d    d:::::d     aaaaaaa:::::a      t:::::t              aaaaaaa:::::a         1::::l        4::::::::::::::::4       22::::::::222             1::::l   
  B::::B     B:::::B i::::i g:::::g     g:::::g d:::::d     d:::::d   aa::::::::::::a      t:::::t            aa::::::::::::a         1::::l        4444444444:::::444      2:::::22222                1::::l   
  B::::B     B:::::B i::::i g:::::g     g:::::g d:::::d     d:::::d  a::::aaaa::::::a      t:::::t           a::::aaaa::::::a         1::::l                  4::::4       2:::::2                     1::::l   
  B::::B     B:::::B i::::i g::::::g    g:::::g d:::::d     d:::::d a::::a    a:::::a      t:::::t    tttttta::::a    a:::::a         1::::l                  4::::4       2:::::2                     1::::l   
BB:::::BBBBBB::::::Bi::::::ig:::::::ggggg:::::g d::::::ddddd::::::dda::::a    a:::::a      t::::::tttt:::::ta::::a    a:::::a      111::::::111               4::::4       2:::::2       222222     111::::::111
B:::::::::::::::::B i::::::i g::::::::::::::::g  d:::::::::::::::::da:::::aaaa::::::a      tt::::::::::::::ta:::::aaaa::::::a      1::::::::::1             44::::::44     2::::::2222222:::::2     1::::::::::1
B::::::::::::::::B  i::::::i  gg::::::::::::::g   d:::::::::ddd::::d a::::::::::aa:::a       tt:::::::::::tt a::::::::::aa:::a     1::::::::::1             4::::::::4     2::::::::::::::::::2     1::::::::::1
BBBBBBBBBBBBBBBBB   iiiiiiii    gggggggg::::::g    ddddddddd   ddddd  aaaaaaaaaa  aaaa         ttttttttttt    aaaaaaaaaa  aaaa     111111111111             4444444444     22222222222222222222     111111111111
                                        g:::::g                                                                                                                                                                 
                            gggggg      g:::::g                                                                                                                                                                 
                            g:::::gg   gg:::::g                                                                                                                                                                 
                             g::::::ggg:::::::g                                                                                                                                                                 
                              gg:::::::::::::g                                                                                                                                                                  
                                ggg::::::ggg                                                                                                                                                                    
                                   gggggg                                                                                                                                                                                                                                                                                                                                                                                      
`;
// 进入后台密码
export const PASSWORD = 'chenshibo'
// 鼠标点击欢迎语以及颜色
export const HELLO_ARRAY = ['欢迎欢迎⭐',
  '热烈欢迎⭐',
  '你好呀同学🎊',
  '欢迎来到北华🎀',
  '天天开心😄',
  '事事顺利🌈',
  '学业有成💻',
  '好好吃饭🍜',
  '东北欢迎你🤪',
  '做你自己的英雄💪',
  '你已经很棒啦🍭',
  '入学快乐📖',
  '快乐为主🍰'
]
export const COLOR_ARRAY = [
  '#ed5a65',
  '#f1939c',
  '#73575c',
  '#e9ccd3',
  '#b2cf87',
  '#2e317c',
  '#74aa9d',
  '#894276',
  '#8076a3',
  '#126bae',
  '#2c9678',
  '#f9c116'
]
