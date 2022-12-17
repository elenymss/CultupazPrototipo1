<template>
  <div>
    <InicioSesion/>
    <RegistroAprendiz></RegistroAprendiz>

  </div>
</template>

<script>
import InicioSesion from '@/components/c-loginRegistro/InicioSesion.vue';
import RegistroAprendiz from '@/components/c-loginRegistro/RegistroAprendiz.vue';
export default {
 components:{
    InicioSesion,
    RegistroAprendiz
 }
}
</script>

<style>

</style>