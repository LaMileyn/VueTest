<template>
  <div class="header">
    <h1>Добавление товара</h1>
    <div class="header__sortBy">
      <select>
        <option value="По умолчанию">По умолчанию</option>
        <option value="От меньшего к большему">От меньшего к большему</option>
        <option value="От большего к меньшему">От большего к меньшему</option>
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
.header {
  display: flex;
  justify-content: space-between;
}
.header__sortBy select{
  padding-top: 10px;
  padding-bottom: 11px;
  border: none;
  box-shadow: $boxShadow-inputs;
  padding-left: 16px;
  padding-right: 25px;
  color: $color-lowGrey;
  border-radius: $borderRadiusApp;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: radio-container;
  appearance: none;
}
</style>