<template>
    <body class="g-sidenav-show  bg-body">
      <MenuVertical/>
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <MenuHorizontal/>
      <div class="container-fluid py-8">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-4 col-sm-6 mb-xl-5 mb-4">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i class="bi bi-person-fill opacity-10"></i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Total usuarios</p>
                    <h4 class="mb-0">25</h4>
                  </div>
                </div>
                <hr class="dark horizontal my-0">
                <div class="card-footer p-3">
                  <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+3% </span>que el mes pasado</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-xl-5 mb-4">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i class="bi bi-person-fill opacity-10"></i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Nuevos usuarios</p>
                    <h4 class="mb-0">7</h4>
                  </div>
                </div>
                <hr class="dark horizontal my-0">
                <div class="card-footer p-3">
                  <p class="mb-0"><span class="text-danger text-sm font-weight-bolder">-2%</span> que ayer</p>
                </div>
              </div>
            </div>
            
            
          </div>
        <hr class="hr">  
          <div class="row mb-4">
            <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="row">
                    <div class="col-lg-6 col-7">
                      <h6>Visualizacion</h6>
                      <p class="text-sm mb-0">
                        <i class="fa fa-check text-info" aria-hidden="true"></i>
                        <span class="font-weight-bold ms-1">30 Personas</span> registradas este mes
                      </p>
                    </div>
                    <div class="col-lg-6 col-5 my-auto text-end">
                      <!-- <div class="dropdown float-lg-end pe-4">
                        <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                        </ul>
                      </div> -->
                    </div>
                  </div>
                </div>
                <div class="card-body px-4 pb-2">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Programas</th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">miembros</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">total personas</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">actividad</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">ADSI</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <!-- <img src="../assets/img/team-1.jpg" alt="team1"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <!-- <img src="../assets/img/team-2.jpg" alt="team2"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                <!-- <img src="../assets/img/team-3.jpg" alt="team3"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <!-- <img src="../assets/img/team-4.jpg" alt="team4"> -->
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> 5 </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">60%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Enfermeria</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <!-- <img src="../assets/img/team-2.jpg" alt="team5"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <!-- <img src="../assets/img/team-4.jpg" alt="team6"> -->
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> 2 </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">10%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Sistemas</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <!-- <img src="../assets/img/team-3.jpg" alt="team8"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <!-- <img src="../assets/img/team-1.jpg" alt="team9"> -->
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> 3 </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">100%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Audivisuales</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <!-- <img src="../assets/img/team-4.jpg" alt="user1"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <!-- <img src="../assets/img/team-3.jpg" alt="user2"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                <!-- <img src="../assets/img/team-4.jpg" alt="user3"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <!-- <img src="../assets/img/team-1.jpg" alt="user4"> -->
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> 10 </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">100%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Audivisuales</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <!-- <img src="3" alt="user1"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <!-- <img src="#" alt="user2"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                <!-- <img src="#" alt="user3"> -->
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <!-- <img src="#" alt="user4"> -->
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> 10 </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">100%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
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