/**
 * Created by gan on 2018/3/20.
 */
import loadding from './packages/loadding/loadding';
import Button from './packages/button/button.js';

console.log(Button)
var install=function (Vue) {
  Vue.component(Button.name,Button)
  Vue.$loadding=Vue.prototype.$loadding=loadding
};


export default install






