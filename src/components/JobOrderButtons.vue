<template>
  <div class="order">
    <p>Order by:</p>
    <button
        @click="handleChangeOrder('title')"
        :class="getButtonClass('title')"
    >
      Title
    </button>
    <button
        @click="handleChangeOrder('salary')"
        :class="getButtonClass('salary')"
    >
      Salary
    </button>
    <button
        @click="handleChangeOrder('location')"
        :class="getButtonClass('location')"
    >
      Location
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useJobStore} from '@/store/useJobStore';
import {OrderTerm} from '@/types/OrderTerm';

export default defineComponent({
  name: 'JobOrderButtons',
  setup() {
    const {handleChangeOrder, order} = useJobStore();

    const getButtonClass = (term: OrderTerm) => {
      return { 'active-button': order.value === term };
    }

    return {handleChangeOrder, getButtonClass};
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

.order p {
  font-weight: 600;
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

.active-button {
  border: 3px solid #135a31;
}
</style>