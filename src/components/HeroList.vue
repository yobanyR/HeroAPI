<template >
  <ion-page >
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Selecciona tus héroes</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content >
        <!-- Selector de héroes 1 -->
        <ion-item>
          <ion-label>Selecciona Héroe 1:</ion-label>
          <ion-select v-model="selectedHeroes[0]" @ionChange="checkStartBattle">
            <ion-select-option v-for="hero in heroes" :key="hero.id" :value="hero">{{ hero.name }}</ion-select-option>
          </ion-select>
        </ion-item>

        <!-- Selector de héroes 2 -->
        <ion-item>
          <ion-label>Selecciona Héroe 2:</ion-label>
          <ion-select v-model="selectedHeroes[1]" @ionChange="checkStartBattle">
            <ion-select-option v-for="hero in heroes" :key="hero.id" :value="hero">{{ hero.name }}</ion-select-option>
          </ion-select>
        </ion-item>
        <button @click="startBattle" v-if="canStartBattle">
          P L A Y
          <div id="clip">
            <div id="leftTop" class="corner"></div>
            <div id="rightBottom" class="corner"></div>
            <div id="rightTop" class="corner"></div>
            <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
        </button>
        <!-- Mostrar información del ganador -->
        <div v-if="battleResult">
          <img :src="battleResult.winner.images.lg" alt="Winner Image" />
          <p>{{ battleResult.winner.name }} es el ganador</p>
        </div> 
        <router-link to="/home">
          <button class="cta connectBtn"  @click="goToHome" slot="fixed">
          <span>Regresar</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        </router-link>
      </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/vue";
import HeroService from "@/Services/HeroService";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      heroes: [] as any[], // Utilizamos 'any' para los héroes
      selectedHeroes: [null, null] as (any | null)[], // Utilizamos 'any' para los héroes seleccionados
      battleResult: null as { winner: any; winnerImage: string } | null, // Utilizamos 'any' para el ganador
    };
  },
  async created() {
    this.heroes = await HeroService.getHeroes();
  },
  computed: {
    canStartBattle() {
      return this.selectedHeroes.every(hero => hero !== null);
    },
  },
  methods: {
    checkStartBattle() {
      // Verifica si se pueden iniciar la batalla cada vez que cambia un héroe seleccionado
      this.$forceUpdate();
    },
    startBattle() {
      // Seleccionar al ganador al azar
      const winnerIndex = Math.floor(Math.random() * 2); // 0 o 1
      const winner = this.selectedHeroes[winnerIndex];

      // Almacenar información del ganador
      this.battleResult = {
        winner,
        winnerImage: winner.images.lg,
      };


    },
    goToHome() {
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
button {
  position: relative;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: #ddebf0;
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

#clip {
  --color: #2761c3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
}

button:hover #rightArrow {
  background-color: #27c39f;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
  background-color: #27c39f;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -1.98em;
  left: 91%;
}

#leftTop {
  top: -1.96em;
  left: -3.0em;
}

#leftBottom {
  top: 2.10em;
  left: -2.15em;
}

#rightBottom {
  top: 45%;
  left: 88%;
}

button:hover #leftTop {
  animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
  animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
  animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
  animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}
.character-container {
  position: relative;
  background-image: url('../asent/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  /* Ajusta la altura al 100% del viewport */
  margin: 0;
  /* Elimina el margen predeterminado del cuerpo del documento */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
