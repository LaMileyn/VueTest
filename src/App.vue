<template>
  <transition name ="fade">
    <div class="success_card_action" v-if="showModalSuccess">
      <img v-bind:src="arrow" alt="hhrt">
      <span>Товар успешно добавлен!</span>
    </div>
  </transition>
  <div class="project">
    <div class="mainContainer">
      <v-header @changeSorting="sortChange" @changeCurrentSorting="currentSortTypeChange"/>
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
      currentSortType : "Standart",
      showModalSuccess : false,
      arrow,
      standartProductList: localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [
        {
          id: 1,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 167,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 2,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 3,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 555,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 4,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1300,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 5,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 7,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        }
      ],
      productList: localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [
        {
          id: 1,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 167,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 2,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 3,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 555,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 4,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1300,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
        },
        {
          id: 5,
          name: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 7,
          image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_114315835.jpeg"
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
      if (!data["description"].length) data['description'] = "Описание товара отсутствует"
      this.productList.push(new_one)
      this.standartProductList.push(new_one)
      this.sortChange(this.currentSortType)
      localStorage.setItem("productList", JSON.stringify(this.productList))
    },
    currentSortTypeChange(type){
      this.currentSortType = type
    },
    cardDelete(id) {
      this.productList = this.productList.filter(product => product.id !== id)
      this.standartProductList = this.standartProductList.filter(product => product.id !== id)
      localStorage.setItem("productList", JSON.stringify(this.productList))
    },
    sortChange(sortBy) {
      switch (sortBy) {
        case "FromBig":
          this.productList = this.productList.sort((x, y) => {
            let xPrice = Number(String(x.price).split(" ").join(""))
            let yPrice = Number(String(y.price).split(" ").join(""))
            return yPrice - xPrice
          })
          break
        case "FromSmall":
          this.productList = this.productList.sort((x, y) =>{
            let xPrice = Number(String(x.price).split(" ").join(""))
            let yPrice = Number(String(y.price).split(" ").join(""))
            return xPrice - yPrice
          } )
          break;
        case "Standart":
          console.log(this.standartProductList)
          this.productList = [...this.standartProductList]
          break;
        case "Name":
          this.productList = this.productList.sort((x, y) => {
            if( x.name < y.name ){
              return -1
            }
            if (x.name > y.name ){
              return 1
            }
            return 0
          })
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
  @media screen and (max-width: 877px){
    &{
      max-width: 100%;
    }
  }

  .contentWrapper {
    display: flex;
    margin-top: 16px;
    @media screen and (max-width: 877px){
      &{
        flex-direction: column;
      }
    }
  }
}

</style>
