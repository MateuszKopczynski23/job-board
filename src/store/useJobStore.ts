import {ref} from "vue";
import Job from "@/types/Job";
import {OrderTerm} from "@/types/OrderTerm";
import {createGlobalState} from "@vueuse/core";

export const useJobStore = createGlobalState(() => {
  const jobs = ref<Job[]>([
    {
      id: getRandomId(),
      title: 'Farm worker',
      location: 'Ohio',
      salary: 3000
    },
    {
      id: getRandomId(),
      title: 'Prison guard',
      location: 'Miami',
      salary: 5000
    },
    {
      id: getRandomId(),
      title: 'Fisherman',
      location: 'Idaho',
      salary: 2000
    },
  ]);

  const order = ref<OrderTerm>('title');

  function getRandomId(): number | string {
    return Math.floor(Math.random() * 1000);
  }

  const handleChangeOrder = (term: OrderTerm) => {
    order.value = term;
  }

  return {
    jobs,
    order,
    handleChangeOrder,
  };
});