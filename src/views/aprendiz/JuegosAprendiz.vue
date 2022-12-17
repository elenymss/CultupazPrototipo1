<template>

    <body class="g-sidenav-show  bg-body">
        <MenuAprendiz></MenuAprendiz>

        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      
           
            <div class="p-5 text-center my-5">
                <h2>JUEGOS INTERACTIVOS</h2>
            </div>
            <div class="container d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-4">
                        <div class="card text-center" style="width: 18rem;">
                            <img class="card-img-top" src="@/assets/img/imgAprendiz/rompecabezas.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Rompe Cabezas</h5>
                                <a href="rompeCabezas.html" class="btn btn-primary">Jugar</a>

                            </div>
                        </div>

                    </div>



                    <div class="col">
                        <div class="card text-center" style="width: 18rem;">
                            <img class="card-img-top" src="@/assets/img/imgAprendiz/juegoparejas.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Encuentra La Pareja</h5>
                                <p class="card-text"></p>
                                <a href="encuentraLaPareja.html" class="btn btn-primary">Jugar</a>
                            </div>
                        </div>
                    </div>


                    <div class="col">
                        <div class="card text-center" style="width: 18rem;">
                            <img class="card-img-top" src="@/assets/img/imgAprendiz/ruletadeemociones.png" alt="Card image cap"
                                height="164px">
                            <div class="card-body">
                                <h5 class="card-title">Ruleta de Emociones</h5>
                                <p class="card-text"></p>
                                <a href="ruletaDeEmociones.html" class="btn btn-primary">Jugar</a>
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
.body-bg {
    background: transparent;
}
</style>