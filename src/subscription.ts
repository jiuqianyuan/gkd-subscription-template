import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 717,
  name: 'Subscription',
  version: 0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/jiuqianyuan/gkd-subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
