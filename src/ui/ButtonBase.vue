<script>
export default {
  name: 'ButtonBase'
}
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String // primary | warning | danger
  },
  size: {
    type: String // sm
  }
});

const classes = computed(() => `button-base button-base_${props.variant || 'primary'} button-base_${props.size}`);
</script>

<template>
  <button
    :class="classes"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-base {
  display: inline-block;
  vertical-align: middle;
  padding: 6px 12px;
  font-size: 12px;
  color: #ffffff;
  line-height: 1.2;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  &:hover {
    background-color: #ffffff;
    text-decoration: none;
  }

  &_primary {
    border-color: $color-primary;
    background-color: $color-primary;

    &:hover {
      color: $color-primary;
    }
  }

  &_warning {
    border-color: $color-warning;
    background-color: $color-warning;

    &:hover {
      color: $color-warning;
    }
  }

  &_danger {
    border-color: $color-danger;
    background-color: $color-danger;

    &:hover {
      color: $color-danger;
    }
  }

  &_sm {
    padding: 4px 8px;
    font-size: 10px;
  }
}
</style>