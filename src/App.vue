<template>
  <transition name ="fade">
    <div class="success_card_action" v-if="showModalSuccess">
      <img v-bind:src="arrow" alt="hhrt">
      <span>Товар успешно добавлен!</span>
    </div>
  </transition>
  <div class="project">
    <div class="mainContainer">
      <v-header @changeSorting="sortChange"/>
      <div class="contentWrapper">
        <v-form @addNewProduct="addNewProduct"/>
        <v-catalog :products="this.productList" @delet="cardDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from "@/components/v-header";
import VForm from "@/components/v-form";
import VCatalog from "@/components/v-catalog";
import arrow from './assets/check.png'

export default {
  name: 'App',
  components: {
    VHeader, VForm, VCatalog
  },
  data() {
    return {
      showModalSuccess : false,
      arrow,
      standartProductList: localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [
        {
          id: 1,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 167,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 2,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 3,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 555,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 4,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1300,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 5,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 7,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        }
      ],
      productList: localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [
        {
          id: 1,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 167,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 2,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 3,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 555,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 4,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1300,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        },
        {
          id: 5,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 7,
          image: "https://sun1.is74.userapi.com/s/v1/ig2/kwtXwU8sT2NGzs2mJE1TTmnViY2a0ULl_F58QNB9bGCCljs_EfIgKfI1ScBLADJnJjPeNwL0rGkev0AGICfOYGxO.jpg?size=373x223&quality=96&type=album"
        }
      ]
    }
  },
  methods: {
    addNewProduct(data) {
      this.showModalSuccess = true
      setTimeout( () => this.showModalSuccess = false,2000)
      let new_one = data
      data["id"] = new Date().getSeconds() * Math.random()
      this.productList.push(new_one)
      localStorage.setItem("productList", JSON.stringify(this.productList))
    },
    cardDelete(id) {
      this.productList = this.productList.filter(product => product.id !== id)
      localStorage.setItem("productList", JSON.stringify(this.productList))
    },
    sortChange(sortBy) {
      switch (sortBy) {
        case "FromBig":
          this.productList = this.productList.sort((x, y) => y.price - x.price)
          break
        case "FromSmall":
          this.productList = this.productList.sort((x, y) => x.price - y.price)
          break;
        case "Standart":
          console.log(this.productList == this.standartProductList)
          this.productList = [...this.standartProductList]
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.fade-enter-active{
  animation: started .6s;
}
.fade-leave-active{
  animation: ended .6s;
}
@keyframes started {
  0%{
    opacity: 0;
    transform: translateX(100px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes ended {
  0%{
    opacity: 1;
    transform: translateX(0);
  }
  100%{
    opacity: 0;
    transform: translateX(100px);
  }
}

.success_card_action {
  position: fixed;
  bottom: 1.5rem;
  z-index: 999;
  right: 1.5rem;
  border-radius: $borderRadiusApp;
  background-color: #dbdae0;
  padding: 8px 25px;
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
}

.project {
  padding-top: 5rem;
  min-height: 100vh;
}

.mainContainer {
  padding: 32px;
  margin: 0 auto;
  width: 1440px;
  max-width: 90%;

  .contentWrapper {
    display: flex;
    margin-top: 16px;
  }
}

</style>
