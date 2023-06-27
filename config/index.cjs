/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe7da3f867285c8ce',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '901d0d2fcc395fcadd6726613545d4ea',

  PROVINCE: '上海',
  CITY: '浦东',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'opfz46YKUi0J_BXWWD-jqBv2GXcA',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '99PaJu_3lHM3m2CWr4bKYpUWaFtu8zKFdEn7n2CP6oY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '玲宝宝', year: '2003', date: '11-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '玲宝宝', year: '2003', date: '12-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '02-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-02-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'opfz46TzSoiMTxZWO5sMA3pE16qA',

  CALLBACK_USERS: [
    {
      name: 'opfz46YKUi0J_BXWWD-jqBv2GXcA',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opfz46WEZuShA5NVOnuIfuBBB4PA',
    }
  ],

}

module.exports = USER_CONFIG

