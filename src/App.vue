<template>
  <div class="app">
    <header>
      <div class="title">
        <h1>Job board</h1>
      </div>
      <JobOrderButtons/>
    </header>

    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import JobList from "@/components/JobList.vue";
import JobOrderButtons from "@/components/JobOrderButtons.vue";
import {useJobStore} from "@/store/useJobStore";

export default defineComponent({
  name: 'App',
  components: {JobOrderButtons, JobList},
  setup() {
    const {jobs, order} = useJobStore();

    return {jobs, order};
  },
});
</script>

<style>
header {
  max-width: 960px;
  margin: 0 auto;
}

header .title {
  font-size: 1.4rem;
  text-align: center;
}

header p {
  font-weight: 500;
  margin: 0;
}

button {
  color: #2c2929;
  border: 3px solid #14b25c;
  background: #7fcc9f;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
