<template>
  <div id="app">
    <!--  显示  -->
    <div class="according">
      <div class="according_min">
        <h4 class="time">当前时间：{{ date }}</h4>
        <p class="text_value">当前按下按钮：{{ text }}</p>
        <h3 class="rod_value">推杆位置：{{ value }}%</h3>
        <h3 class="rotate_value">旋转角度：{{ rotateNum }}°</h3>
      </div>
    </div>
    <!--  显示end  -->

    <!--  按键  -->
    <div class="buttongroup">
      <!-- 顶部按钮 -->
      <el-row class="topbtn">
        <h5>DYNAMIC MOTION CONTROLLER DTR-3000</h5>
        <el-col :span="6">
          <div class="left">
            <h3>SONY</h3>
          </div>
        </el-col>

        <el-col :span="10">
          <div class="center">
            <ul>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>VTR 1</span>
              </li>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>VTR 2</span>
              </li>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>MASTAR</span>
              </li>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>SYNCHRO</span>
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="right">
            <div class="right_top">
              <el-row>
                <el-col :span="8">
                  <div>
                    <h2 v-if="show1">ON</h2>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="right_top_l">
                    <h2 v-if="show2">ON</h2>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div>
                    <h2 v-if="show3">ON</h2>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="right_text">
              <el-row>
                <el-col :span="8">
                  <div>
                    <span>S</span>
                    <span>F</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div>
                    <span>S</span>
                    <span>F</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div>
                    <span>S</span>
                    <span>F</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <ul>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>PREROLL 1</span>
              </li>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>PREROLL 2</span>
              </li>
              <li>
                <el-button
                  size="mini"
                  @click="btn_b"
                  type="info"
                  plain
                ></el-button>
                <span>PREROLL 3</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <!--  左边推杆 + 按键  -->
        <el-col :span="9">
          <!--  指示灯  -->
          <div class="light">
            <ul id="led">
              <li>
                <div class="r_show">
                  <div class="led r_led" v-if="r_led1"></div>
                </div>
              </li>
              <li>
                <div class="g_show">
                  <div class="led g_led" v-if="g_led1"></div>
                </div>
              </li>
              <li>
                <div class="r_show">
                  <div class="led r_led" v-if="r_led2"></div>
                </div>
              </li>
              <li>
                <div class="g_show">
                  <div class="led g_led" v-if="g_led2"></div>
                </div>
              </li>
            </ul>
          </div>
          <!--  指示灯end  -->

          <!--  推杆区域  -->
          <div class="rod">
            <el-row>
              <el-col :span="12">
                <div class="rod_left">
                  <!-- 滑块 -->
                  <el-slider
                    class="slider"
                    v-model="value"
                    vertical
                    height="350px"
                    :format-tooltip="formatTooltip"
                    :show-tooltip="false"
                  >
                  </el-slider>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="rod_right">
                  <ul>
                    <li>
                      <div>
                        <h2 v-if="var1">{{ dates.hour }}时</h2>
                      </div>
                      <span class="percent">%</span>
                      <span>VAR 1</span>
                      <el-button size="mini" @click="btn_t" plain></el-button>
                    </li>
                    <li>
                      <div>
                        <h2 v-if="var2">{{ dates.minute }}分</h2>
                      </div>
                      <span class="percent">%</span>
                      <span>VAR 2</span>
                      <el-button size="mini" @click="btn_t" plain></el-button>
                    </li>
                    <li>
                      <div>
                        <h2 v-if="var3">{{ dates.second }}秒</h2>
                      </div>
                      <span class="percent">%</span>
                      <span>VAR 3</span>
                      <el-button size="mini" @click="btn_t" plain></el-button>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--  推杆区域end  -->
        </el-col>
        <!--  左边推杆 + 按键end  -->

        <!--  右边按键 + 旋转按钮  -->
        <el-col :span="15">
          <!-- 1~10按钮 -->
          <div class="oneten">
            <ul>
              <li>
                1
                <el-button @click="btn" value="M1" type="info" plain>
                  M1
                </el-button>
              </li>
              <li>
                2
                <el-button @click="btn" value="M2" type="info" plain>
                  M2
                </el-button>
              </li>
              <li>
                3
                <el-button @click="btn" value="M3" type="info" plain>
                  M3
                </el-button>
              </li>
              <li>
                4
                <el-button @click="btn" value="M4" type="info" plain>
                  M4
                </el-button>
              </li>
              <li>
                5
                <el-button @click="btn" value="M5" type="info" plain>
                  M5
                </el-button>
              </li>
              <li>
                6
                <el-button @click="btn" value="CUE 1" type="info" plain>
                  CUE 1
                </el-button>
              </li>
              <li>
                7
                <el-button @click="btn" value="CUE 2" type="info" plain>
                  CUE 2
                </el-button>
              </li>
              <li>
                8
                <el-button @click="btn" value="CUE 3" type="info" plain>
                  CUE 3
                </el-button>
              </li>
              <li>
                9
                <el-button @click="btn" value="CUE 4" type="info" plain>
                  CUE 4
                </el-button>
              </li>
              <li>
                10
                <el-button @click="btn" value="CUE 5" type="info" plain>
                  CUE 5
                </el-button>
              </li>
            </ul>
          </div>
          <!-- 1~10按钮end -->

          <!-- 播放按钮 -->
          <div class="play_btn">
            <ul>
              <li>
                <el-button
                  class="min"
                  @click="btn"
                  value="M MSCRL"
                  type="info"
                  plain
                >
                  <span>M</span>
                  <span>MSCRL</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="max"
                  @click="btn"
                  value="M+CUE MARK"
                  type="info"
                  plain
                >
                  <span>M+CUE</span>
                  <span>MARK</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="max"
                  @click="btn"
                  value="SEARCN"
                  type="info"
                  plain
                >
                  <span>SEARCN</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="min"
                  @click="btn"
                  value="SRT"
                  type="info"
                  plain
                >
                  <span>SRT</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="min"
                  @click="btn"
                  value="SHIFT"
                  type="info"
                  plain
                >
                  <span>SHIFT</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="min"
                  @click="btn"
                  value="CUE MSCRL"
                  type="info"
                  plain
                >
                  <span>CUE</span>
                  <span>MSCRL</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="max"
                  @click="btn"
                  value="CUE MARK"
                  type="info"
                  plain
                >
                  <span>CUE</span>
                  <span>MARK</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="max"
                  @click="btn"
                  value="STOP"
                  type="info"
                  plain
                >
                  <span>STOP</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="min"
                  @click="btn"
                  value="PLAY"
                  type="info"
                  plain
                >
                  <span>PLAY</span>
                </el-button>
              </li>
              <li>
                <el-button
                  class="min"
                  @click="btn"
                  value="REC"
                  type="info"
                  plain
                >
                  <span>REC</span>
                </el-button>
              </li>
            </ul>
          </div>
          <!-- 播放按钮end -->

          <!-- 旋转按钮 -->
          <div class="rotate_btn">
            <ul>
              <li>
                <el-button @click="btn_b" type="info" plain></el-button>
                <span>SHTL</span>
              </li>
              <li>
                <el-button @click="btn_b" type="info" plain></el-button>
                <span>JOG</span>
              </li>
              <li>
                <el-button @click="btn_b" type="info" plain></el-button>
                <span>VAR</span>
              </li>
            </ul>

            <div class="rotate">
              <div
                id="divid"
                class="testpaperImg"
                @mousedown="start($event)"
                @mouseup="stop($event)"
                @mousemove="move($event)"
                :style="{ transform: getStyle }"
              >
                <span></span>
              </div>
            </div>
          </div>
          <!-- 旋转按钮end -->
        </el-col>
        <!--  右边按键 + 旋转按钮end  -->
      </el-row>
    </div>
    <!--  按键end  -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: 40,
      text: "无",
      date: "",
      dates: [],
      canDrag: false, //是否按下鼠标
      rotateNum: 0, //旋转的角度
      show1: false,
      show2: false,
      show3: false,
      var1: false,
      var2: false,
      var3: false,
      r_led1: false,
      g_led1: false,
      r_led2: false,
      g_led2: false,
      timer: null,
      l_timer: null,
      lights: 0,
    };
  },
  methods: {
    formatTooltip(val) {
      return val + "%";
    },
    btn_b(e) {
      //获得点击元素的下一个元素
      const spans = e.currentTarget.nextElementSibling.innerHTML;
      this.text = spans;

      if (spans == "PREROLL 1") {
        this.show1 = !this.show1;
        return true;
      }
      if (spans == "PREROLL 2") {
        this.show2 = !this.show2;
        return true;
      }
      if (spans == "PREROLL 3") {
        this.show3 = !this.show3;
        return true;
      }
    },
    btn_t(e) {
      //获得点击元素的前一个元素
      const spans = e.currentTarget.previousElementSibling.innerHTML;
      this.text = spans;

      if (spans == "VAR 1") {
        this.var1 = !this.var1;
        return true;
      }
      if (spans == "VAR 2") {
        this.var2 = !this.var2;
        return true;
      }
      if (spans == "VAR 3") {
        this.var3 = !this.var3;
        return true;
      }
    },
    btn(e) {
      //是你绑定事件的元素的value值
      const spans = e.currentTarget.value;
      this.text = spans;

      if (spans == "PLAY") {
        this.start_cycle();
      }
      if (spans == "STOP") {
        this.remove_cycle();
      }
      if (spans == "REC") {
        this.lights = 0;
      }
    },
    //按下鼠标
    start(e) {
      this.canDrag = true;
    },
    //松开鼠标停止拖动
    stop(e) {
      this.canDrag = false;
    },
    //移动
    move(e) {
      if (this.canDrag == true) {
        var event = event || window.event;
        var odiv = document.getElementById("divid");

        // // 获取盒子的宽度和高度
        // const div_w = odiv.offsetWidth;
        // const div_h = odiv.offsetHeight;

        // // 获取盒子左上角坐标坐标
        // const mou_x = odiv.offsetLeft;
        // const mou_y = odiv.offsetTop;

        // // 计算盒子中心坐标
        // const div_x = mou_x + div_w/2;
        // const div_y = mou_y + div_h/2;

        //根据当前坐标和中心坐标计算角度
        const radians = Math.atan2(event.layerX - 100, event.layerY - 100);
        const p = parseInt(radians);

        const rad = parseInt(radians * (180 / Math.PI) * -1 + 180);
        this.rotateNum = rad;
      }
    },
    //定时器开始
    start_cycle() {
      // 判断是否已存在定时器，有则清除定时器
      if (this.l_timer) {
        this.r_led1 = false;
        this.g_led1 = false;
        this.r_led2 = false;
        this.g_led2 = false;
        return this.remove_cycle();
      }

      this.l_timer = setInterval(() => {
        switch (this.lights) {
          case 0:
            this.r_led1 = true;
            this.g_led1 = false;
            this.r_led2 = false;
            this.g_led2 = false;
            break;
          case 1:
            this.r_led1 = false;
            this.g_led1 = true;
            this.r_led2 = false;
            this.g_led2 = false;
            break;
          case 2:
            this.r_led1 = false;
            this.g_led1 = false;
            this.r_led2 = true;
            this.g_led2 = false;
            break;
          case 3:
            this.r_led1 = false;
            this.g_led1 = false;
            this.r_led2 = false;
            this.g_led2 = true;
            break;
        }

        if (this.lights < 3) {
          this.lights = this.lights + 1;
          return true;
        }
        this.lights = this.lights - 3;
      }, 1000);
    },
    //定时器清除
    remove_cycle() {
      clearInterval(this.l_timer);
      this.l_timer = null;
    },
  },
  mounted() {
    //创建定时器更新最新的时间
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致

    //定时器
    this.timer = setInterval(() => {
      let nowDate = new Date();

      let dates = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hour: nowDate.getHours(),
        minute: nowDate.getMinutes(),
        second: nowDate.getSeconds(),
      };
      _this.dates = dates;

      _this.date =
        dates.year +
        "-" +
        dates.month +
        "-" +
        dates.date +
        "  " +
        dates.hour +
        ":" +
        dates.minute +
        ":" +
        dates.second;
    }, 1000);
  },
  computed: {
    getStyle() {
      let getstyle = "rotate(" + this.rotateNum + "deg)";
      return getstyle;
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  line-height: 40px;
  color: red;
}

/* 显示外框 */
.according {
  background-color: antiquewhite;
  width: 800px;
  height: 300px;
  margin: 0 auto;
  border: #271f1c 40px solid;
  box-sizing: border-box;
  border-radius: 20px;
  z-index: 9999;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
/* 显示内框 */
.according_min {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: #3d3e39 40px solid;
  box-sizing: border-box;

  .time {
    display: block;
    width: 280px;
  }
  .text_value {
    display: block;
    width: 250px;
    height: 80px;
    line-height: 80px;

    margin: 0 auto;
  }
  .rod_value {
    display: block;
    width: 200px;
    float: left;
  }
  .rotate_value {
    display: block;
    float: right;
    width: 200px;
  }
}
/* 按钮区 */
.buttongroup {
  background-color: #46433e;
  width: 800px;
  height: 800px;
  margin: 360px auto;
  color: white;
  h5 {
    text-align: right;
    padding: 10px 40px 20px;
  }
}

/* 顶部7个按钮 */
.topbtn {
  width: 100%;
  height: 150px;

  h3 {
    padding-left: 20px;
    line-height: 100px;
    text-align: left;
  }

  .center {
    border-right: white solid 4px;
    height: 100px;
    ul {
      margin: 50px auto 0;
      display: inline-block;
      list-style: none;
      li {
        width: 50px;
        margin: 0 10px;
        float: left;
        button {
          height: 30px;
        }
        span {
          font-size: 10px;
          text-align: center;
        }
      }
    }
  }

  .right {
    height: 100px;
    .right_top {
      width: 90%;
      height: 40px;
      background-color: black;
      margin: 0 auto;
      div {
        height: 40px;
      }
      .right_top_l {
        height: 40px;
        border-right: white 4px solid;
        border-left: white 4px solid;
      }
    }
    .right_text {
      width: 90%;
      height: 10px;
      margin: 0 auto;
      font-size: 10px;
      div {
        span:nth-child(odd) {
          display: block;
          width: 20px;
          float: left;
        }
        span:nth-child(even) {
          display: block;
          width: 20px;
          float: right;
        }
      }
    }
    ul {
      margin: 0 auto;
      display: inline-block;
      list-style: none;
      li {
        width: 70px;
        margin: 0 4px;
        float: left;
        button {
          height: 30px;
        }
        span {
          font-size: 10px;
          text-align: center;
        }
      }
    }
  }
}
/* 顶部7个按钮end */

/* 指示灯 */
.light {
  width: 100%;
  height: 160px;
  border-top: #404040 2px solid;
  border-bottom: #404040 2px solid;

  ul {
    width: 80%;
    height: 100%;
    margin: 0 auto;

    li {
      display: block;
      width: 25%;
      height: 100%;
      list-style: none;
      float: left;

      @keyframes r_led {
        from {
          background-color: #3c1c1f;
          box-shadow: 2px 2px 5px black;
        }
        to {
          background-color: red;
          box-shadow: 0 0 10px red;
        }
      }

      @keyframes g_led {
        from {
          background-color: #354737;
          box-shadow: 2px 2px 5px black;
        }
        to {
          background-color: greenyellow;
          box-shadow: 0 0 10px greenyellow;
        }
      }

      .r_show {
        width: 20px;
        height: 20px;
        background-color: #3c1c1f;
        border-radius: 50%;
        margin: 75px auto;
        box-shadow: 2px 2px 5px black;

        .r_led {
          width: 20px;
          height: 20px;
          border-radius: 50%;

          animation: r_led 0.5s infinite alternate;
        }
      }

      .g_show {
        width: 20px;
        height: 20px;
        background-color: #354737;
        border-radius: 50%;
        margin: 75px auto;
        box-shadow: 2px 2px 5px black;

        .g_led {
          width: 20px;
          height: 20px;
          border-radius: 50%;

          animation: g_led 0.5s infinite alternate;
        }
      }
    }
  }
}
/* 指示灯end */

/* 推杆区域 */
.rod {
  width: 100%;
  height: 410px;

  .rod_left,
  .rod_right {
    width: 100%;
    height: 410px;
    .slider {
      /* 滑块 */
      margin: 20px 50px;
    }
    ul li {
      width: 100%;
      height: 110px;
      padding: 20px 0 0;
      list-style: none;
      div {
        width: 90%;
        height: 40px;
        margin: 0 auto;
        background-color: black;
      }
      span {
        display: block;
        width: 100%;
        font-size: 10px;
        text-align: center;
      }
      .percent {
        display: block;
        width: 140px;
        font-size: 10px;
        text-align: right;
      }
      button {
        height: 30px;
        margin-top: 0;
      }
    }
  }
}
/* 推杆区域end */

/* 1~10按钮 */
.oneten {
  width: 96%;
  height: 170px;
  background-color: #444348;

  ul {
    width: 100%;
    li {
      width: 20%;
      height: 80px;
      list-style: none;
      float: left;
      border-bottom: #727378 2px solid;

      button {
        width: 50px;
        height: 50px;
        text-align: left;
        margin: 20px auto;
        padding: 0;

        span {
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
}
/* 1~10按钮end */

/* 播放按钮 */
.play_btn {
  width: 100%;
  height: 160px;

  ul {
    width: 100%;

    li {
      display: block;
      width: 20%;
      height: 60px;
      padding: 20px 0 0;
      float: left;

      .min {
        width: 50px;
        height: 50px;
        padding: 0;
        font-size: 10px;
      }

      .max {
        width: 80px;
        height: 50px;
        padding: 0;
        font-size: 10px;
      }

      span {
        display: block;
        width: 100%;
      }
    }
  }
}
/* 播放按钮end */

/* 旋转按钮 */
.rotate_btn {
  width: 100%;
  height: 240px;

  ul {
    width: 100px;
    height: 100%;
    float: left;

    li {
      width: 100%;
      height: 60px;
      padding-top: 20px;
      list-style: none;

      button {
        width: 50px;
        height: 50px;
      }

      span {
        display: block;
        font-size: 10px;
        position: relative;
        left: 40px;
        top: -10px;
      }
    }
  }

  .rotate {
    width: 400px;
    height: 100%;
    line-height: 120px;
    float: left;
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 400px;

    .testpaperImg {
      width: 50%;
      height: 200px;
      margin: 20px auto;
      border-radius: 50%;
      background-color: #58585a;
      box-shadow: 0 0 10px black inset;
      border: #8c8a8b 2px solid;
      position: absolute;
      left: 100px;

      span {
        display: block;
        width: 10px;
        height: 10px;
        margin: 0 auto;
        background-color: red;
        border-radius: 50%;
        position: relative;
        top: -10px;
      }
    }
  }
}
/* 旋转按钮end */
</style>
