<template>
  <input class="input" type="text">
</template>

<script>
export default {
  name: "v-form-input",
}
</script>

<style scoped lang="scss">

.input{
  border: none;
  background: $color-white;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 16px;
  width: 100%;
  color : $color-black;
  &::placeholder{
    color: $color-lowGrey;
  }
}

</style>