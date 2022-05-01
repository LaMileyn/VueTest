<template>
  <form class="form">
    <div class="form__item">
      <label for="name">Наименование товара
        <div></div>
      </label>
      <input

          id="name" type="text" placeholder="Наименование товара" v-model="name">
      <span>Поле является обязательным</span>
    </div>
    <div class="form__item">
      <label for="descr">Описание товара</label>
      <textarea
          id="descr" type="text" placeholder="Описание товара" v-model="description"></textarea>
      <span>Поле является обязательным</span>
    </div>
    <div class="form__item">
      <label for="img">Ссылка на изображение товара
      </label>
      <input

          id="img"  type="text" placeholder="Ссылка на изображение товара" v-model="linkToImg">
      <span>Поле является обязательным</span>
    </div>
<!--    :class="$v.price.$error ? 'invalid_field' : '' "-->
    <div class="form__item">
      <label for="price">Цена товара*</label>
      <input id="price"  type="number" placeholder="Цена товара" v-model="price">
      <span>Поле является обязательным</span>
    </div>
    <button class="form_button" @click.prevent="addToList">Добавить товар
    </button>
  </form>
</template>

<script>


// import { validationMixin } from 'vuelidate'
// import { required } from 'vuelidate/lib/validators'

export default {
  name: "v-form",
  // mixins: [validationMixin],
  data() {
    return {
        name : "",
        description : "",
        linkToImg : "",
        price : null
    }
  },
  // validations: {
  //     name : {
  //       required
  //     },
  //     price : {
  //       required
  //     },
  //     linkToImg: {
  //       required
  //     }
  // },
  methods : {
    addToList(){
      this.$emit("addNewProduct",{ name : this.name, description : this.description, linkToImg : this.linkToImg, price : this.price})
    },
    // submit(){
    //     this.$v.$touch()
    // }
    // checkForm(){
    //   this.$v.form.$touch()
    //   if (!this.$v.form.$error){
    //     console.log("ВАлидация прошла успешно")
    //   }
    // }
  },

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
    cursor: pointer;
    color: $color-lowGrey;
    background-color: $backgroundButton-normal;
  }

}
</style>