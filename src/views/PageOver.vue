<template>
  <div class="over">
    <div class="over_result">
      <div class="over_result_center">
        <img src="../assets/images/over/bg_result.png" alt="over result bg" />
        <footer>
          <p class="score">{{ score }}</p>
          <p class="score_tips">还不错，但还需要继续加油</p>
        </footer>
      </div>
    </div>

    <div class="over_share_btn">
      <a @click="clickShare"
        ><img src="../assets/images/over/btn_share.png" alt=""
      /></a>
    </div>

    <div class="over_code">
      <p>关注好未来公众号，获取答案</p>
      <img src="../assets/images/over/qrcode.png" alt="" />
    </div>

    <div class="over_share_tip" v-show="isShowShare" @click="clickShare">
      <img src="../assets/images/over/share_tip.png" alt="share tips" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("task");
export default Vue.extend({
  data() {
    return {
      isShowShare: false,
    };
  },
  computed: {
    ...mapGetters(["score"]),
  },

  methods: {
    clickShare() {
      console.log("share");
      this.isShowShare = !this.isShowShare;
    },
  },
});
</script>

<style scoped>
.over {
  height: 100%;
  background: url(../assets/images/over/bg_over.jpg) no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.over_result {
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.over_result_center {
  position: relative;
}

.over_share_btn {
  clear: both;
  flex: 1;
}

.over_code {
  flex: 3;
  text-align: center;
}

.over_share_tip {
  background: url(../assets/images/over/bg_share.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
  height: 100%;
}
.over_share_tip img {
  position: absolute;
  right: 0;
  top: 0;
}

.over_result footer {
  position: absolute;
  top: 17rem;
  left: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.over_result .score {
  color: #a51d31;
  font-size: 7rem;
}

.over_result .score_tips {
  color: #a51d31;
}

.over_result footer p {
  margin: 0;
}

.over_code p {
  color: aqua;
  font-size: 2rem;
}
</style>