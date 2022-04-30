<template>
  <div class="catalog">
    <v-card
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
  }

}
</script>

<style scoped lang="scss">
.catalog{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(332px,1fr));
  gap: $cards-gap;
  margin-left: $cards-gap;
  width: 100%;
}


</style>