<script>
export default {
  name: 'ButtonClose'
}
</script>

<template>
  <button class="button-close">x</button>
</template>

<style lang="scss" scoped>
.button-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid $color-danger;
  background-color: $color-danger;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  &:hover {
    color: $color-danger;
    background-color: #ffffff;
  }
}
</style>