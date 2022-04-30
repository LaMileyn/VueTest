<template>
  <div class="catalog">
    <v-card />
    <v-card />
    <v-card />
    <v-card />
    <v-card />
  </div>
</template>

<script>
import VCard from "@/components/v-card";
export default {
  name: "v-catalog",
  components : {
    VCard
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