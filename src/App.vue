<script setup>
import { ref } from 'vue';
import FoldersTree from '@/components/FoldersTree.vue';
import items from '@/assets/data/items';

const isShowFolders = ref(false);
const selectedFolderId = ref(null);

const toggleFolders = value => isShowFolders.value = value;
const selectFolder = id => selectedFolderId.value = id;
</script>

<template>
  <p v-if="selectedFolderId">Selected folder id: <strong>{{ selectedFolderId }}</strong></p>

  <ButtonBase
    @click="toggleFolders(true)"
  >Открыть</ButtonBase>

  <FoldersTree
    :items="items"
    :isShow="isShowFolders"
    title="Folders tree"
    @hide="toggleFolders(false)"
    @select="selectFolder"
  />
</template>
