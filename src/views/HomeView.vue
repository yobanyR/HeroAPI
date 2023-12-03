<template>
  <ion-page>
    <ion-header class="custom-header">
      <ion-toolbar color="danger">
        <!-- Título de la barra de herramientas -->
        <ion-title>Marvel</ion-title>
        <!-- Botón Jugar -->
        <router-link to="/battle" class="play-button">Jugar</router-link>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Utiliza el componente 'CharacterList' pasándole la lista de personajes y configurando un evento 'character-click' -->
      <component :is="heroCardComponent"></component>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// Importa el componente HeroCard
import HeroCard from "@/components/HeroCard.vue";
import { IonCard, IonImg, IonCardContent, IonCardTitle, IonTitle, IonToolbar,IonPage,IonHeader,IonContent } from "@ionic/vue";

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
  },
  data() {
    return {
      // Configura heroCardComponent con el componente HeroCard importado
      heroCardComponent: HeroCard,
    };
  },
};
</script>

<style scoped>
/* Estilo para el encabezado personalizado */
.custom-header {
  background-color: red; /* Fondo rojo para el encabezado */
}

/* Estilos para el botón Jugar */
.play-button {
  color: #fff;
  text-decoration: none;
  margin-left: auto; /* Mueve el botón hacia la derecha */
  padding: 10px;
}
</style>
