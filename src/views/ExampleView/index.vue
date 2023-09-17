<template>
  <h1 class="text-red-500 text-2xl bg-black" ref="title" v-motion-fade>
    Home
  </h1>
  <h2 v-motion="motionShake" class="w-min">
    FrontEnd
  </h2>

  <button @click="toogleModal('open')">Abir Modal</button>
  <ModalExample :isActive="state.isActive" @closeModalClick="toogleModal('close')" />

  <SliderExample />
</template>

<script>
import { motionShake } from '../../motions';
import ModalExample from '../../components/ModalExample/index.vue'
import SliderExample from '../../components/SliderExample/index.vue'

import { reactive } from 'vue';

export default {
  components: {
    ModalExample,
    SliderExample
  },
  setup() {
    const state = reactive({
      isActive: false
    })

    function toogleModal(status) {
      if( status === 'open') state.isActive = true
      if( status === 'close') state.isActive = false
    }

    return {
      state,
      toogleModal,
      motionShake,
    };
  },
};
</script>
