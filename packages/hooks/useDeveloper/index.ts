import { ref } from 'vue';

export function useDeveloper() {
  const num = ref<number>(0);
  return { num };
}
