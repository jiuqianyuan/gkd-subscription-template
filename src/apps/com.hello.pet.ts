import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hello.pet',
  name: '街猫',
  groups: [
    {
      key: 1,
      name: '通知提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text^="开启通知"] +2 [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/14622639',
    },
  ],
});
