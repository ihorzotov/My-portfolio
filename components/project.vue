<template>
  <div class="project">
    <div class="project__img" :class="{show:(item.presentation)}" :title="showTitle" @click="showPresentation">
      <img :src="item.image" alt="">
    </div>
    <div class="project__links flex-c-c">
      <a class="flex-c" :href="item.gitLink" v-if="item.gitLink">GitHub</a>
      <a class="flex-c" :href="item.gitPage" v-if="item.gitPage">Github Pages</a>
      <a class="flex-c" :href="item.webLink"v-if="item.webLink">Website</a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"projectcard",
    data: function(){
      return {
        item:this.dataItem,
      }
    },
    props: ['dataItem'],
    methods:{
      showPresentation:function(){
        if(this.item.presentation){
          this.$emit('clicked');
        }
      }
    },
    computed:{
      showTitle:function(){
        if(this.item.presentation){
          return 'Presentation';
        }
      }
    }
  }
</script>
<style scoped>
.project+.project{
  margin-top: 50px;
}

.project__img.show{
  cursor: zoom-in;
}
.project__img{
  position: relative;
  width: 100%;
  padding-top: 60%;
  box-shadow: 0px 0px 15px 0px #827b82;
  border-radius: 15px;
  margin-bottom: 30px;
}
img{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: inherit;
}
.project__links{
  text-decoration: blue;
  font-size: 14px;
  color: #7b7b7b;
  
}
.project__links{
  font-size: 14px;
}
a{
  border-bottom: 1px solid #7b7b7b;
  line-height: 1;
  transition: color .3s, border .3s;
}
a+a{
  margin-left: 30px;
}
@media(min-width: 1025px){
  a:hover{
    color: #000;
    border-color: #000;
  }
}
</style>
