<template>
  <ion-page >
    <hero-list :hero1="hero1" :hero2="hero2" />
  </ion-page>

</template>
  
<script lang="ts">
import { IonPage } from "@ionic/vue";
import HeroList from "@/components/HeroList.vue";

export default {
  components: {
    IonPage,
    HeroList,

  },

  data() {
    return {
      hero1: null,
      hero2: null,
    };
  },
  
};
</script>

<style scoped>
ion-button[slot='fixed'] {
  position: fixed;
  top: 92.2%;
  width: 98%;
}

.connectBtn {
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: white;
  font-weight: 600;
  background: linear-gradient(to right, #8be3fc, #576bff);
  box-shadow: 0 20px 30px -7px rgba(97, 118, 238, 0.5);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.connectBtn:hover {
  box-shadow: none;
  transform: translate(0px, 2.2px);
}

.connectBtn:active {
  transform: scale(0.96) translate(0px, 3.2px);
}

</style>
  