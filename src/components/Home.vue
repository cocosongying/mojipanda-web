<template>
  <div class="background">
    <mu-container>
      <mu-appbar
        style="width: 100%;background-color: unset;position: fixed; top: 0px; left: 0px;"
        z-depth="0"
        textColor="#fff"
      >
        <mu-button icon slot="left" @click="open = !open">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <!-- {{ title }} -->
        <!-- <mu-button flat slot="right">
          <strong>LOGIN</strong>
        </mu-button>-->
      </mu-appbar>
      <mu-drawer
        :open.sync="open"
        :docked="docked"
        :right="position === 'right'"
        style="background-color: #fff; color: #666"
      >
        <mu-row justify-content="center">
          <h2></h2>
        </mu-row>
        <mu-row justify-content="center">
          <mu-avatar :size="56">
            <img src="/static/logo.png" />
          </mu-avatar>
        </mu-row>
        <mu-row justify-content="center">
          <h2>{{ title }}</h2>
        </mu-row>
        <hr style="width: 80%;" />
        <mu-list>
          <mu-list-item
            button
            v-for="(info, index) in menuList"
            :key="index"
            @click="jumpTo(info.url, info.internal)"
            style="margin-left: 27px"
          >
            <mu-icon :value="info.icon" :color="info.color"></mu-icon>
            <mu-list-item-title style="margin-left: 8px; color: #666">{{ info.name }}</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="open = false" button style="margin-left: 27px">
            <mu-icon value="cancel" color="blue"></mu-icon>
            <mu-list-item-title style="margin-left: 8px; color: #666">收起</mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <hr style="width: 80%;" />
        <mu-row justify-content="center">
          <h3></h3>
        </mu-row>
        <mu-row justify-content="center" style="bottom: 27px">Copyright © 2020 磨叽熊猫</mu-row>
      </mu-drawer>
      <div class="moji-main" center>
        <h1 style="font-size: 60px; color: #fff">{{ title }}</h1>
        <mu-container>
          <mu-card style="width: 100%; margin: 0 auto; border-radius: 8px">
            <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
            <mu-card-text>
              散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
              调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
              似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
              找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </mu-card-text>
          </mu-card>
          <br>
          <mu-card style="width: 100%; margin: 0 auto; border-radius: 8px">
            <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
            <mu-card-text>
              散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
              调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
              似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
              找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </mu-card-text>
          </mu-card>
        </mu-container>
      </div>
    </mu-container>
  </div>
</template>

<style scoped>
@import "http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  /* background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg)
    center no-repeat;
  background-size: cover; */
  /*background: url('../assets/logo.png');*/
}

@media screen and (max-width: 600px) {
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/930f5212c99ccc71accd4615cb03e255.jpg)
      center no-repeat;
    background-size: cover; */
  }
}
</style>
<style>
html {
  background-color: #ccc;
  /*background: url('../assets/logo.png');*/
}
body {
  background-color: unset;
}
.moji-main {
  text-align: center;
  margin-top: 10%;
  padding: 16px;
}
</style>
<script>
export default {
  // https://material.io/resources/icons/?style=baseline
  data() {
    let menuList = [
      { name: "文档", url: "/doc", icon: "book", color: "blue" },
      { name: "博客", url: "/blog", icon: "bookmark", color: "indigo" },
      { name: "工具", url: "/tools", icon: "build", color: "green" },
      { name: "演示", url: "/ppt", icon: "speaker_notes", color: "orange" }
    ];
    return {
      docked: false,
      open: false,
      position: "left",
      menuList: menuList,
      title: "磨叽熊猫"
    };
  },
  methods: {
    jumpTo(href, internal) {
      if (internal) {
        this.$router.push({ path: href });
      } else {
        window.open(href, "_blank");
      }
    }
  }
};
</script>

<style>
@import "muse-ui/dist/muse-ui.css";
</style>
