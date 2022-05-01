<template>
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

export default {
  name: 'App',
  components: {
    VHeader, VForm, VCatalog
  },
  data() {
    return {
      standartProductList : localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [
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
          this.productList = [...this.standartProductList ]
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

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
