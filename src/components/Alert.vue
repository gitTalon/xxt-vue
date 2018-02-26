<template>
	<transition name="fade">
		<div class="tl-alert-wrap" v-if="visible">
			<div class="tl-alert-mask"></div>
			<div class="tl-alert-main">
				<div class="tl-alert-header" v-if="headShow">{{title}}</div>
				<div class="tl-alert-body">
					<div class="tl-alert-content" v-html="contents"></div>
				</div>
				<div class="tl-alert-footer">
					<button class="tl-alert-colse" @click="closeAlert">确定</button>
				</div>
			</div>
			
		</div>
	</transition>
</template>

<script>
export default {
	  name: 'Alert',
	   props: {
		visible: {
	        type: Boolean,
	        default: false
	      },
		  title: {
		    type: String,
		    default: '信息'
	      },
	      headShow:{
	      	type: Boolean,
	      	default:false
	      },
	      contents: {
	      	type: String,
		    default: '222'
	      }
		     
	   },
	  data () {
	    return {
	      msg: ''
	    }
	  },
	  methods:{
	  		closeAlert (){
	  			//this.visible=false;
	  			this.$emit('fatherClose')
	  		}
	  }
}
</script>


<style scoped="scoped">

	.tl-alert-wrap .tl-alert-mask{
	    position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 105;
	    background: rgba(0,0,0,0.5);
	}
	.tl-alert-wrap .tl-alert-main{
		position: fixed;
	    background: #fff;
	    z-index: 100;
	    width: 80%;
	    left: 10%;
	    top: 45%;
	    border-radius: 4px;
	    z-index: 110;
	}
	.tl-alert-wrap .tl-alert-main .tl-alert-header{
		min-height: .8rem;
		line-height: .8rem;
	    text-align: center;
	    font-size: .28rem;
	
	}
	.tl-alert-wrap .tl-alert-main .tl-alert-body{
		min-height: .8rem;
	    text-align: center;
	    font-size: .28rem;
	    padding-top: 0.18rem;
	}
	.tl-alert-wrap .tl-alert-footer .tl-alert-colse{
		    height: .8rem;
		    width: 100%;
		    border-radius: 0 0 4px 4px;
		    background: #329FFE;
		    color: #fff;
	}
</style>