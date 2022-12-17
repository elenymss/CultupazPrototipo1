<template>
   <body class="g-sidenav-show bg-body">
        <MenuAprendiz></MenuAprendiz>
        <main class="main-content position-relative border-radius-lg ">
         <div class="container-portafolio" >
    <section class="container">
    <!-- Portfolio Start Galeria -->
    <div class="portfolio" id="portfolio">
        <div class="container">
            <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <h2>Galeria de artesanias</h2>
                <h5>Variedades a tus gustos, consegue ya la tuya!</h5>  
            </div>
            <div class="row">
                <div class="col-12">
                    <ul id="portfolio-filter">
                        <li data-filter="*" class="filter-active">Todo</li>
                        <li data-filter=".filter-1">ceramica</li>
                        <li data-filter=".filter-2">madera</li>
                        <li data-filter=".filter-3">fibras vejetales</li>
                        <li data-filter=".filter-4">textil</li>
                        <li data-filter=".filter-5">otros</li>
                    </ul>
                </div>
            </div>
            <div class="row portafolio-container">
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-4 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-c1.jpg" alt="Image">
                        </div>
                        <div class="portfolio-text"> 
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                        </div>
                        <img class="img-arte" src="@/assets/img-arte/arte-m2.jpg" alt="Image">
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                        </div>
                        <img class="img-arte" src="@/assets/img-arte/artesania4.jpg" alt="Image">
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp " data-wow-delay="0.6s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-c5.webp" alt="Image">
                        </div>
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.8s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-c1.jpg" alt="Image">
                        </div>
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="1s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-p2.jpeg" alt="Image">
                        </div>
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-p3.jpeg" alt="Image">
                        </div>
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-c4.jpeg" alt="Image">
                        </div>
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-5 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="portfolio-wrap">
                        <div class="portfolio-img">
                            <img class="img-arte" src="@/assets/img-arte/arte-c4.jpeg" alt="Image">
                        </div>
                        <div class="portfolio-text">
                            <h3>Creado por: </h3>
                            <a class="btn" href="#" ><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</div>
</main>
<div class="fixed-plugin ps">
             <!-- Button trigger modal -->
            <a class="fixed-plugin-button text-dark position-fixed  py-2 px-3 " data-bs-toggle="modal" data-bs-target="#newArte">
                <i class="bi bi-plus-lg btn-mas py-2"></i>
            </a>
        </div>
        
<!-- Modal -->
<div class="modal fade" id="newArte" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content ">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Nueva Artesania</h1>
        <i class="bi bi-x-lg btn-close" data-bs-dismiss="modal" aria-label="Close"></i>
       
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-2">
            <label for="recipient-name" class="col-form-label">Titulo:</label>
            <input type="text" class="form-control " id="recipient-name">
          </div>
          <div class="mb-2">
            <label for="message-text" class="col-form-label">Link whatsapp</label>
            <input type="text" class="form-control " id="recipient-name">
          </div>
          <div class="mb-2 mt-3">
            <p>cargar</p>
            <a href="#"><i class="bi bi-folder-plus opt-mas me-2"></i></a>
            <a href="#"><i class="bi bi-camera opt-mas me-2"></i></a>
            <a href="#"><i class="bi bi-card-image opt-mas me-2"></i></a>
            
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-publicar">Publicar</button>
      </div>
    </div>
  </div>
</div>
   </body>
</template>


<script>
import '@/assets/css/material-dashboard.css'
import '@/assets/css/artesanias.css'
import MenuAprendiz from "@/components/c-aprendiz/MenuAprendiz.vue";

export default {
    components: {
        MenuAprendiz,

    },
};
</script>

<style scoped>

/* modal-publi */
.btn-close{
    color: #00324D;
    font-size: 2rem;
    margin-bottom: 4px;
    text-shadow: 1px 1px 1px #09547d;

}
.btn-close:hover{
    color: #06293c;
    font-size: 2rem;
    margin-bottom: 4px;

}
.btn-publicar{
    background: #00324D !important;
    color:white
}
.btn-publicar:hover{
    background: #fff;
    color:#00324D;
    border: 2px solid #00324D;
}
.form-control{
    border:1px solid #09547d !important;
}
.opt-mas{
    font-size: 1.5rem;
    color: #06293c;
}
</style>