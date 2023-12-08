<template>
  <ion-page>
    <ion-header class="custom-header">
      <ion-toolbar color="blue" class="custom-header">
        <!-- Título de la barra de herramientas -->
        <ion-title class="title">Marvel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Utiliza el componente 'CharacterList' pasándole la lista de personajes y configurando un evento 'character-click' -->
      <component :is="heroCardComponent"></component>
      <!-- Botón Jugar -->
      <router-link to="/battle">
      <ion-button  @click="goToBattle" slot="fixed" class="btn">
        Jugar
      </ion-button>
    </router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// Importa el componente HeroCard
import HeroCard from "@/components/HeroCard.vue";
import { IonCard, IonImg, IonCardContent, IonCardTitle, IonTitle, IonToolbar,IonPage,IonHeader,IonContent,IonButton } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonTitle,
    IonToolbar,
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
  },
  data() {
    return {
      // Configura heroCardComponent con el componente HeroCard importado
      heroCardComponent: HeroCard,
    };
  },
  methods: {
      goToBattle() {
      this.$router.push('/battle'); 
    },
  },
};
</script>

<style scoped>
/* Estilo para el encabezado personalizado */
.title {
  text-transform: uppercase;
  color: beige;
}
.custom-header {
  background-color: #00489C; /* Fondo rojo para el encabezado */
}

/* Estilos para el botón Jugar */

ion-button[slot='fixed'] {
  position: fixed;
  top: 92.2%;
  width: 98%;
  
}

.btn {
  background-image: linear-gradient(90deg,#1c1c1c,#6220fb);
}
</style>