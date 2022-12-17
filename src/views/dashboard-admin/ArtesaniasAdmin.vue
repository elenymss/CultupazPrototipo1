<template>
    <body class="g-sidenav-show  bg-body">
        <MenuVertical/>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <MenuHorizontal/>
        <div class="container-fluid py-4">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-sm-6 mb-xl-5 mb-4 ">
            <div class="card shadow-dark">
              <div class="card-header p-3 pt-2 ">
                <div class="icon icon-lg icon-shape  shadow-success text-center border-radius-xl mt-n4 position-absolute">
                  <!-- <img src="../assets/img/team-1.jpg" class="foto" alt="user4"> -->
                </div>
                <div class="text-end pt-1">
                  <h5 class="mb-0">Maria Ordoñez</h5>
                  <p class="text-sm mb-0 text-capitalize">maria@gmail.com</p>
                </div>
                <div class="bg-img">
                  <!-- <img class="art-img" src="../assets/img/emprendimiento/arte-1.jpg"> -->
                </div>
              </div>
              <hr class="color-r horizontal my-0">
              <div class="card-footer p-1 mt-3 justify-content-center  d-flex">
                <p class="mb-0"><button class="btn shadow-dark btn-card">cancelar</button> <button class="btn shadow-dark">publicar</button></p>
              </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-xl-5 mb-4 ">
          <div class="card shadow-dark">
            <div class="card-header p-3 pt-2 ">
              <div class="icon icon-lg icon-shape  shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <!-- <img src="../assets/img/team-1.jpg" class="foto" alt="user4"> -->
              </div>
              <div class="text-end pt-1">
                <h5 class="mb-0">Maria Ordoñez</h5>
                <p class="text-sm mb-0 text-capitalize">maria@gmail.com</p>
              </div>
              <div class="bg-img">
                <!-- <img class="art-img" src="../assets/img/emprendimiento/arte-1.jpg"> -->
              </div>
            </div>
            <hr class="color-r horizontal my-0">
            <div class="card-footer p-1 mt-3 justify-content-center  d-flex">
              <p class="mb-0"><button class="btn shadow-dark btn-card">cancelar</button> <button class="btn shadow-dark">publicar</button></p>
            </div>
          </div>
      </div><div class="col-xl-4 col-sm-6 mb-xl-5 mb-4 ">
        <div class="card shadow-dark">
          <div class="card-header p-3 pt-2 ">
            <div class="icon icon-lg icon-shape  shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <!-- <img src="../assets/img/team-1.jpg" class="foto" alt="user4"> -->
            </div>
            <div class="text-end pt-1">
              <h5 class="mb-0">Maria Ordoñez</h5>
              <p class="text-sm mb-0 text-capitalize">maria@gmail.com</p>
            </div>
            <div class="bg-img">
              <!-- <img class="art-img" src="../assets/img/emprendimiento/arte-1.jpg"> -->
            </div>
          </div>
          <hr class="color-r horizontal my-0">
          <div class="card-footer p-1 mt-3 justify-content-center  d-flex">
            <p class="mb-0"><button class="btn shadow-dark btn-card">cancelar</button> <button class="btn shadow-dark">publicar</button></p>
          </div>
        </div>
    </div>
        
        
        
        
        
      </div>
    <hr class="hr">  
      
  </div>
    </main>
    </body>
    </template>
    
    <script>
    import '@/assets/css/material-dashboard.css'
    import '@/assets/css/style.css'
    // import '@/assets/js/material-dashboard'
    import MenuHorizontal from '@/components/c-admin/MenuHorizontal.vue';
    import MenuVertical from '@/components/c-admin/MenuVertical.vue';
    export default {
     components:{
        MenuHorizontal,
        MenuVertical
     }
    }
    </script>
    
    <style>
    
    </style>