#开发手册
##
create-react-app my-app --template typescript
##
npm install --save typescript @types/node @types/react @types/react-dom
##使用less
react项目创建的时候是看不到webpack相关的配置文件的，所以需要先暴露出来，使用下面的命令：

npm run eject

然后安装less相关的依赖：

yarn add less less-loader -D

Error:
TypeError: this.getOptions is not a function
原因： less-loader安装的版本过高
解决方案： 1.npm uninstall less-loader
2.npm install less-loader@6.0.0

注意
1.模块化css引入需要文件名后缀是.module.less
2.react-app-env.d.ts 需要配置 declare module "*.less"
3.webpack配置参考https://www.jianshu.com/p/7fe9e435eb7c