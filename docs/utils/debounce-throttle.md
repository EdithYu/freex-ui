---
title: 防抖截流
group: 常用工具
toc: content
---

```jsx
import React from 'react';
import _ from 'lodash';
import { Button } from 'antd';

export default function Home(props) {
  console.log(props);

  const testThrottle = _.throttle(
    function () {
      console.log('throttle');
    },
    5000,
    {
      leading: true, // 点击立刻执行，后面时间内执行，如果trailing为true，则在5秒后执行
      trailing: false, // 点击一定时间后，执行
    },
  );

  const testDebounce = _.debounce(
    function () {
      console.log('debounce');
    },
    2000,
    {
      leading: true,
      trailing: false,
    },
  );

  return (
    <div>
      <Button onClick={testThrottle}>点击throttle</Button>
      <Button onClick={testDebounce}>点击Debounce</Button>
    </div>
  );
}
```
