<template>
  <div class="wrapper">
    <Header />
    <MainSidebar />
    <ContentWrapper />
    <Footer />
    <ControlSidebar />
  </div>
  <!-- ./wrapper -->
</template>

<script>
import Header from "@/components/admin/Header.vue";
import MainSidebar from "@/components/admin/MainSidebar.vue";
import ContentWrapper from "@/components/admin/ContentWrapper.vue";
import Footer from "@/components/admin/Footer.vue";
import ControlSidebar from "@/components/admin/ControlSidebar.vue";
import {store, mutations} from '@/store'

//mutations.setUserName('hello')
export default {
  data() {
    return {}
  },
  mounted() {
    this.axios.get(this.ConstApi.HELLO).then(function (res){
      mutations.setUserName(res.data.data.content)
    }).catch(function (err) {
      console.log(err)
    })
  },
  components: {
    Header,
    MainSidebar,
    ContentWrapper,
    Footer,
    ControlSidebar
  }
};
</script>