<template>
  <div class="heroes-container">
    <ion-card v-for="hero in herofull.heroes" :key="hero.id" :href="'/hero-details/' + hero.id" class="hero-card">
      <div class="hero-content">
        <ion-img :src="heroImage(hero)" alt="Hero Image" class="hero-image"></ion-img>
        <ion-card-content class="hero-details">
          <ion-card-title class="hero-name">{{ hero.name }}</ion-card-title>
        </ion-card-content>
      </div>
    </ion-card>
  </div>
</template>
<script lang="ts">
import { IonCard, IonImg, IonCardContent, IonCardTitle } from "@ionic/vue";
import HeroService from "@/Services/HeroService";

interface Hero {
  id: number;
  name: string;
  slug: string;
  images: { lg: string };
  appearance: { gender: string; race: string };
  work: { occupation: string };
}

export default {
  name: "HeroCard",
  components: {
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle
  },

  data() {
    return {
      herofull: {
        heroes: [] as Hero[],
      },
    };
  },
  async created() {
    const heroesData = await HeroService.getHeroes();
    this.herofull.heroes = heroesData || [];
  },
  methods: {
    heroImage(hero: Hero) {
      return hero.images.lg;
    },
  },
};
</script>

<style scoped>
.heroes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hero-card {
  background-color: #000;
  width: 40%;
  margin-bottom: 1px;
}

.hero-content {
  position: relative;
  display: flex;
  align-items: flex-end; /* Alinear el contenido en la parte inferior */
  flex-direction: column;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.hero-details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
}

.hero-name {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
  padding: 6px; /* Añade relleno según sea necesario */
}

</style>