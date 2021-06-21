<template>
  <div class="common_hang">
    <img src="../assets/images/common_hang.png" alt="hang img" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title"],
});
</script>

<style scoped>
.common_hang {
  position: absolute;
  right: 8rem;
  top: 0;
}
.common_hang span {
  position: absolute;
  top: 22.5rem;
  left: 5rem;
  font-size: 1.8rem;
  color: hotpink;
}
</style>