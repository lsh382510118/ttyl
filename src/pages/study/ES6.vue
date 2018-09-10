<template>
  <div>
        es6
  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    components: {
      pdf
    },
    data() {
      return {
        src: './../../static/pdf/es6标准入门.pdf',
        src0: 'http://120.35.29.43:21351//uploads/emergencyCommand/a641189e_2fd5_44f3_86ee_b90a8d00d2c5000000000.pdf',
        src1: '/pdfuser/uploads/emergencyCommand/a641189e_2fd5_44f3_86ee_b90a8d00d2c5000000000.pdf',
        src2: '//cdn.mozilla.net/pdfjs/tracemonkey.pdf',
      }
    },
    methods: {
      getPdf: function () {
        this.$axios.get('/aapi/uploads/emergencyCommand/a641189e_2fd5_44f3_86ee_b90a8d00d2c5000000000.pdf', {
          responseType: 'blob', //重要
        }).then((res) => {
            console.log(res)
        });
      }
    },
    mounted() {
        this.getPdf();
    },
  }

</script>

<style scoped>

</style>
