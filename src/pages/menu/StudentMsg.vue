<template>
		<transition name="fade">
		<div class="tl-alert-wrap" v-if="visible">
			<div class="tl-alert-mask"></div>
			<div class="tl-alert-main">
				<div class="tl-alert-header" v-if="headShow">{{title}}</div>
				<div class="tl-alert-body">
					<div class="tl-alert-content">
						<p><span>发送信息给：</span><span class="blue" v-text="moreObj.studentName"></span></p>
						<p><span>所在学校:</span><span v-text="moreObj.studentName"></span></p>
						<p><span>所在班级：</span><span v-text="moreObj.grade+''+moreObj.class"></span></p>
						<p><span>手机号码：</span><span v-text="moreObj.mobile"></span></p>
						<div class="msg-cont">
							<textarea placeholder="消息内容"></textarea>
						</div>
						
					</div>
					
				</div>
				<div class="tl-alert-footer">
					<button class="tl-alert-cancle" @click="closeAlert">取消</button>
					<button class="tl-alert-sure" @click="modify">确认修改</button>
				</div>
			</div>
			
		</div>
	</transition>
</template>

<script>
	
	
	export default {
		  name: 'StudentMsg',
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
	  			this.$emit('msgClose');
	  			this.Stu={};
	  		},
	  		modify (){
	  			this.closeAlert();
	  			alert("发送中...")
	  		}
		  }
	}
</script>

<style scoped lang="less">

	.tl-alert-wrap{
		 .tl-alert-mask{
		    position: fixed;
		    left: 0;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    z-index: 105;
		    background: rgba(0,0,0,0.5);
		}
		.tl-alert-main{
			position: fixed;
		    background: #fff;
		    z-index: 100;
		    width: 80%;
		    left: 10%;
		    top: 30%;
		    border-radius: 4px;
		    z-index: 110;
		    
		    .tl-alert-header{
				min-height: .8rem;
				line-height: .8rem;
			    text-align: center;
			    font-size: .28rem;
			
			}
			.tl-alert-body{
				min-height: .8rem;
			    text-align: center;
			    font-size: .28rem;
			    padding-top: 0.18rem;
			}
			
			.tl-alert-content{
				
			 	p{
					text-align: left;
				    height: .6rem;
				    line-height: .6rem;
				    padding-left: .3rem;
				    font-size: .28rem;	
				}
				.msg-cont{
					padding: 0 .3rem;
					
					textarea{
					    width: 100%;
					    border: 1px solid #ddd;
					    border-radius: 4px;
					    resize: none;
					    height: 1.5rem;
					    margin-bottom: .2rem;
					    padding: .1rem;
					}	
				}
			}
			
			.tl-alert-footer{
				display: flex;
				padding: 0 .5rem;
				justify-content: space-between;
				margin-bottom: .5rem;
				button{
					
    				width: 2.2rem;
    				height: .6rem;
    				border-radius: .08rem;
    				color: #FFFFFF;
				}
				.tl-alert-cancle{
					    background: #A4A9AD;
    					box-shadow: 0 2px #82898F;
				}
				.tl-alert-sure{
					background: #329FFE;
    				box-shadow: 0 2px #3781C0;
				}
			}
		}
	}
	 
	
	
	
	 
	 
	
</style>