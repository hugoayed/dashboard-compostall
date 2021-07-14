<template>
  <main>
    <Sidebar />
    <div class="content">
      <div class="top-bar pt-3">
        <div class="searchbar text-end me-4">
          <input type="search" class="px-3 py-2" placeholder="Recherche" />
          <button class="btn px-3 py-2" type="button">
            <img src="@/assets/img/search.png" alt="Rechercher" />
          </button>
          <img
            src="@/assets/img/bell.png"
            alt="Cloche de notifications"
            class="mx-3"
          />
          <img src="@/assets/img/avatar.png" alt="Avatar" class="mx-3" />
        </div>
      </div>

      <div class="container-fluid mt-5 text-start">
        <div class="row">
          <div class="col-12 col-xl-4 mt-4 mt-xl-0">
            <div class="card-chart h-100 p-4">
              <h2 class="text-start">Déchets</h2>
              <div class="row">
                <div class="col-8">
                  <p class="text-start">Quota hebdomadaire</p>
                </div>
                <div class="col">
                  <p class="text-center card-green-number">58%</p>
                </div>
              </div>
              <small>Statistiques</small>
              <Dechets />
            </div>
          </div>
          <div class="col-12 col-xl-4 mt-4 mt-xl-0">
            <div class="card-chart h-100 p-4">
              <h2 class="text-start">Argent économisé</h2>
              <div class="row mb-4">
                <div class="col-8">
                  <p class="text-start">Économie sur les déchets</p>
                </div>
                <div class="col-4">
                  <p class="text-center card-green-number">+ 150€</p>
                </div>
              </div>
              <Argent />
            </div>
          </div>
          <div class="col-12 col-xl-4 mt-4 mt-xl-0">
            <div class="card-chart h-100 p-4">
              <h2 class="text-start">Taux de CO<sub>2</sub></h2>
              <div class="row mb-4">
                <div class="col-8">
                  <p class="text-start">Économie d’énergie</p>
                </div>
                <div class="col">
                  <p class="text-center card-green-number">75 Kg</p>
                </div>
              </div>
              <CO2 />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-12 col-xl-6">
            <router-link to="/calendar">
              <div class="card-chart h-100 p-4">
                <h2 class="text-start">Calendrier</h2>
                <img
                  src="@/assets/img/error_page_illustration_under_construction.jpg"
                  alt="Travaux"
                  class="text-center coming-soon"
                />
                <h3 class="text-center mt-5">Fonctionnalité à venir</h3>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-12 col-xl-6 mt-4 mt-xl-0">
            <div class="card-chart h-100 p-4">
              <h2 class="text-start">Succès</h2>
              <div class="progress">
                <div class="progress-bar" style="width: 75%">
                  <span class="text-start ms-2">
                    <img
                      src="@/assets/img/success.png"
                      alt="Trophée"
                      class="mx-2"
                    />
                    Déchets compostés en kg</span
                  >
                </div>
              </div>
              <div class="progress my-4">
                <div class="progress-bar" style="width: 58%">
                  <span class="text-start ms-2">
                    <img
                      src="@/assets/img/success.png"
                      alt="Trophée"
                      class="mx-2"
                    />Ramassage des déchets</span
                  >
                </div>
              </div>
              <div class="progress">
                <div class="progress-bar" style="width: 100%">
                  <span class="text-start ms-2">
                    <img
                      src="@/assets/img/success.png"
                      alt="Trophée"
                      class="mx-2"
                    />Fruits cultivés
                  </span>
                </div>
              </div>
              <p class="mt-4">
                Félicitations ! Nous avons cultivé 10 fruits grâce à vous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Dechets from "@/components/Charts/Dechets.vue";
import Argent from "@/components/Charts/Argent.vue";
import CO2 from "@/components/Charts/CO2.vue";

export default {
  components: {
    Sidebar,
    Dechets,
    Argent,
    CO2,
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style>
input:focus {
  outline: none;
}

a {
    text-decoration: none;
}

.container-fluid {
  padding: 0 2em 1.5em 7.8em;
}

.searchbar input {
  background-color: #ececec;
  border: none;
  border-radius: 5px;
}

.searchbar button {
  margin-top: -1px;
}

.input-group button {
  border: none;
}

.card-chart {
  border-radius: 15px;
  box-shadow: 10px 15px 30px 0px rgba(0, 0, 0, 0.39);
  color: black;
  background-color: white;
}

.card-chart h2 {
  font-weight: 600;
}

.card-green-number {
  color: #3de279;
}

.coming-soon {
  /* width: 20%; */
  display: flex;
  margin: 0 auto;
}

.progress {
  font-size: 1.5em;
  height: 2.5em;
  border-radius: 15px;
  border: 2px solid #96e6b3;
}

.progress span {
  color: #96e6b3;
}

.progress-bar {
  background-color: #edfaf2;
}

@media (max-width: 576px)  {
  .progress-bar span {
    font-size: 0.7em;
  }
}

@media (max-width: 992px) {
  .container-fluid {
    padding: 0 2em 1.5em;
  }
}
</style>
