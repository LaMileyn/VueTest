<template>
  <div class="catalog__card">
    <div class="card__delete"><img v-bind:src="image" alt=""></div>
    <div class="card__image">
      <img src="https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album" alt="">
    </div>
    <div class="card__description">
      <h2>Наименование товара</h2>
      <p>Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
        несколько строк</p>
    </div>
    <div class="card__price">
      <span>10 000руб.</span>
    </div>
  </div>
</template>

<script>
import image from './../assets/Vector.png'
export default {
  name: "v-card",
  data (){
    return {
      image
    }
  }
}
</script>

<style scoped lang="scss">
.catalog__card{
  height: 423px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $color-white;
  border-radius: $borderRadiusApp;
  .card__delete{
    position: absolute;
    top: -8px;
    right: -8px;
    height: 32px;
    width: 32px;
    border-radius: 10px;
    background-color: $color-lightRed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover{
    cursor: pointer;
  }

  .card__image{
    height: 200px;
    width: 100%;
    img{
      border-radius: $borderRadiusApp;
      width: 100%;
      height: 100%;
    }
  }

  .card__description{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    padding: 16px 16px 32px 16px;
  }

  .card__price{
    padding-bottom: 24px;
    padding-left: 16px;

    span{
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }

}

//.catalog__card:nth-child(3n + 1){
//  margin-left: 0;
//}

</style>