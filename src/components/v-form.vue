<template>
  <form class="form">
    <div class="form__item">
      <label for="name">Наименование товара
        <div></div>
      </label>
      <input
          :class="v$.form.name.$error ? 'invalid_field' : '' "
          id="name" type="text" placeholder="Наименование товара" v-model="form.name">
      <span v-for="error of v$.form.name.$errors" :key ="error.$uid">
       {{ error.$message }}
      </span>
    </div>
    <div class="form__item">
      <label for="descr">Описание товара</label>
      <textarea
          id="descr" type="text" placeholder="Описание товара" v-model="form.description"></textarea>
    </div>
    <div class="form__item">
      <label for="img">Ссылка на изображение товара
      </label>
      <input
          :class="v$.form.linkToImg.$error ? 'invalid_field' : '' "
          id="img"  type="text" placeholder="Ссылка на изображение товара" v-model="form.linkToImg">
      <span v-for="error of v$.form.linkToImg.$errors" :key ="error.$uid">
       {{ error.$message }}
      </span>
    </div>
    <div class="form__item">
      <label for="price">Цена товара*</label>
      <input id="price"
             :class="v$.form.price.$error === true ? 'invalid_field' : '' "
             type="number" placeholder="Цена товара" v-model="form.price">
      <span v-if="v$.form.price.$error">Поле является обязательным</span>
    </div>
    <button v-if="v$.form.$errors.length === 0 && ( Object.keys(form).filter( key => key != 'description').every( key => form[key] ) ) " class="form_button_active" @click.prevent="addToList">Добавить товар
    </button>
    <button v-if="v$.form.$errors.length !== 0 || ( Object.keys(form).filter( key => key != 'description').some( key => !form[key] ) ) " class="form_button">Добавить товар
    </button>
  </form>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, url, helpers } from "@vuelidate/validators"

export default {
  name: "v-form",
  data() {
    return {
      v$ : useVuelidate(),
      form : {
        name : "",
        description : "",
        linkToImg : "",
        price : null
      }
    }
  },
  validations(){
    return {
      form : {
        name : { required: helpers.withMessage("Наименование товара является обязательным полем",required), $autoDirty: true },
        linkToImg : { required, url : helpers.withMessage("Введите правильный url",url), $autoDirty: true },
        price : { required, $autoDirty: true}
      }
    }
  },
  methods : {
    addToList(){
      this.$emit("addNewProduct",{ name : this.form.name, description : this.form.description, linkToImg : this.form.linkToImg, price : this.form.price})
    },

  },

}
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  max-width: 330px;
  height: 100%;
  border-radius: $borderRadiusApp;
  background-color: $color-white;
  padding: 24px;

  @media screen and (max-width: 877px) {
      &{
        max-width: 100%;
      }
  }
  .form__item {
    display: flex;
    margin-bottom: 16px;
    flex-direction: column;

    span{
      font-size: 8px;
      color: $color-lightRed;
      margin-top: 4px;
    }

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
      transition: all 200ms ease-in-out;
      border-radius: $borderRadiusApp;

      &::placeholder {
        color: $color-lowGrey;
      }
      &:focus{
        box-shadow: 0px 0px 7px 0px #a7c6ff;
      }
    }
    .invalid_field{
      //box-shadow: 0px 0px 7px 0px $color-lightRed;
      border: 1px solid $color-lightRed;
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
    color: $color-lowGrey;
    //margin-bottom: 24px;
    background-color: $backgroundButton-disabled;
  }
  .form_button_active{
    border: none;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 11px;
    border-radius: 10px;
    background-color: $backgroundButton-normal;
    color: $buttonNormal-color;
    cursor: pointer;
  }

}
</style>