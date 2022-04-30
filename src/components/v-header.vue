<template>
  <div class="header">
    <h1>Добавление товара</h1>
    <div class="header__sortBy">
    <select>
      <option value="change">change</option>
    </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
}
</style>