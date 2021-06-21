<template>
  <div class="task_subject">
    <header>
      <p>{{ subject.title }}</p>
    </header>
    <main>
      <ul class="options">
        <TaskOptionItem
          v-for="option in subject.options"
          :key="option.id"
          :option="option"
          :selectId="subject.selectId"
          @clickOption="onOptionSelect"
        ></TaskOptionItem>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import TaskOptionItem from "./TaskOptionItem.vue";
import Vue from "vue";
export default Vue.extend({
  props: {
    subject: {
      type: Object,
      default: null,
    },
  },
  components: {
    TaskOptionItem,
  },
  methods: {
    onOptionSelect(id: any) {
      console.log(id);
      this.$store.commit("task/changeSelected", id);
    },
  },
});
</script>

<style scoped>
.task_subject {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 40rem;
}

.options {
  list-style-type: none;
  padding: 0;
}

header {
  margin-bottom: -4rem;
}
</style>