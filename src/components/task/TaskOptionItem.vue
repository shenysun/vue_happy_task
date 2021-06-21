<template>
  <li class="option_item" @click="clickOption">
    <span
      class="option_id"
      :class="selectId.indexOf(option.id) == -1 ? '' : 'choosed'"
      >{{ option.id }}</span
    >
    <span class="option_desc">{{ option.desc }}</span>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["option", "selectId"],
  methods: {
    clickOption() {
      this.$emit("clickOption", this.option.id);
    },
  },
});
</script>

<style scoped>
.option_item {
  margin-top: 2rem;
}

.option_item .option_id {
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
  line-height: 3.5rem;
  width: 3.5rem;
  height: 3.5rem;

  margin-right: 2rem;
}

.option_item .choosed {
  background-color: #ffd400;
  color: #575757;
  border-color: #ffd400;
}

span {
  display: inline-block;
}
</style>