<template>
    <body class="g-sidenav-show  bg-body">
        <MenuVertical/>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <MenuHorizontal/>
      <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card my-4 me-3">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 class="text-white text-capitalize ps-3">Administradores</h6>
                  </div>
                </div>
                <div class="card-body px-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Contactos</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">estado</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">fecha registro</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <!-- <div>
                                <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                              </div> -->
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">John Michael</h6>
                                <p class="text-xs text-secondary mb-0"></p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">john@creative-tim.com</p>
                            <p class="text-xs text-secondary mb-0">3124563773</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">Activo</span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                          </td>
                          <td class="align-middle text-center">
                            <a class="btn btn-link text-danger text-gradient mb-0" href="javascript:;">
                                  <i class="bi bi-trash-fill text-sm me-2"></i>eliminar</a>
                                <a class="btn btn-link text-dark  mb-0" href="javascript:;">
                                  <i class="bi bi-pencil-square text-sm me-2"></i>Editar</a> 
                          </td>
                          
                         
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <!-- <div>
                                <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user2">
                              </div> -->
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Alexa Liras</h6>
                                <p class="text-xs text-secondary mb-0"></p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">alexa@creative-tim.com</p>
                            <p class="text-xs text-secondary mb-0">313243255</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">incativo</span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                          </td>
                          <td class="align-middle text-center">
                            <a class="btn btn-link text-danger text-gradient mb-0" href="javascript:;">
                                  <i class="bi bi-trash-fill text-sm me-2"></i>eliminar</a>
                                <a class="btn btn-link text-dark  mb-0" href="javascript:;">
                                  <i class="bi bi-pencil-square text-sm me-2"></i>Editar</a> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <!-- <div>
                                <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user3">
                              </div> -->
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                                <p class="text-xs text-secondary mb-0"></p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">laurent@creative-tim.com</p>
                            <p class="text-xs text-secondary mb-0">312342535</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">activo</span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                          </td>
                          <td class="align-middle text-center">
                            <a class="btn btn-link text-danger text-gradient mb-0" href="javascript:;">
                                  <i class="bi bi-trash-fill text-sm me-2"></i>eliminar</a>
                                <a class="btn btn-link text-dark  mb-0" href="javascript:;">
                                  <i class="bi bi-pencil-square text-sm me-2"></i>Editar</a> 
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <!-- <button class="btn btn-flex">ver mas..</button>  -->
                  </div>
                </div>
              </div>
            </div>
          </div>
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