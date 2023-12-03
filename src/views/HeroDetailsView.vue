<template>
  <ion-content>
    <ion-card v-if="hero">
      <ion-img v-if="hero.images" :src="hero.images.md" alt="Hero Image" class="hero-image"></ion-img>
      <ion-card-content>
        <ion-card-title>{{ hero.name }}</ion-card-title>
        <ion-label v-if="hero.appearance">{{ hero.appearance.gender }}, {{ hero.appearance.race }}</ion-label>
        <ion-label v-if="hero.work">{{ hero.work.occupation }}</ion-label>
        <ion-label v-if="hero.biography">{{ hero.biography.placeOfBirth }}</ion-label>
      </ion-card-content>
      <ion-button @click="goToHome">Regresar</ion-button>
    </ion-card>
  </ion-content>
</template>

<script lang="ts">
import HeroService from '@/Services/HeroService';
import { IonCard, IonImg, IonCardContent, IonCardTitle,IonContent, IonLabel, IonButton } from "@ionic/vue";


interface Hero {
  id: number;
  name: string;
  slug: string;
  images: { md: string };
  appearance: { gender: string; race: string };
  work: { occupation: string };
  biography: { placeOfBirth: string };
  // Agrega más propiedades según sea necesario
}

export default {
  components: {
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonContent,
    IonLabel,
    IonButton,
  },
  data() {
    return {
      hero: {} as Hero,
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/home'); // Reemplaza '/home' con la ruta de inicio que desees
    },
  },
  async created() {
    const heroID = this.$route.params.id;
    this.hero = await HeroService.getHeroe(heroID);
  },
};
</script>

<style scoped>
.hero-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
