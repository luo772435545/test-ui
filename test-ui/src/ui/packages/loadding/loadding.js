/**
 * Created by gan on 2018/3/20.
 */
import Vue from 'vue';
import loaddingTep from './loadding.vue';

var load=Vue.extend(loaddingTep);

var loadConstructor=function () {
    return new load({
      el:document.createElement('div')
    })
};

var loadCreate=loadConstructor();

var loadding =()=>{
      document.body.appendChild(loadCreate.$el);
      Vue.nextTick(()=>{
        loadCreate.isShow=true
      })
};

loadding.close=()=>{
  loadCreate.isShow=false;
  return new Promise((resolve,reject)=>{
    resolve(loadCreate)
  })
}

export default loadding
