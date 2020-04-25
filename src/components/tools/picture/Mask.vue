<template>
  <div id="tool-home" class="container">
    <!-- Main content -->
    <section class="content container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="alert alert-info">
            <h4>说明</h4>
            <p>+ 请先选择图片，再选择口罩样式，在预览区域调整口罩位置、角度、缩放大小等，最后点击下载按钮即可</p>
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
                <button type="button" class="btn btn-info" @click="downloadImg">下载</button>
              </div>
            </div>
            <div class="box-body">
              <div>
                <canvas id="headCanvas"></canvas>
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
import { fabric } from "fabric";
export default {
  data() {
    const canvas = new fabric.Canvas("headCanvas");
    const masks = [{ name: "00.png" }, { name: "01.png" }, { name: "02.png" }];
    return {
      fileName: "",
      maskBasic: "/static/img/mask/",
      maskStyle: 0,
      imgSize: 240,
      masks,
      canvas
    };
  },
  mounted() {
    this.canvas = new fabric.Canvas("headCanvas");
  },
  methods: {
    // 文件选择控件的 click 事件绑定到自定义的文本输入控件
    choiceImg: function() {
      this.$refs.fileUp.dispatchEvent(new MouseEvent("click"));
    },
    // 选择口罩样式
    choiceMask: function() {
      let _this = this;
      // 当前已有打开的图片时
      if (_this.fileName) {
        // 检查 canvas 是否已有元素, 如果已有需要先删除再重新添加新的元素
        let ele = _this.canvas.item(0);
        if (ele) {
          _this.canvas.remove(ele);
        }
        // 加载选择的口罩样式
        fabric.Image.fromURL(
          _this.maskBasic + _this.masks[_this.maskStyle].name,
          function(img) {
            // 设置图片大小
            let scale =
              img.width > img.height
                ? _this.imgSize / img.width
                : _this.imgSize / img.height;
            scale *= 0.5;
            // 设置图片位置居中
            let left = (_this.imgSize - img.width * scale) / 2;
            img.scale(scale).set({ left: left, top: 10 });
            // 添加图片到 canvas
            _this.canvas.add(img).setActiveObject(img);
          }
        );
      }
    },
    // 下载图片
    downloadImg: function() {
      const type = "image/png";
      const url = this.canvas.toDataURL(type, 1.0);
      const link = document.createElement("a");
      const name = "mask" + Date.now() + ".png";
      link.download = name;
      link.href = url;
      link.dataset.downloadurl = [type, link.download, link.href].join(":");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    // 打开图片文件
    getFile: function(event) {
      let _this = this;
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(f) {
        let data = f.target.result;
        fabric.Image.fromURL(data, function(img) {
          // 设置图片大小
          let scale =
            img.width > img.height
              ? _this.imgSize / img.width
              : _this.imgSize / img.height;
          // 将图片设置为 canvas 的背景图片
          _this.canvas.setBackgroundImage(
            img,
            _this.canvas.renderAll.bind(_this.canvas),
            {
              scaleX: scale,
              scaleY: scale
            }
          );
          _this.canvas.setWidth(img.width * scale);
          _this.canvas.setHeight(img.height * scale);
        });
      };
      // 图片加载完成，将选中的口罩样式添加到图片上
      reader.onloadend = function() {
        _this.choiceMask();
      };
      this.fileName = file.name;
    }
  }
};
</script>