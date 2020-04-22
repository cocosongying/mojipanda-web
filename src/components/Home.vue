<template>
  <div class="background">
    <mu-container>
      <mu-appbar style="width: 100%;background-color: unset;" z-depth="0" textColor="#fff">
        <mu-button icon slot="left" @click="open = !open">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        {{ title }}
        <mu-button flat slot="right">
          <strong>LOGIN</strong>
        </mu-button>
      </mu-appbar>
      <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
        <h2 style="margin-left: 27px">MojiPanda</h2>
        <mu-list>
          <mu-divider></mu-divider>
          <mu-list-item
            button
            v-for="(info, index) in menuList"
            :key="index"
            @click="jumpTo(info.url)"
          >
            <mu-icon :value="info.icon" :color="info.color"></mu-icon>
            <mu-list-item-title style="margin-left: 8px">{{ info.name }}</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="open = false" button>
            <mu-icon value="cancel" color="blue"></mu-icon>
            <mu-list-item-title style="margin-left: 8px">收起</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
      <div class="moji-main" center>
        <h1 style="font-size: 60px; color: #fff">磨叽熊猫</h1>
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
  background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg)
    center no-repeat;
  background-size: cover;
  /*background: url('../assets/logo.png');*/
}

@media screen and (max-width: 600px) {
  .background{
        position:absolute;
        width:100%;
        height:100%;
        background:url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/930f5212c99ccc71accd4615cb03e255.jpg) center no-repeat;
        background-size:cover;
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
  data() {
    let menuList = [
      { name: "文档", url: "/doc", icon: "book", color: "blue" },
      { name: "博客", url: "/blog", icon: "bookmark", color: "indigo" },
      { name: "工具", url: "/tools", icon: "build", color: "green" }
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
    jumpTo(href) {
      // this.$router.push({path: '/doc'})
      window.location.href = href;
    }
  }
};
</script>

<style scoped>
</style>
