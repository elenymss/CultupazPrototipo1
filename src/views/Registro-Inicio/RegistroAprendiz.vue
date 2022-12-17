<template>
    <body class="container-login">
        <div class="fondo">
            <div class="justify-content-center vh-100">
                <div class="container d-flex justify-content-center">
                    <div class="container p-2 mb-2 border border-2-primary my-5 bg-white p-5 rounded text-dark "
                        style="width: 25rem; ">
                        
                        <div class="text-center fw-bold fs-3" style="color: #00324d">
                            Inicia sesión
                        </div>
                        <div class="d-flex justify-content-around">
                       
                        <div class="input-group mt-4 mb-4 me-2">
                            <div class="input-group-text" style="background-color: #00324d">
                                <i class="bi bi-person-fill " style="color:aliceblue"></i>
                            </div>
                            <input type="text" class="form-control bg-white" placeholder="Nombre" />
                        </div>
                        <div class="input-group mt-4 mb-4">
                            <div class="input-group-text" style="background-color: #00324d">
                                <i class="bi bi-person-check " style="color:aliceblue"></i>
                            </div>
                            <input type="text" class="form-control bg-white" placeholder="Apellido" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-around">
                        <div class="input-group mt-4 mb-4 me-2">
                            <div class="input-group-text" style="background-color: #00324d">
                                <i class="bi bi-envelope-fill " style="color:aliceblue"></i>
                            </div>
                            <input type="text" class="form-control bg-white" placeholder="Numero documento" />
                        </div>
                        <div class="input-group mt-4 mb-4 ">
                            <div class="input-group-text" style="background-color: #00324d">
                                <i class="bi bi-telephone-fill" style="color:aliceblue"></i>
    
                            </div>
                            <input type="text" class="form-control bg-white" placeholder="telefono" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-around">
                        <div class="input-group mt-4 mb-4 me-2">

                            <div class="input-group-text" style="background-color: #00324d">
                                <i class="bi bi-envelope-fill " style="color:aliceblue"></i>
                            </div>
                            <input type="text" class="form-control bg-white" placeholder="Correo electrónico" />
                        </div>

                        <div class="input-group  mt-4 mb-4">
                            <div class="input-group-text" style="background-color: #00324d">
                                <i class="bi bi-key-fill" style="color:aliceblue"></i>
                            </div>
                            <input class="form-control bg-light" type="password" placeholder="Contraseña" />
                        </div>
                  </div>
                        <a class="text-decoration-none d-flex justify-content-center" href="#">
                            <button class="btn bg-B-login " >Registrate</button>
                        </a>

                        <div class="d-flex gap-1 justify-content-center mt-1">
                            <div>¿Ya tienes una cuenta?</div>
                            <a href="#/inicioSesion" class="text-decoration-none fw-semibold" style="color: #2b92c9"
                                data-bs-togle="modal" data-bs-target="#exampleModal">
                                Inicia sesion</a>
                        </div>
                        <div class="p-2">
                            <div class="border-bottom text-center mt-1" style="height: 0.9rem">
                                <span class="bg-white px-3">o</span>
                            </div>
                        </div>
                        <div class=" d-flex  justify-content-center">
                            
                            <a href="https://accounts.google.com/v3/signin/identifier?dsh=S50424583%3A1667659400465066&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowEntry=AddSession&flowName=GlifWebSignIn&service=mail"
                                target="_blanck">
                                <button class="btn bg-B-login"><i class="bi bi-google"></i>  Continua con google</button> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {};
</script>

<style >
.container-login {
    background: url('@/assets/img/psico.jpg')no-repeat center center fixed;
    background-size: cover;
    box-shadow: inset 0 -1em 5em 1em #171818, 0.1em 0.1em 1em ;

}

.bg-B-login {
    background: #00324d;
    color: white;
    margin-top: 20px;
    padding: 8px;
}

.fondo {
    backdrop-filter: blur(0.1rem);
}
</style>
