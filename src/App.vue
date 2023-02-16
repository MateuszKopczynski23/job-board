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
</style>
