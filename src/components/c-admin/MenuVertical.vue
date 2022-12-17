<template>
    <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main">
      <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" href="#" target="_blank">
          <img src="@/assets/img/Logo.png" class="navbar-brand-img h-100 "
            alt="main_logo">
          <span class="ms-1 font-weight-bold text-white">Cultupaz</span>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2">
      <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white active bg-gradient-primary" href="#/admin">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="bi bi-house-fill"></i>
              </div>
              <span class="nav-link-text ms-1">Inicio</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="#/admin/aprendices">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="bi bi-people-fill"></i>
              </div>
              <span class="nav-link-text ms-1">Aprendices</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="#/admin/psicologos">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="bi bi-person-heart"></i>
              </div>
              <span class="nav-link-text ms-1">Psicologos</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="#/admin/administradores">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="bi bi-person-fill-gear"></i>
              </div>
              <span class="nav-link-text ms-1">Administradores</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="#/admin/artesanias">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="bi bi-box2-heart"></i>
              </div>
              <span class="nav-link-text ms-1">Artesanias</span>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link text-white " href="../pages/juegos.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">games</i>
              </div>
              <span class="nav-link-text ms-1">Juegos</span>
            </a>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link text-white " href="../pages/notifications.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">notifications</i>
              </div>
              <span class="nav-link-text ms-1">Notifications</span>
            </a>
          </li> -->
  
          <!-- <li class="nav-item">
            <a class="nav-link text-white " href="../pages/perfil.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">person</i>
              </div>
              <span class="nav-link-text ms-1">Perfil</span>
            </a>
          </li> -->
  
  
        </ul>
      </div>
      <div class="sidenav-footer position-absolute w-100 bottom-0 ">
        <div class="mx-3">
          <a class="btn bg-gradient-primary mt-4 w-100" href="#/inicioSesion" type="button">Salir</a>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  import '@/assets/css/material-dashboard.css'
  import '@/assets/css/style.css'
  
  export default {
  
  }
  </script>
  
  <style>
  
  </style>