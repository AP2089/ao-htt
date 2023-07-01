<script setup>
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

const selectFolder = id => {
  emits('select', id);
  emits('hide');
}
</script>

<template>
  <Modal
    :isShow="isShow"
    @hide="$emit('hide')"
  >
    <h2 v-if="title">{{ title }}</h2>

    <Tree
      :items="items"
      :hideGuideLines="true"
      class="tree"
    >
      <template v-slot:item-prepend-icon="treeViewItem">
        <img src="@/assets/images/icons/folder.svg" alt="folder" class="tree__icon" />
      </template>

      <template v-slot:item-prepend="treeViewItem">
        <ButtonBase
          size="sm"
          class="tree__btn"
          @click="selectFolder(treeViewItem.id)"
        >Ok</ButtonBase>
      </template>
    </Tree>
  </Modal>
</template>

<style lang="scss" scoped>
.tree {
  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  &__btn {
    order: 3;
    margin-left: 5px;
  }

  :deep(.pointer) {
    cursor: default;
  }

  :deep(.chevron-right) {
    cursor: pointer;
  }
}
</style>