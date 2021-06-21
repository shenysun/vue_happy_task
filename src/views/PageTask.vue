<template>
  <div class="pageTask">
    <CommonHang :title="curSubject.title"></CommonHang>
    <img
      class="task_icon"
      src="../assets/images/task/task_icon.png"
      alt="task icon"
    />
    <TaskSubject :subject="curSubject"></TaskSubject>
    <a class="task_next" @click="onNextClick">
      <img
        v-if="getIsLast"
        src="../assets/images/task/task_submit.png"
        alt="task next"
      />
      <img v-else src="../assets/images/task/task_next.png" alt="task submit" />
    </a>
  </div>
</template>


<script lang="ts">
import TaskSubject from "../components/task/TaskSubject.vue";
import CommonHang from "../components/CommonHang.vue";

import { createNamespacedHelpers } from "vuex";
import Vue from "vue";

const { mapGetters, mapState } = createNamespacedHelpers("task");
export default Vue.extend({
  components: {
    TaskSubject,
    CommonHang,
  },
  computed: {
    ...mapState(["index"]),
    ...mapGetters(["curSubject", "maxLvCount", "getIsLast"]),
  },
  methods: {
    onNextClick() {
      if (!this.curSubject.selectId.length) {
        return alert(
          this.getIsLast ? "空选择，无法提交" : "空选择，无法进入下一题"
        );
      }
      console.log(this.index, this.maxLvCount);

      if (this.index + 1 >= this.maxLvCount) {
        this.$router.push("over");
      }
      this.$store.commit("task/submitTask");
    },
  },
});
</script>

<style scoped>
.task_icon {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -264px;
  margin-top: -233px;
}
.task_next {
  position: absolute;
  left: 50%;
  margin-left: -87px;
  bottom: 25%;
}
</style>
