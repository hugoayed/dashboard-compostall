<template>
  <section>
    <Sidebar />
    <div class="content container-fluid">
      <div class="top-bar pt-3">
        <div class="searchbar text-end me-4">
          <input type="search" class="px-3 py-2" placeholder="Recherche" />
          <button class="btn px-3 py-2" type="button">
            <img src="@/assets/img/search.png" alt="Rechercher" />
          </button>
          <img src="@/assets/img/bell.png" alt="Cloche de notifications" class="mx-3" />
          <img src="@/assets/img/avatar.png" alt="Avatar" class="mx-3" />
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="card-chart p-3 mt-5">
        <h2 class="text-start ps-3">Messages</h2>
        <h3 class="text-center mt-5">Fonctionnalité à venir</h3>
        <img
          src="@/assets/img/error_page_illustration_under_construction.jpg"
          alt="Travaux"
          class="text-center coming-soon"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
input:focus {
  outline: none;
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

.coming-soon {
  width: 20%;
}
.container-fluid {
  padding: 0 2em 0 9em;
  /* margin-left: 9em; */
}
</style>
