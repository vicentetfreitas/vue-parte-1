<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg',
          titulo: 'Cachorro 2'
        },
        {
          url: 'https://img.r7.com/images/cachorro-que-parece-pompom-13012022171412951?dimensions=771x420',
          titulo: 'Cachorro'
        }
      ]
    }
  }
}
</script>

<template>

  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
    </div>

</template>

<style>
</style>
