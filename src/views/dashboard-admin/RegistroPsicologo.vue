<template>
    <body class="g-sidenav-show  bg-body">
        <MenuVertical/>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <MenuHorizontal/>
        <div class="container-fluid py-6">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-center text-capitalize ps-3">Registro Psicologo</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <!-- <form class="form">
                    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre">
                    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido">
                    <input class="controls" type="text" name="cédula" id="cédula" placeholder="Ingrese su Cédula">
                    <input class="controls" type="text" name="dirección" id="dirección" placeholder="Ingrese su Dirección">
                    <input class="controls" type="text" name="telefono de contacto" id="telefono de Contacto"
                        placeholder="Ingrese su Telefono de contacto">
                    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo">
                    <input class="controls" type="date" name="correo" id="correo" placeholder="Ingrese su Correo">
                    <input class="controls" type="email" name="ro" id="rol" placeholder="Ingrese su Rol">
    
                    <input class="botons" type="submit" value="Registrar">
    
              </form>  -->
              <form class="form-psicologo">
                <div class="d-flex">
                    <div class="input-group input-group-outline my-3">
                    <label class="form-label">Usuario</label>
                    <input type="text" class="form-control">
                    </div>
                    
                    <div class="input-group input-group-outline my-3 ms-3">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control">
                    </div>  
                </div>
                <div class="d-flex">
                    <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control">
                    </div> 
                    <div class="input-group input-group-outline my-3 ms-3">
                        <label class="form-label">celular</label>
                        <input type="number" class="form-control">
                        </div> 
                </div>
                <div class="d-flex">
                    <div class="input-group input-group-outline my-3">
                    <label class="form-label">Direccion</label>
                    <input type="text" class="form-control">
                    </div> 
                    <div class="input-group input-group-outline my-3 ms-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control">
                    </div>  
                </div>
                <div class="btn-flex">
                    <button class="btn bg-gradient-primary my-4 mb-2 me-3" type="reset">cancelar</button>
                    <button class="btn bg-gradient-primary  my-4 mb-2" ><a href="@/views/dashboard-admin/PsicologosAdmin.vue"></a>guardar</button>
                  </div>
               
                
              </form>
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