<template>
  <div class="job-list">
    <transition-group
        name="list"
        tag="ul"
    >
      <li
          v-for="job in orderedJobs"
          :key="job.id"
      >
        <h2>{{ job.title }} in {{ job.location }}</h2>

        <div class="salary">
          <p>Salary: {{ job.salary }}$</p>
        </div>

        <div class="description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A alias aliquam architecto at debitis ea excepturi fuga fugit laudantium libero minima nam nostrum,
            numquam officia pariatur porro, quia quod vero.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
import Job from "@/types/Job";
import {OrderTerm} from "@/types/OrderTerm";

export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true
    }
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      })
    });

    return {orderedJobs};
  }
});
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}

.job-list ul {
  padding: 0;
}

.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  transition: all .5s ease-in-out;
}

.job-list li:hover {
  transform: scale(1.05);
}

.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}

.salary {
  display: flex;
}

.description p {
  color: #626262;
}

.salary p {
  color: #14b25c;
  font-weight: bold;
  margin: 10px 4px;
}
</style>