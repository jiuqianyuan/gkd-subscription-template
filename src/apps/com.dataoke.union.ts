import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dataoke.union',
  name: '大淘客联盟',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[text="取消"] <<n [id="com.dataoke.union:id/parentPanel"] [text^="你还没有打开通知哦"]',
      snapshotUrls: 'https://i.gkd.li/i/13446826',
    },
  ],
});