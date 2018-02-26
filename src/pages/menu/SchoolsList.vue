<template>
	<div >
		<header>
			<button class="" type="button" @click="showSeach(0)">查找学校</button>
			<button class="" type="button" @click="showSeach(1)">查找教师</button>
		</header>
		<div id="school-list" class="data-wrap">
			<div class="data-header flex">
				<div class="flex-3">学校ID和名称</div>
				<div class="flex-2">操作</div>
			</div>
			<div class="data-list">
				<div class="data-item flex" v-for="scho in schools">
					<div class="flex-3 tl-ellipsis c-999" v-text="scho.SNO+' '+scho.schoolName"></div>
					<div class="flex-2">
						<div class="flex-1 blue">短信</div>
						<div class="flex-1 blue">教师</div>
					</div>
				</div>

			</div>
		</div>
		
		<!--查找学校-->
		<div class="tl-select-mask" v-if="sch_mask" @click="hideSeach(0)"></div>
		
		<section class="search-box" v-if="sch_mask">
			<div class="head">输入ID或名称查找学校</div>
			<div class="body">
				<div class="inp_div">
					<input type="text" placeholder="学校ID"/>
				</div>
				<div class="inp_div">
					<input type="text" placeholder="学校名称"/>
				</div>
			</div>
			<div class="foot">
				<button type="button" class="btn btn-no" @click="hideSeach(0)">取消</button>
				<button type="button" class="btn btn-yes">查找</button>
			</div>
		</section>
		
		<!--查找教师-->
		<div class="tl-select-mask" v-if="tea_mask" @click="hideSeach(1)"></div>
		<section class="search-box" v-if="tea_mask">
			<div class="head">输入姓名或手机号查找老师</div>
			<div class="body">
				<div class="inp_div">
					<input type="text" placeholder="教师名称"/>
				</div>
				<div class="inp_div">
					<input type="text" placeholder="教师手机"/>
				</div>
			</div>
			<div class="foot">
				<button type="button" class="btn btn-no" @click="hideSeach(1)">取消</button>
				<button type="button" class="btn btn-yes">查找</button>
			</div>
		</section>
		
		
		
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	
	import FooterNav from '../../components/FooterNav'
	export default {
		  name: 'SchoolsList',
		   components: {
				FooterNav
				
		   },
		  data () {
		    return {
		       sch_mask:false,
		       tea_mask:false,
		       schools:[]
		    }
		  },
		  mounted(){
		  	this.getData();
		  },
		  methods:{
		  	 getData(){
		  	 	var _this=this;
		  	 	_this.$http.get('static/data/school.json', {}).then(function(response){
							// 响应成功回调
							console.log(response.body);
							_this.schools=response.body;
							
		
						}, function(response){
							// 响应错误回调
							console.log(response)
						});
		  	 },
			  showSeach (idx){
			  	 if(idx==0){
			  	 	this.sch_mask=true;
			  	 }else{
			  	 	this.tea_mask=true;
			  	 }
			  },
			  hideSeach (idx){
			  	 if(idx==0){
			  	 	this.sch_mask=false;
			  	 }else{
			  	 	this.tea_mask=false;
			  	 }
			  }
		  }
	}
</script>

<style lang="less" scoped>
	header{
		height: 1.4rem;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding-left: .4rem;
		position: fixed;
		width: 100%;
		top: 0;
		
		button{
			box-shadow: 0 2px #3781C0;
			background: #329FFE;
    		border-radius: 4px;
    		margin-right: .5rem;
    		height: .7rem;
    		width: 1.8rem;
    		color: #FFFFFF;
		}
	}
	
	.data-wrap{
		position: fixed;
		top: 1.6rem;
		bottom: 1.2rem;
		width: 100%;
		padding: 0 .2rem;
		
		.flex{display: flex;align-items: center;}
		.flex-3{
			display: flex;
			flex: 3;
			justify-content: center;
		}
		.flex-2{
			display: flex;
			flex: 2;
			justify-content: center;
		}
		.flex-1{
			display: flex;
			flex: 1;
			justify-content: center;
		}
		.data-header{
			background: #FFFFFF;
			height: 1.08rem;
			font-size: .28rem;
			color: #329FFE;
			border-bottom: .5px solid #DDDDDD;
			border-top: .5px solid #DDDDDD;
		}
		.data-list{
			    font-size: .28rem;
		   
		    overflow-y: auto;
		    height: 100%;
		    padding-bottom: 1.08rem;
			.blue{color: #329FFE;}
			
			.data-item{
				height: 1rem;
				border-bottom: .5px solid #DDDDDD;
				 background: #FFFFFF;
			}
		}
	}
	
	.tl-select-mask{z-index: 105;}
	.search-box{
		position: fixed;
	    left: 50%;
	    top: 45%;
	    width: 90%;
	    transform: translate(-50%,-50%);
	    text-align: center;
	    border-radius: 4px;
	    z-index: 110;
	    
	    .head{
    	    height: 1rem;
		    line-height: 1rem;
		    background: #F7F8FA;
		    border-radius: 4px 4px 0 0;
	    }
	    .body{
	    	margin-top: .4rem;
	    	padding:0 .4rem;
	    	input{
	    		width: 100%;
	    		border: .5px solid #DDDDDD;
	    		border-radius: 4px;
	    		margin-bottom: .2rem;
	    		height: .6rem;
	    		padding-left: .3rem;
	    		&:focus{
	    			outline: #0288F3;
	    			border:.5px solid #329FFE;
	    			-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 4px rgba(102,175,233,.6);
    				box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 4px rgba(102,175,233,.6);
	    		}
	    	}
	    }
	    .foot{
	    	display: flex;
	    	justify-content: space-between;
	    	padding:.2rem .5rem .5rem;
	    	
	    	.btn{
	    		width: 2.2rem;
	    		height: .6rem;
	    		border-radius: 4px;
	    		color: #FFFFFF;
	    		font-size: .28rem;
	    	}
	    	.btn-no{
	    		background: #A4A9AD;
	    		-webkit-box-shadow: 0 2px #82898F;
	    		box-shadow: 0 2px #82898F;
	    	}
	    	.btn-yes{
	    		background: #329EFF;
	    		-webkit-box-shadow: 0 2px #3781C0;
	    		box-shadow: 0 2px #3781C0;
	    	}
	    }
	}

</style>