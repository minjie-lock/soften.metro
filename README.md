# @SOFTEN/METRO

## 功能

通过 Babel 的功能，将 React Native 的基础组件改为小写，并且剔除需要引入功能，开发体验与 Web 端一致，保持基础组件小写，自定义的才大写的结构

## 使用

在 metro.config.js 引入使用

```js
const { babelTransformerPath } = require('@soften/metro');
const config = mergeConfig(getDefaultConfig(__dirname), {
  transformer: {
    babelTransformerPath,
  }
});
```

之后便可愉快的使用下面的语法

```tsx
export default function Root() {
  return (
    <view>
      <text>Welcome Metro</text>
    <view>
  )
}
```


### Typescript

想要更好的提示，当然少不了 Typescript 的支持，在 tsconfig.json 中，把 jsxImportSource 改为 @soften/metro 的声明文件即可。

```json
 "compilerOptions": {
    "jsxImportSource": "@soften/metro",
  },
```
