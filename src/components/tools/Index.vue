<template>
<body class="hold-transition skin-blue layout-top-nav">
  <div class="wrapper">
    <Content />
    <Footer />
  </div>
</body>
</template>

<style>
@import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css';
@import 'admin-lte/bower_components/font-awesome/css/font-awesome.min.css';
@import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css';
@import 'admin-lte/dist/css/skins/_all-skins.min.css';
@import 'admin-lte/dist/css/AdminLTE.min.css';
</style>

<script>
import Content from "@/components/tools/base/Content.vue";
import Footer from "@/components/tools/base/Footer.vue";
export default {
  components: {
    Content,
    Footer
  }
};
</script>