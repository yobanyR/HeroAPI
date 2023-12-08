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
      <button @click="goToHome" class="cta">
        <span>Regresar</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </ion-card>
  </ion-content>
</template>

<script lang="ts">
import HeroService from '@/Services/HeroService';
import { IonCard, IonImg, IonCardContent, IonCardTitle, IonContent, IonLabel, } from "@ionic/vue";


interface Hero {
  id: number;
  name: string;
  slug: string;
  images: { md: string };
  appearance: { gender: string; race: string };
  work: { occupation: string };
  biography: { placeOfBirth: string };
}

export default {
  components: {
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonContent,
    IonLabel,
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
.cta {
 position: relative;
 margin: auto;
 padding: 12px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.cta:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #b1dae7;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.cta span {
 position: relative;
 font-family: "Ubuntu", sans-serif;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: #234567;
}

.cta svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.cta:hover:before {
 width: 100%;
 background: #b1dae7;
}

.cta:hover svg {
 transform: translateX(0);
}

.cta:active {
 transform: scale(0.95);
}
</style>
