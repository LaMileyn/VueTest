<template>
  <div class="catalog" v-if="products.length === 0">
    <h2 class="catalog__no-items">Товаров пока нет........</h2>
  </div>
  <div class="catalog" v-if="products.length > 0">
    <v-card
        @deletion = "deletionCard"
        v-for="product in products" :key="product.id" :productCurr="product" />

  </div>
</template>

<script>
import VCard from "@/components/v-card";
export default {
  name: "v-catalog",
  components : {
    VCard
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
.catalog{
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(332px,1fr));
  gap: $cards-gap;
  margin-left: $cards-gap;
  width: 100%;
  .catalog__no-items{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
  }
}


</style>