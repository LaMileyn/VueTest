<template>
  <div class="header">
    <h1>Добавление товара</h1>
    <div class="header__sortBy">
      <!--      <div></div>-->
      <div class="select">
        <select @change="onChange($event)"  v-model="sortBy">
          <option value="Standart" selected ="selected">По умолчанию</option>
          <option value="FromSmall">От меньшего к большему</option>
          <option value="FromBig">От большего к меньшему</option>
          <option value="Name">По наименованию</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "v-header",
  data(){
    return {
      sortBy : "Standart"
    }
  },
  methods : {
    onChange(event){
      this.$emit("changeSorting",event.target.value)
    }
  }

}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  @media screen and ( max-width: 580px)  {
    flex-direction: column;
    gap: 1rem;
  }
}

.header__sortBy select {
  padding-top: 10px;
  min-width: 250px;
  position: relative;
  cursor: pointer;
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
.select{
  position: relative;
  display: inline-block;

  &::after{
    content: url('./../assets/strelka.png');
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    right: 8px;
    top: 10px;
    z-index: 1;
    text-align: center;
    width: 10%;
    height: 100%;
    pointer-events: none;
  }
}

</style>