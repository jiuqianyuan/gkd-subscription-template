import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.chinamobile.mcloud:id/bn_cancel"] + [id="com.chinamobile.mcloud:id/upgrade_title"]',
          snapshotUrls: 'https://i.gkd.li/i/12774833',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '@[vid="bn_cancel"] + * > [vid="upgrade_title"]',
          snapshotUrls: 'https://i.gkd.li/i/14297700',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.chinamobile.mcloud.client.ui.MenuActivity',
            'com.chinamobile.mcloud.client.ui.CustomScanActivity',
            'com.mcloud.login.ui.ConfirmLoginTvActivity',
          ],
          matches: '[id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13627826',
            'https://i.gkd.li/i/14549523',
            'https://i.gkd.li/i/14732062',
          ],
        },
        {
          key: 1,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          matches: '[text="马上领取"] +3 View > Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13627832',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          fastQuery: true,
          matches:
            '[id="com.chinamobile.mcloud:id/iv_logo"] + [id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13627834',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-请求开启自动备份弹窗',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
      rules:
        '[text="开启自动备份"] +n [id="com.chinamobile.mcloud:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/i/13627830',
    },
    {
      key: 5,
      name: '通知提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="btn_push_notice_close_dialog"]',
          snapshotUrls: 'https://i.gkd.li/i/14882447',
        },
      ],
    },
  ],
});
