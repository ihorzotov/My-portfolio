import project from './project.vue';

var app = new Vue({
    el:'#vue-app',
    components: { 
      project,
    },
    data:{
      projects:[],
      social:{},
      itemIndex: null,
    },
    watch:{
      itemIndex:{
        handler:function(data){
          var html = document.querySelector("html");

          if(data == null){
            html.classList.remove('overflow');
          }else{
            html.classList.add('overflow');
          }
        },
      }
    },
    methods:{
      showPresentation: function(data){
        this.itemIndex = data;
      },
    },
    created:function(){
      this.projects = obj_projects;
      this.social = obj_social;
    }
});
