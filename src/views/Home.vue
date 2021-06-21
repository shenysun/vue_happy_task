<template>
  <div class="home">
    <CommonHang title="第一周"></CommonHang>
    <main class="home_main">
      <img
        class="title"
        src="../assets/images/home/home_title.png"
        alt="title img"
      />
      <router-link class="link" to="task"
        ><img src="../assets/images/home/home_start.png" alt="start button"
      /></router-link>
    </main>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import CommonHang from "../components/CommonHang.vue";
export default Vue.extend({
  components: {
    CommonHang,
  },
});
</script>

<style scoped>
.home_main .title {
  position: absolute;
  left: 48%;
  top: 50%;
  margin-top: -263px;
  margin-left: -213px;
}
.home_main .link img {
  position: absolute;
  left: 50%;
  bottom: 25%;
  margin-top: -42px;
  margin-left: -87px;
}
</style>
