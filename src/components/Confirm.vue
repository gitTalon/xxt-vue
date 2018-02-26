<template>
	<transition name="fade">
		<div class="tl-confirm-wrap" v-if="visible">
			<div class="tl-confirm-mask"></div>
			<div class="tl-confirm-main">
				<div class="tl-confirm-header" v-if="headShow">{{title}}</div>
				<div class="tl-confirm-body">
					<div class="tl-confirm-content" v-html="contents"></div>
				</div>
				<div class="tl-confirm-footer">
					<button class="tl-confirm-colse" @click="closeAlert">确定</button>
				</div>
			</div>
			
		</div>
	</transition>
</template>

<script>
export default {
	  name: 'Confirm',
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

	.tl-confirm-wrap .tl-confirm-mask{
	    position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 98;
	    background: rgba(0,0,0,0.5);
	}
	.tl-confirm-wrap .tl-confirm-main{
		position: fixed;
	    background: #fff;
	    z-index: 100;
	    width: 80%;
	    left: 10%;
	    top: 45%;
	    border-radius: 4px;
	}
	.tl-confirm-wrap .tl-confirm-main .tl-confirm-header{
		min-height: .8rem;
		line-height: .8rem;
	    text-align: center;
	    font-size: .28rem;
	
	}
	.tl-confirm-wrap .tl-confirm-main .tl-confirm-body{
		min-height: .8rem;
	    text-align: center;
	    font-size: .28rem;
	    padding-top: 0.18rem;
	}
	.tl-confirm-wrap .tl-confirm-footer .tl-confirm-colse{
		    height: .8rem;
		    width: 100%;
		    border-radius: 0 0 4px 4px;
		    background: #329FFE;
		    color: #fff;
	}
</style>