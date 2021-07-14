<template>
    <nav id="navbar" class="d-none d-lg-block">
        <img src="@/assets/img/compostall-logo-white.png" alt="Logo Compostall blanc" class="white-logo">
        <img src="@/assets/img/small-logo.png" alt="Logo Compostall blanc" class="small-logo">
        <ul class="list-unstyled text-start">
            <li class="p-2 mt-5 my-4 fs-4 nav-item d-flex align-items-center"><router-link to="/"><img src="@/assets/img/Dashboard-badge.png" alt="Dashboard"><span class="link-text">Dashboard </span></router-link></li>
            <li class="p-2 my-4 fs-4 nav-item d-flex align-items-center"><router-link to="/calendar"><img src="@/assets/img/Calendrier-badge.png" alt="Calendrier"><span class="link-text">Calendrier </span></router-link></li>
            <li class="p-2 my-4 fs-4 nav-item d-flex align-items-center"><router-link to="/messages"><img src="@/assets/img/Message-badge.png" alt="Messages"><span class="link-text">Messages </span></router-link></li>
            <li class="p-2 my-4 fs-4 nav-item d-flex align-items-center"><router-link to="/account"><img src="@/assets/img/Mon compte-badge.png" alt="Mon Compte"><span class="link-text">Mon compte</span></router-link></li>
            <li class="p-2 my-4 fs-4 nav-item d-flex align-items-center logout bottom-0 position-absolute"><img src="@/assets/img/Log-out-badge.png" alt="Déconnexion"><span class="link-text">Déconnexion </span></li>
            <!-- position-absolute bottom-0 -->
        </ul>
    </nav>
</template>

<style>
    #navbar {
        width: 7em;
        height: 100vh;
        position: fixed;
        background-color: #414b55;
        color: white;
        transition: 200ms ease;
        z-index: 99;
    }

    #navbar:hover {
        width: 18em;
    }

    #navbar:hover ul{
        padding: 0 1em;
    }

    .white-logo {
        display: none;
    }

    #navbar:hover .white-logo{
        display: flex;
        margin: 1em 2.7em;
    }

    .small-logo {
        margin: 1em 0 2.8em 0;
    }

    #navbar:hover .small-logo {
        display: none;
        transition: 300ms ease;
    }

    #navbar:hover a {
        display: contents;
    }

    #navbar:hover .link-text{
        display: block;
        min-width: max-content;
    }

    #navbar li {
        height: 2em;
        border-radius: 10px;
    }

    #navbar li:last-child {
        height: fit-content;
    }

    #navbar ul img{
        margin: 0 1em;
        transition: 300ms ease;
        /* background-color: #4b5762;
        padding: 8px;
        border-radius: 10px; */
    }

    #navbar:hover ul img {
        margin: 0 1em 0 0;
        transition: 300ms ease;
    }

    #navbar img.mt-auto {
        margin: 0 1em;
        background-color: unset;
        padding: 8px;
        border-radius: 10px;
    }

    #navbar .logout{
        width: 89%;
    }

    .nav-item {
        cursor: pointer;
    }

    .nav-item a {
        color: white;
        text-decoration: none;
    }

    .nav-item:hover {
        background-color: #4b5762;
    }

    .nav-item:hover .link-text {
        margin-top: -5px;
        transition: 200ms ease;
    }

    .link-text {
        display: none;
    }
</style>

<script>
// import $ from 'jquery'
// export default {
//     methods: {
//         openNav: function() {
//             $("#mySidenav").width("350px");
//         },
//         closeNav: function(){
//             $("#mySidenav").width("50px");
//         }
//     }
// }
</script>
