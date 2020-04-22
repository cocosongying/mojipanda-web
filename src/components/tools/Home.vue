<template>
  <div id="tool-home" class="container">
    <!-- Main content -->
    <section class="content container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="alert alert-info">
            <h4>I am an info callout!</h4>
            <p>Follow the steps to continue to payment.</p>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">其他工具</h3>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse">
                  <i class="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="box-body">
              <div class="col-md-3" v-for="(info, index) in list.other" :key="index">
                <a class="btn btn-block btn-social margin" :class="info.color" :href="info.url">
                  <i :class="info.icon"></i>
                  {{ info.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    let list = {
      other: [
        {
          name: "Hello",
          url: "tools/hello",
          icon: "fa fa-bitbucket",
          color: "bg-purple"
        }
      ]
    };
    return {
      list
    };
  }
};
</script>