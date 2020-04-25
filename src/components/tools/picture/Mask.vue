<template>
  <div id="tool-home" class="container">
    <!-- Main content -->
    <section class="content container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="alert alert-info">
            <h4>说明</h4>
            <p>hehe</p>
          </div>
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">头像加口罩</h3>
            </div>
            <div class="box-body">
              <div class="form-group">
                <label>选择图片</label>
                <input
                  type="file"
                  ref="fileUp"
                  @change="getFile"
                  accept="image/*"
                  style="display: none;"
                />
                <div class="input-group" @click="choiceImg">
                  <input
                    type="text"
                    class="form-control"
                    style="background-color:#fff"
                    :value="fileName"
                    readonly
                  />
                  <span class="input-group-addon">
                    <i class="fa fa-folder-open"></i>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label>选择样式</label>
                <div class="radio" @change="choiceMask">
                  <label v-for="(info, index) in masks" :key="index">
                    <input type="radio" v-model="maskStyle" :value="index" />
                    <img :src="maskBasic+info.name" width="28px" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="box box-primary" v-show="fileName!=''">
            <div class="box-header with-border">
              <h3 class="box-title">预览</h3>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-info" @click="downloadImg">
                  下载
                  <!-- <i class="fa fa-minus"></i> -->
                </button>
              </div>
            </div>
            <div class="box-body">
              <div>
                <canvas id="a" width="240" height="240"></canvas>
              </div>
              <!-- <img :src="imgUrl1" style="max-height:360px;max-width:360px;" /> -->
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { fabric } from "fabric";
export default {
  data() {
    var canvas = new fabric.Canvas("a");
    var masks = [{ name: "00.png" }, { name: "01.png" }, { name: "02.png" }];
    return {
      imgUrl: "",
      fileName: "",
      maskBasic: "/static/img/mask/",
      maskStyle: 0,
      masks,
      canvas
    };
  },
  mounted() {
    this.canvas = new fabric.Canvas("a");
    // var rect = new fabric.Rect({
    //   top: 50,
    //   left: 100,
    //   width: 100,
    //   height: 70,
    //   fill: "red"
    // });
    // canvas.add(rect);
  },
  methods: {
    choiceImg: function() {
      this.$refs.fileUp.dispatchEvent(new MouseEvent("click"));
    },
    choiceMask: function() {
      let _this = this;
      if (_this.fileName) {
        let ele = _this.canvas.item(0);
        if (ele) {
          _this.canvas.remove(ele);
        }
        fabric.Image.fromURL(
          _this.maskBasic + _this.masks[_this.maskStyle].name,
          function(img) {
            let scale =
              img.width > img.height ? 240 / img.width : 240 / img.height;
            scale *= 0.5;
            let left = (240 - img.width * scale) / 2;
            img.scale(scale).set({ left: left, top: 10 });
            _this.canvas.add(img).setActiveObject(img);
          }
        );
      }
    },
    downloadImg: function() {
      console.log("download");
      const url = this.canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = "a.png";
      link.href = url;
      link.dataset.downloadurl = ["image/png", link.download, link.href].join(
        ":"
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    getFile: function(event) {
      let _this = this;
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(f) {
        var data = f.target.result;
        fabric.Image.fromURL(data, function(img) {
          var scale =
            img.width > img.height ? 240 / img.width : 240 / img.height;
          _this.canvas.setBackgroundImage(
            img,
            _this.canvas.renderAll.bind(_this.canvas),
            {
              scaleX: scale,
              scaleY: scale
            }
          );
        });
      };
      reader.onloadend = function() {
        _this.imgUrl = this.result;
        _this.choiceMask();
      };
      this.fileName = file.name;
    }
  }
};
</script>