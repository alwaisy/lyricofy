import { reactive } from 'vue';

export const state = reactive({
  data: []
});

export const updateState = (res: any) => {
  state.data = res;
};
