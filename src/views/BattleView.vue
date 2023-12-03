<template>
    <ion-page>

        <ion-header class="custom-header">
            <ion-toolbar color="danger">
                <ion-title>Marvel</ion-title>
                <ion-button @click="startBattle" v-if="showStartButton">Jugar</ion-button>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div v-if="showSelection" class="selection-container">
                <div @click="selectHero(hero1)" class="selection-point" v-if="hero1">
                    <img :src="hero1Image" alt="Hero 1" />
                    <p>{{ hero1.name }}</p>
                </div>
                <div @click="selectHero(hero2)" class="selection-point" v-if="hero2">
                    <img :src="hero2Image" alt="Hero 2" />
                    <p>{{ hero2.name }}</p>
                </div>
            </div>

            <div v-if="battleResult" class="battle-result">
                <p>{{ battleResult.winner.name }} es el ganador con estadísticas superiores.</p>
                <img :src="battleResult.winnerImage" alt="Winner" />
            </div>
            <video autoplay loop muted class="video-background">
                <source src="../asent/174082 (1080p).mp4" type="video/mp4" />
            </video>        
        </ion-content>

    </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent } from "@ionic/vue";
import HeroService from "@/Services/HeroService";

interface Hero {
    id: number;
    name: string;
    slug: string;
    images: { lg: string };
    // ... otras propiedades de estadísticas
}

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButton,
        IonContent,
    },
    data() {
        return {
            hero1: null as Hero | null,
            hero2: null as Hero | null,
            showSelection: true,
            showStartButton: true,
            battleResult: null as { winner: Hero; winnerImage: string } | null,
        };
    },

    async created() {
        const heroesData = await HeroService.getHeroes();
        // Asigna los héroes para la batalla (puedes ajustar la lógica según sea necesario)
        this.hero1 = heroesData[0];
        this.hero2 = heroesData[1];
    },
    computed: {
        hero1Image() {
            return this.hero1?.images.lg || "";
        },
        hero2Image() {
            return this.hero2?.images.lg || "";
        },
    },
    methods: {
        selectHero(hero: Hero) {
            this.showSelection = false;
            this.showStartButton = false;
            // Aquí puedes realizar la lógica para la batalla y determinar el ganador
            const winner = hero; // Por ahora, asumimos que el héroe seleccionado es el ganador
            this.battleResult = {
                winner,
                winnerImage: winner.images.lg,
            };
        },
        startBattle() {
            // Lógica para comenzar la batalla (si es necesario)
        },
    },
};
</script>
  
<style scoped>
/* Estilo para el fondo de video */
.video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* Coloca el video detrás de otros elementos */
}

/* Estilo para los puntos de selección */
.selection-container {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

.selection-point {
    cursor: pointer;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #000;
    text-align: center;
}

.selection-point img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.battle-result {
    text-align: center;
    margin-top: 50px;
}

.battle-result img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}
</style>
  