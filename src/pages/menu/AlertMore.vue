<template>
		<transition name="fade">
		<div class="tl-alert-wrap" v-if="visible">
			<div class="tl-alert-mask"></div>
			<div class="tl-alert-main">
				<div class="tl-alert-header" v-if="headShow">{{title}}</div>
				<div class="tl-alert-body">
					<div class="tl-alert-content">
						<p v-text="'手机号码:'+moreObj.mobile"></p>
						<p v-text="'学生卡号:'+moreObj.studentCardNo"></p>
						<p v-text="'学生编号:'+moreObj.studentId"></p>
						<p v-text="'全网IC:'+moreObj.ICNo"></p>
					</div>
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
		  name: 'AlertMore',
		   props: {
		   	 moreObj:{
		   	 	type:Object,
		   	 	
		   	 },
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
		    default: ''
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
	  			this.$emit('fatherClose');
	  			this.Stu={};
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
	    top: 40%;
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
	.tl-alert-wrap .tl-alert-main .tl-alert-content p{
		text-align: left;
	    height: .6rem;
	    line-height: .6rem;
	    padding-left: .3rem;
	    font-size: .28rem;	
	}
	
	.tl-alert-wrap .tl-alert-footer .tl-alert-colse{
		    height: .8rem;
		    width: 100%;
		    border-radius: 0 0 4px 4px;
		    background: #329FFE;
		    color: #fff;
	}
</style>