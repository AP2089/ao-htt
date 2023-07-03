<script setup>
import { ref } from 'vue';
import Tree from 'vue3-tree-vue';
import 'vue3-tree-vue/dist/style.css';

defineProps({
  items: {
    type: Array,
    required: true
  },
  isShow: {
    type: Boolean,
    required: true
  },
  title: {
    type: String
  }
});

const emits = defineEmits([
  'select',
  'hide'
]);

const selectedItem = ref({});

const selectFolder = () => {
  const id = selectedItem.value.id;

  emits('select', id ? id : null);
  emits('hide');
}
</script>

<template>
  <Modal
    :isShow="isShow"
    @hide="$emit('hide')"
    class="folders-tree"
  >
    <h2 v-if="title">{{ title }}</h2>

    <Tree
      :items="items"
      v-model:selectedItem="selectedItem"
      class="folders-tree__list"
    >
      <template v-slot:item-prepend-icon="treeViewItem">
        <img src="@/assets/images/icons/folder.svg" alt="folder" class="folders-tree__icon" />
      </template>

    </Tree>

    <div class="folders-tree__foot">
      <ButtonBase
        class="folders-tree__btn"
        @click="selectFolder"
      >Ok</ButtonBase>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.folders-tree {
  &__list {
    margin-bottom: 15px;
  }
  
  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  &__btn {
    min-width: 80px;
  }
}

:deep(.selected-tree-item) {
  background-color: $color-warning;
}
</style>