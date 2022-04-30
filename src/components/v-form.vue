<template>
  <div class="form">
    <div class="form__item">
      <input id="name" type="text" placeholder="Наименование товара">
      <label for="name">Наименование товара
        <div></div>
      </label>
    </div>
    <div class="form__item">
      <textarea id="descr" type="text" placeholder="Описание товара"></textarea>
      <label for="descr">Описание товара</label>
    </div>
    <div class="form__item">
      <input id="img" type="text" placeholder="Ссылка на изображение товара">
      <label for="img">Ссылка на изображение товара
        <div></div>
      </label>
    </div>
    <div class="form__item">
      <input id="price" type="text" placeholder="Цена товара">
      <label for="price">Цена товара*</label>
    </div>
    <button class="form_button">Добавить товар
      <div></div>
    </button>
  </div>
</template>

<script>
export default {
  name: "v-form"
}
</script>

<style scoped lang="scss">
.form {
  min-width: 330px;
  height: 440px;
  background-color: $color-white;
  padding: 24px;

  .form__item {
    display: flex;
    margin-bottom: 16px;
    flex-direction: column-reverse;


    label {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
      display: flex;

      div {
        width: 4px;
        height: 4px;
        background-color: $color-lightRed;
        border-radius: 50%;
      }
    }

    input, textarea {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 11px;
      border: none;
      box-shadow: $boxShadow-inputs;
      padding-left: 16px;
      color: $color-black;

      &::placeholder {
        color: $color-lowGrey;
      }
    }

    textarea {
      resize: none;
      padding-bottom: 83px;
    }

  }

  .form_button {
    border: none;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 11px;
    border-radius: 10px;
    cursor: pointer;
    color: $color-lowGrey;
    background-color: $backgroundButton-normal;
  }

}
</style>