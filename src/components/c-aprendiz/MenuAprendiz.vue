<template>
  <nav class="navbar navbar-expand-lg navbar-blue bg-navb fixed-top">
    <div class="container-fluid  ">
      <div class="ms-md-auto pe-md-3 d-flex align-items-center ">
        <img src="@/assets/img/Logo.png" class="ms-3" alt="" width="38" height="30" />
        <div class="input-group input-group-outline">
          <!-- <label class="form-label">Buscar..</label> -->
          <!-- <input type="text" class="form-control"> -->
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav  ms-md-auto me-5">
          <!-- <li class="nav-item ">
            <a class="nav-link " href="#/aprendiz"><i class="bi bi-house-fill bg-icon"></i></a>
          </li> -->
          <li class="nav-item me-3">
            <a class="nav-link " href="#/aprendiz-juegos"> <i class="bi bi-controller bg-icon"></i></a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link " href="#/Aprendiz-muro-virtual"> <i class="bi bi-wechat bg-icon"></i></a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link " href="#/Aprendiz-Psicologia"> <i class="bi bi-people-fill bg-icon"></i></a>
          </li>
          <li class="nav-item ">
            <a class="nav-link " href="#/Aprendiz-artesanias"> <i class="bi bi-box2-heart bg-icon"></i></a>
          </li>
          
          
        </ul>
        <div class="ms-md-auto d-flex">
          <a class="nav-link " ><img src="@/assets/img/fotoperfil.jpg" class="img-perfil " alt="" /></a>
          <a class="nav-link mt-2" style="color:white;" href="#/">Cerrar sesion</a>
        </div>
      </div>
    </div>
  </nav>

</template>
  
<script>


export default {

}
</script>
 
<style scoped>
.nav-item a:active {
  color: red !important;
}
.bg-navb{
/* background: #bfc0c2; */
background: #00324D;
}
.bg-icon{
  font-size: 27px;
  color: #c8e0ea;
  margin: 20px;
}
.bg-icon:hover{
  color: #33a3d3; 
}
.bg-icon::selection{
  color: #247c1f; 
}
.bg-icon2{
  font-size: 1rem;
  color: #00324D;

}
.s-bg{
  background: #9ea9af;
  padding: 10px 12px 10px 12px;
  border-radius: 100%;
}
.img-perfil{
  background: #00324D;
  width: 42px;
  height: 42px;
  border-radius: 100%;
 
}
</style>