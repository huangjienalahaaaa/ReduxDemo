# v1.0 认识redux和文章前言
> React当中的组件通信和状态管理是特别繁琐的，比如子组件和父组件通信改变值，要通过父组件的方法。这就好比恋爱，要先认识女孩，再牵手，再接吻，最后你才能为所欲为。这种形式肯定不符合现在人的习惯，所以就有了很多快餐服务，通宵服务，极大的方便了现代人的需求。在开发中同样，公司最讲的就是效率，效率就需要把事情变简单，那只有React肯定不符合大型项目和快速开发。需要视图层框架+数据层框架，两个相互结合，就可以实现大型的开发项目了。

<font color="red">Redux</font>是目前React生态中，最好的数据层框架，所以单独拿出一个文章来系统的讲解Redux。

* 这里先给出这个课程的基本大纲，也是你可以学会的知识:
![](learnImg/01.png)

# v2.0 认识redux和文章介绍：

## Redux介绍：

> Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂，JavaScript需要管理比任何时候都要多的state（状态），Redux就是降低管理难度的。（Redux支持React，Angular、jQuery甚至纯JavaScript）

可以通过一张图，看出Redux如何简化状态管理的（图片来自“前端记录”网站，如有侵权，请联系删除:
![](learnImg/02.jpg)
从图中可以看出，如果不用Redux，我们要传递state是非常麻烦的。Redux中，可以把数据先放在数据仓库（store-公用状态存储空间）中，这里可以统一管理状态，然后哪个组件用到了，就去stroe中查找状态。如果途中的紫色组件想改变状态时，只需要改变store中的状态，然后其他组件就会跟着中的自动进行改变。

## Flux和Redux的关系：
有很多小伙伴都会问我讲不讲Flux？这里我可以明确的回答你，不讲。

因为在我看来Redux就是Flux的升级版本，早期使用React都要配合Flux进行状态管理，但是在使用中，Flux显露了很多弊端，比如多状态管理的复杂和易错。所以Redux就诞生了，现在已经完全取代了Flux，过时的东西就不再讲解了。

如果你说公司还在用Flux，你可以试着学会Redux后，进行升级，抛弃Flux，其实前端的知识就是更新淘汰的这么迅速，要时刻保持学习的习惯。

# v3.0 Redux工作流程：
这节课要学习的知识非常重要，你只有学会了<font color="red">Redux</font>工作流程，你才能对<font color="red">Redux</font>有个通透的了解。如果你只官方的图或者自己看文档，还是有一点难度的。但是如果你红尘接触的多或者跟胖哥一样，是一个喜欢小姐姐的人，那这个流程就很简单了。（看视频）


## redux官方图片:
> 先来看一下官方给的图片，我也试着解说一下，不好勿怪。因为这东西本来就不太好了解，官方有很抽象。
![](learnImg/03.jpg)
这个的解读看视频吧，写起来还是挺麻烦的。其实我觉的这个图完全是个已经回Redux的人看的，至少是一个入门Redux的人看的，完全不符合一个初学者的视角。
## 我画的里截图:
![](learnImg/04.jpg)
我就以多年老司机的身份给你们讲解一下这个图，这个图你完全可以理解为一次大宝剑的过程，如果你经验不多，或者你是女孩子，我可以理解为借书的过程。当然我还是拿宝剑为例(图是我自己画的，很丑无怪).


* <font color="red">React Components</font>就相当于大官人，然后我们去作“大宝剑”，我们先见到的是<font color="red">Action Creators</font>“妈妈桑”,我们说我要找小红，我是熟客了。"妈妈桑"就回到了<font color="red">Store</font>，然后让<font color="red">Reducer</font>看看"小红“忙不忙（现在的状态），如果不忙就让她过来配大官人。



# v4.0 基础-<font color="red">Ant Design</font>介绍和环境初始化：

> Ant Design是一套面向企业级开发的UI框架，视觉和动效作的很好。阿里开源的一套UI框架，它不只支持React，还有ng和Vue的版本，我认为不论你的前端框架用什么，Ant Design都是一个不错的选择。习惯性把AntDesign简称为antd。 目前有将近5万Star，算是React UI框架中的老大了。

***初始化项目：***
这里我默认你已经看过我的“React16免费视频教程”了，所以我认为你这个过程已经了解了知识点，我只是带着你作一遍。
1. 如果你没有安装脚手架工具，你需要安装一下：
> npm install -g create-react-app

2. 直接用脚手架工具创建项目
```javascript
 D:  //进入D盘
 mkdir ReduxDemo   //创建ReduxDemo文件夹
 cd ReduxDemo      //进入文件夹
 create-react-app demo01  //用脚手架创建React项目
 cd demo01   //等项目创建完成后，进入项目目录
 npm  start  //预览项目
```

***快速生成基本代码结构:***
编写<font color="red">index.js</font>文件,这个文件就是一个基础文件，基本代码也都是一样的。
```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

ReactDOM.render(<TodoList/>,document.getElementById('root'))
```
编写<font color="red">TodoList.js</font>文件,这个文件可以用<font color="red">Simple React Snippets</font>快速生成。 先输入<font color="red">imrc</font>,再输入<font color="red">ccc</font>
代码如下：
```javascript
import React, { Component } from 'react';
class TodoList extends Component {
    render() { 
        return ( 
            <div>Hello World</div>
         );
    }
}
export default TodoList;
```
做完这个，算是项目基本构建完成，可以打开浏览器看一下效果。接下来就可以安装<font color="red">Ant DesignUI</font>框架了。
***安装<font color="red">Ant DesignUI</font>：***
这里使用npm来进行安装，当然你有可以用yarn的方式进行安装.
> npm install antd --save

yarn的安装方式是:
>yarn add antd

如果你的网络情况不好，最好使用cnpm来进行安装。等待程序安装完以后，就可以进行使用了。这个我家里的网络安装起来非常耗时，所以就等待安装完成后，再下节课学习一下如何使用吧。


# v5.0 用Ant Desin制作UI界面

> 已经完成了基本开发环境和AntDesign的安装。这节课用Ant Design制作一下TodoList的界面。本文不会对Ant Design深入讲解，只是为了让课程的界面好看一点，如果你对它有强烈的学习需要或愿望，可以看一下Ant Design官方文档,文档都是中文，没有什么难度。图片就是这节课最后要做出的样式。

总结:这节课主要用Ant Design制作了todoList的界面，使用了<Input>，<Button>和<List>组件，因为这个课程是讲Redux的，所以这些组件的使用方法并没有展开讲，主要是制作一个UI界面，为以后的课程作铺垫。如果你对Ant Design非常感兴趣，你可以去官方网站阅读文档。