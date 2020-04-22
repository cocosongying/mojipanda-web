<template>
<body class="hold-transition skin-blue layout-top-nav">
  <div class="wrapper">
    <Content />
    <Footer />
  </div>
</body>
</template>

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