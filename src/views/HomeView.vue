<template>
  <div class="home">
    <PerfilPsicolo/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PerfilPsicolo from '@/components/PerfilPsicologo.vue';



export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    PerfilPsicolo,
    
}
}
</script>

