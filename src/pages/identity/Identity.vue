<template>
	<div>
		<header class="info-wrap">
			<img src="../../assets/img/product_21.png" class="avatar"/>
			<h2 >你好！<span v-text="userName"></span></h2>
			<p>ID:<span v-text="userId"></span></p>
		</header>
		<section class="main">
			<p>选择好身份后即可进入功能菜单页操作</p>
			<div class="tab-box">
				<div class="tab-bar left " :class="{'active':cur==0}" @click="tab(0)">
					<i class="ico"></i>家长
				</div>
				<div class="tab-bar right" :class="{'active':cur==1}" @click="tab(1)"><i class="ico"></i>教师</div>
				<div class="or"></div>
			</div>
			<div class="tab-cont" v-if="cur==0">
				
				<div class="item" v-for="child in childs" @click="showMenu(child.childsId)">
					<i class="child"></i>孩子：{{child.name}}<i class="ico"></i>
				</div>
				
				
				
			</div>
			
			<div class="tab-cont" v-else="">
				
				<div class="item" v-for="ident in idents" @click="showMenu(1)">
					<i class="tearch"></i>{{ident.identName}}：{{userName}}<i class="ico"></i>
				</div>
				
				
				
				
			</div>
			
		</section>
		
		
		<footer-nav></footer-nav>
	</div>
	
</template>

<script>
	
	import FooterNav from '../../components/FooterNav'
export default {
	  name: 'Identity',
	   components: {
			FooterNav
			
	   },
	  data () {
	    return {
	      userName:'',
	      userId:'',
	      cur:0,
	      childs:[],
	      idents:[]
	    }
	  },
	  mounted(){
	  	 this.userName = localStorage.getItem('userName');
	     this.userId = localStorage.getItem('user_id');
	       
	  	 this.getData();
	  },
	  methods:{
	  	 getData (){
			   var _this=this;
			   _this.childs=[
				   {
					   "name":"李晓东",
					   "childsId":"CID001"
				   },
				   {
					   "name":"李东东",
					   "childsId":"CID002"
				   },
				    {
					   "name":"李四",
					   "childsId":"CID003"
				   }
			   ];

			   _this.idents=[
				   {
					   "identName":"教师",
					   "identID":"ID001"
				   },
				   {
					   "identName":"班主任",
					   "identID":"ID002"
				   },
				    {
					    "identName":"家长",
						"identID":"ID003"
				   }
			   ];
	      
	  	 },
	  	 tab (idx) {
	  	 	this.cur=idx;
	  	 },
	  	 showMenu (idx,role){
	  	 	
	  	 }
	  }
}
</script>

<style scoped lang="less">

	.info-wrap{
		background: url(../../assets/img/selection_bg.png) 50% no-repeat;
		background-size: cover;
		height: 3.76rem;
		text-align: center;
		padding-top: .5rem;
		
		.avatar{
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
	    	border: 2px solid rgba(50, 158, 255, 0.16);
		}
		
		h2{font-size: .32rem;margin: .2rem 0;}
	}
	.main{
		background: #F4F4F4;
		font-size: .28rem;
		p{
			height: .8rem;
		    text-align: center;
		    line-height: .8rem;
		}
		.tab-box{
			height: .9rem;
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			
			.tab-bar{
				background: #c5c8cd;
				height: .9rem;
    			width: 3.3rem;
    			display: flex;
    			justify-content: center;
				align-items: center;
				color: #FFFFFF;
				
				@ico_wd:.6rem;
    			&.left{
    				border-radius: .08rem 0 0 .08rem;
    				.ico{
    					width: @ico_wd;
    					height: @ico_wd;
    					background: url(../../assets/img/parent1.png) no-repeat;
    					background-size:100% 100% ;
    				}
    				&.active .ico{
    					background: url(../../assets/img/parent.png) no-repeat;
    					background-size:100% 100% ;
    				}
    			}
    			&.right{
    				border-radius:0 .08rem  .08rem  0;
    				.ico{
    					width: @ico_wd;
    					height: @ico_wd;
    					background: url(../../assets/img/teacher1.png) no-repeat;
    					background-size:100% 100% ;
    				}
    				&.active .ico{
    					background: url(../../assets/img/teacher.png) no-repeat;
    					background-size:100% 100% ;
    				}
    			}
    			&.active{
    				background: #FFFFFF;
    				color: #333333;
    				
    				
    			}
			}
			
			.or{
				width: .4rem;
				height: .4rem;
				background: url(../../assets/img/maybe.png) no-repeat;
				background-size:100% ;
				position: absolute;
			}
			
			
			
		}
		.tab-cont{
			margin-top: .2rem;
				.item{
					height: 1rem;
				    line-height: 1rem;
				   padding:0 0.5rem 0 1rem;
				    &:nth-child(odd){
				    	 background: #fff;
				    }
				}
				.child{
					width: .2rem;
					background: url(../../assets/img/tea_name.png) no-repeat;
					background-size: 100%;
					display: inline-block;
				    height: .8rem;
				    vertical-align: middle;
				    margin-top: .2rem;
				    margin-right: .2rem;
				}
				.tearch{
					width: .5rem;
					background: url(../../assets/img/stud_name.png) no-repeat;
					background-size: 100%;
					display: inline-block;
				    height: .8rem;
				    vertical-align: middle;
				    margin-top: .2rem;
				    margin-right: .2rem;
				}
				
			}
		
	}
	
</style>