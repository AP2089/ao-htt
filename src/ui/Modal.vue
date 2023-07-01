<script>
export default {
  name: 'Modal'
}
</script>

<script setup>
defineProps({
  isShow: {
    type: Boolean
  }
});

const emits = defineEmits([
  'hide'
]);

const hide = () => {
  emits('hide');
}
</script>

<template>
  <Transition name="modal">
    <div
      class="modal"
      v-if="isShow"
      @click="hide"
    >
      <div
        class="modal__wrap"
        @click.stop
      >
        <ButtonClose
          class="modal__btn-close"
          @click="hide"
        >x</ButtonClose>

        <slot />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  padding: 40px 15px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: rgba(0,0,0,.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__wrap {
    max-width: 400px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 20px 15px;
    position: relative;
    z-index: 1;
  }

  &__btn-close {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
  }
}

.modal-enter-active,
.modal-leave-active {
  opacity: 1;
  transition: opacity .5s ease 0s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>