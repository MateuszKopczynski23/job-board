<template>
  <div class="order">
    <p>Order by:</p>
    <button @click="handleChangeOrder('title')">Title</button>
    <button @click="handleChangeOrder('salary')">Salary</button>
    <button @click="handleChangeOrder('location')">Location</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {useJobStore} from '@/store/useJobStore';

export default defineComponent({
  name: 'JobOrderButtons',
  setup() {
    const {handleChangeOrder} = useJobStore();

    return {handleChangeOrder};
  },
});
</script>

<style scoped>
.order {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 40px auto;
}
</style>