import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    key: 0,
    name: '开屏广告',
  },
  {
    enable: false,
    key: 1,
    name: '通知提示',
    // 推送通知类
  },
  {
    enable: false,
    key: 2,
    name: '更新提示',
  },
  {
    enable: false,
    key: 3,
    name: '定位提示',
  },
  {
    enable: false,
    key: 4,
    name: '评价提示',
  },
  {
    enable: false,
    key: 5,
    name: '青少年模式',
  },
  {
    enable: false,
    key: 6,
    name: '权限提示',
    // 其它权限请求
  },
  {
    enable: false,
    key: 7,
    name: '全屏广告',
    // 不关闭广告就无法进行其它操作的广告弹窗, 它阻碍用户操作
    // 一般是刚进入APP时显示的全屏弹窗
  },
  {
    enable: false,
    key: 8,
    name: '局部广告',
    // 不影响使用的广告, 所有的广告卡片及悬浮广告按钮
  },
  {
    enable: false,
    key: 9,
    name: '分段广告',
    // 如微信朋友圈广告/酷安帖子广告/贴吧帖子广告
    // 需要分阶段多步操作才能关闭, 会造成屏幕略微闪烁, 稍微影响用户体验
  },
  {
    enable: false,
    key: 10,
    name: '功能类',
    // 非广告, 点击某些功能按钮
    // 公告弹窗归此类
  },
  {
    enable: false,
    key: 11,
    name: '其他', // 分类不明确
  },
]);
