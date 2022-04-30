<template>
  <div class="project">
    <div class="mainContainer">
      <v-header />
      <div class="contentWrapper">
        <v-form />
        <v-catalog />
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
    VHeader,VForm,VCatalog
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

  .contentWrapper{
    display: flex;
    margin-top: 16px;
  }
}

</style>
