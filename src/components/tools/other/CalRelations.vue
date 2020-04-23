<template>
  <div id="tool-home" class="container">
    <!-- Main content -->
    <section class="content container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="alert alert-info">
            <h4>说明</h4>
            <p>+ 多条结果表示称呼的结果有多个</p>
            <p>
              + 算法使用开源项目
              <a
                href="https://github.com/mumuy/relationship"
                target="_blank"
                rel="noopener noreferrer"
              >relationship</a>
            </p>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">亲戚关系计算器</h3>
            </div>
            <div class="box-body" style="padding: 18px">
              <!-- Custom Tabs -->
              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li class="active" @click="type='default'">
                    <a href="#tab_1" data-toggle="tab">计算称呼</a>
                  </li>
                  <li @click="type='chain'">
                    <a href="#tab_2" data-toggle="tab">计算关系</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="form-group">
                      <div class="radio">
                        <label>
                          <input type="radio" v-model="reverse" :value="0" checked />
                          我称呼对方
                        </label>
                        <label></label>
                        <label>
                          <input type="radio" v-model="reverse" :value="1" />
                          对方称呼我
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="radio">
                        <label>
                          <input type="radio" v-model="sex" name="radio_sex" :value="0" checked />
                          我是个女的
                        </label>
                        <label></label>
                        <label>
                          <input type="radio" v-model="sex" name="radio_sex" :value="1" />
                          我是个男的
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="text" v-model="content" class="form-control" placeholder />
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('爸爸')">父</button>
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('妈妈')">母</button>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('老公')">夫</button>
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('老婆')">妻</button>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('儿子')">子</button>
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('女儿')">女</button>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('哥哥')">兄</button>
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('弟弟')">弟</button>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('姐姐')">姐</button>
                      <button type="button" class="btn btn-info bg-blue" @click="data.push('妹妹')">妹</button>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-default bg-red" @click="data.pop()">
                        <i class="fa fa-long-arrow-left"></i>
                      </button>
                      <button type="button" class="btn btn-default bg-red" @click="data=[]">
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_2">
                    <div class="form-group">
                      <div class="radio">
                        <label>
                          <input type="radio" v-model="sex" :value="0" checked />
                          我是个女的
                        </label>
                        <label></label>
                        <label>
                          <input type="radio" v-model="sex" :value="1" />
                          我是个男的
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="text" v-model="chain" class="form-control" placeholder />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">计算结果</h3>
            </div>
            <div class="box-body" style="padding: 18px">
              <pre>{{ result }}</pre>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </section>
  </div>
</template>

<script>
import relationship from "relationship.js";
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
      list,
      data: [],
      sex: 0,
      type: "default",
      reverse: 0,
      chain: ""
    };
  },
  computed: {
    content: {
      set(val) {
        if (!val) {
          this.data = [];
          return false;
        }
        this.data = val.split("的");
      },
      get() {
        return this.data.join("的");
      }
    },
    result() {
      let text = this.type === "default" ? this.content : this.chain;
      if (!text) {
        return " ";
      }
      const options = {
        text: text,
        sex: this.sex,
        type: this.type,
        reverse: this.reverse
      };
      const res = relationship(options);
      if (res.length) {
        return res.join("\n");
      } else {
        return "Sorry，我没有计算出来哦～";
      }
    }
  }
};
</script>