<template>

    <body class="g-sidenav-show  bg-body">
        <MenuAprendiz></MenuAprendiz>
        <!-- end of navigation -->
        <main class="main-content position-relative   border-radius-lg ">
            <div class="container-fluid">
                <div class="conte-text titulo text-center mb-4 ">
                    <h4>Nuestros psicologos</h4><br>
                    <p>Contamos con profecionales dispuestas a ayudarte, acompañarte y guiarte en tu proceso. Ven y
                        conocelos</p>
                </div>
                <!----<div class="container mb-4 d-flex justify-content-center">
                    <div class="card me-3 text-center" style="width: 18rem;">
                        <img src="@/assets/img/fotoperfil.jpg" class="card-img-top img-perfil-s" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Nombre psicologo</h5>
                            <p class="card-text">Descripcion</p>
                            <a href="#" class="btn btn-ver">Ver perfil</a>
                        </div>
                    </div>
                
                </div>-->
            </div>
            <div class="containerC s-cont">

                <div class="card">
                    <img src="@/assets/img/psico.jpg">
                    <h4>Andres C</h4>
                    <p>Lorem ipsum dolor sit amet, consectet</p>
                    <div class="reseñas">
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star"> </i>
                    </div>
                    <br>
                    <a href="">Ver Perfil</a>
                </div>

                <div class="card">
                    <img src="@/assets/img/psico.jpg">
                    <h4>Andres C</h4>
                    <p>Lorem ipsum dolor sit amet, consectet</p>
                    <div class="reseñas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />



                        </svg>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star"> </i>
                        <i class="fa fa-star"> </i>
                    </div>
                    <br>
                    <a href="">Ver Perfil</a>
                </div>
                <div class="card">
                    <img src="@/assets/img/psico.jpg">
                    <h4>Andres C</h4>
                    <p>Lorem ipsum dolor sit amet, consectet</p>
                    <div class="reseñas">
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star erick"> </i>
                        <i class="fa fa-star"> </i>
                        <i class="fa fa-star"> </i>
                        <i class="fa fa-star"> </i>
                    </div>
                    <br>
                    <a href="">Ver Perfil</a>
                </div>



            </div>
            <div>
            </div>
            <div class="container mt-4">
                <div class="conte-text titulo text-center mb-4 ">
                    <h4>Acompañamiento psicologico</h4><br>
                    <p>Por encima de todo elije tu paz mental</p>
                </div>

            </div>
       
            <div class="row justify-content-center  ">
                <div class="col-xl-5 col-sm-6 mb-xl-5  ">
                    <img class="img-fluid bg-img" src="@/assets/img/imgAprendiz/1.jpg">
                </div>
                <div class="col-xl-5 col-sm-6 mb-xl-5 mt-4">
                   <br>
                   <br>
                    <div class="cont-cita justify-content-center">
                        <div class="w-50 ">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>selecciona fecha</option>
                                <option value="1">8/12/22</option>
                                <option value="2">9/12/22</option>
                                <option value="3">10/12/22</option>
                                <option value="3">11/12/22</option>

                            </select>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>selecciona hora</option>
                                <option value="1">8:00AM</option>
                                <option value="2">9:00AM</option>
                                <option value="3">10:00AM</option>
                                <option value="3">11:00AM</option>

                            </select>

                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>selecciona lugar</option>
                                <option value="1">bienestar del aprendiz</option>
                                <option value="2">polideportivo</option>


                            </select>
                            <div class="btn-opt-citas d-flex">
                                <a href="index.html"><button class="btn-solid-lg ">cancelar</button> </a>
                                <a href="login.html"><button class="btn-solid-lg ms-3">aceptar</button> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>

    </body>
</template>
   
<script>
import MenuAprendiz from '@/components/c-aprendiz/MenuAprendiz.vue';

export default {
    components: {
        MenuAprendiz,
    }
}
</script>
   
<style>
.main-content {
    margin-top: 7rem !important;
}

.conte-text {
    width: 50%;
    margin: auto;
}

/* .conte-text p{
  
} */
/* .card{
    --bs-card-border-width:0px;
}
.img-perfil-s{
    border-radius: 100%;
    width: 160px;
    height: 160px;
    margin: auto;

}
.btn-ver{
    background: #00324D;
    color: white;
}

.btn-ver:hover{
    background: #2b749b;
    color: white;
    box-shadow: -2px 2px 9px 3px #00324D;
}

.img-fluid {
    border-radius: 10px !important;
}

.bg-img {
    box-shadow: 0px 0px 5px 2px #5a5f61;
}

.titulo {
    margin-top: 10%;
}

.titulo10 {
    color: black;
    font-size: 1.5em;
    font-family: Georgia, 'Times New Roman', Times, serif
}

.main-content {
    margin-top: 7rem !important;
}

.cont-cita {

    display: flex;
    align-content: center;
}

.btn-solid-lg {
    padding: 20px;
    border: 1px solid hsl(201, 100%, 15%);
    border-radius: 10px;
    background-color: #00324D;
    color: #fff;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}

/* .btn-solid-lg:hover {
	border: 0.125rem solid #00324D;
	background-color: transparent;
	color: #00324D;
	text-decoration: none;
} */


.containerC {
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
}

.containerC .card {
    width: 330px;
    max-width: 430px;
    border-radius: 8px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
}

.containerC .card:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px #3498;
}

.containerC .card img {
    text-align: center;

}

.containerC .card h4 {
    font-weight: 600;
}

.containerC .card p {
    padding: 0 1rem;
    font-size: 16px;
    font-weight: 300;
}

.containerC .card a {
    font-weight: 500;
    text-decoration: none;
    color: #3498db;
}

.erick {
    color: orange;
}

.btn-cita {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.btn-solid-lg {
    display: inline-block;
    padding: 1.5rem 2.375rem 1.5rem 2.375rem;
    border: 0.125rem solid #00324D;
    border-radius: 2rem;
    background-color: #00324D;
    color: #fff;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}
</style>