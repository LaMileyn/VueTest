<template>
  <div class="catalog" v-if="products.length === 0">
    <h2 class="catalog__no-items">Товаров пока нет........</h2>
  </div>
  <transition-group name ="list" class="catalog" v-if="products.length > 0" tag="div">
    <v-card
        @deletion = "deletionCard"
        v-for="product in products" :key="product.id" :productCurr="product" />
  </transition-group>
</template>

<script>
import spinner from './../assets/spinner.gif'
import VCard from "@/components/v-card";
export default {
  name: "v-catalog",
  components : {
    VCard
  },
  data(){
    return{
      spinner
    }
  },
  props : {
    products : Array
  },
  methods :{
    deletionCard(data){
      this.$emit('delet',data)
    }
  }

}
</script>

<style scoped lang="scss">

.list-enter-active{
  animation: started .6s;
}
.list-leave-active{
  animation: ended .6s;
}
@keyframes started {
  0%{
    opacity: 0;
    transform: translateX(-100px);
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

.catalog{
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(283px,1fr));
  gap: $cards-gap;
  margin-left: $cards-gap;
  width: 100%;

  @media screen and (max-width: 1228px){
      &{
        grid-template-columns: repeat(auto-fill,minmax(248px,1fr));
      }
  }
  @media screen and (max-width: 877px){
    &{
      margin-left: 0;
      margin-top: 50px;
    }
  }

  .catalog__no-items{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
  }
}


</style>