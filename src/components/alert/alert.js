import Vue from 'vue'

//全局的less 是这样引入的 ^_^
require('!style-loader!css-loader!less-loader!./alert.less');



var alertBox= document.createElement('div');
alertBox.id='alert22';
////var template="2222";
////alertBox.innerHTML = template;
document.body.appendChild(alertBox);
/* eslint-disable no-new */
new Vue({
el: '#alert22',
//router,
//components: { App },
template: '<div>222</div>'
})

// export default {
// 	
// 	name:'testAlert',
// 	data() {
//          return {
//             phone:''
//
//          }
//      }
// }
