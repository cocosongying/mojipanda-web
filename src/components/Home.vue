<template>
  <div id="main-home">
    <h1>{{ title }}</h1>
    <a :href="admin.url" target="_blank">{{ admin.title }}</a>
    <a :href="test.url" target="_blank">{{ test.title }}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'MojiPanda',
      admin: {
        title: 'admin',
        url: '/#/admin'
      },
      test: {
        title: 'test',
        url: '/#/test'
      }
    }
  }
}
</script>

<style scoped>
</style>
