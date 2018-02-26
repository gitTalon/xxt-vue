<template>
	
	<div class="stu-list-wrap">
		<header>
			<button type="button" @click="showFilter">查找学生</button>
		</header>
		<div  class="stu-list" id="stu-list" v-scroll="getMore">
			<section >
				<div class="list-header">
					<div>姓名</div>
					<div>学校和班级</div>
					<div>更多</div>
					<div>操作</div>
				</div>
				<div class="list-body">
					<div class="none_data" v-if="noData" v-text="tips">请点击“查找学生”进行查看操作</div>
					<div class="list-item" v-for="stu in students">
						<div class="cell" v-text="stu.studentName">
							
						</div>
						<div class="cell tl-ellipsis-2" v-text="stu.schoolName+''+stu.grade+''+stu.class">
							
						</div>
						<div class="cell blue" @click="more(stu)">
							***
					
						
							
						</div>
						<div class="cell blue" @click="sendMsg(stu)">
							短信
						</div>
					</div>
				</div>
			</section>
		</div>
		
		<!--搜索-->
		<div class="filter-mask" v-if="filterShow" @click="closeFilter"></div>
		<div v-if="filterShow" class="filter-box">
			<div class="head">输入条件筛选学生</div>
			<div class="item-list">
				<div class="item">
					<input type="text" placeholder="学校名称" v-model.trim="schoolName"/>
				</div>
				<div class="item">
					<input type="text" placeholder="学生姓名" v-model.trim="studentName"/>
				</div>
				<div class="item">
					<input type="text" placeholder="家长姓名" v-model.trim="parentsName"/>
				</div>
				<div class="item">
					<input type="text" placeholder="手机号码" v-model.trim="mobile"/>
				</div>
				<div class="item">
					<input type="text" placeholder="学生编号" v-model.trim="studentId"/>
				</div>
				<div class="item">
					<input type="text" placeholder="学生卡号" v-model.trim="studentCardNo"/>
				</div>
				<div class="item">
					<input type="text" placeholder="IC卡号" v-model.trim="ICNo"/>
				</div>
			</div>
			<div class="foot">
				<button class="btn cancel" type="button" @click="closeFilter">取消</button>
				<button class="btn sure" type="button" @click="seach">确定</button>
			</div>
		</div>
		
			<!--更多-->
			<alert-more :visible="alertShow"  v-on:fatherClose="closeAlert" :title="'11'" :moreObj="curStu" ></alert-more>
			<student-msg :visible="msgShow"  v-on:msgClose="msgClose" :title="'11'" :moreObj="curStu" ></student-msg>
		
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	
	import FooterNav from '../../components/FooterNav'
	import AlertMore from './AlertMore'
	import StudentMsg from './StudentMsg'
	export default {
		  name: 'StudentsList',
		   components: {
				FooterNav,
				AlertMore,
				StudentMsg
		   },
		  data () {
		    return {
		      
		      noData:true,	//无数据
		      filterShow:false,	//过滤条件框
		      schoolName:'',
		      studentName:'',
		      parentsName:'',
		      mobile:'',
		      studentId:'',
		      studentCardNo:'',
		      ICNo:'',
		      tips:'',
		      students:[],
		      curStu:{},
		      alertShow:false,
		      msgShow:false
		      }
			},
			mounted (){
				this.tips='请点击“查找学生”进行查看操作';
				
			},
			methods: {
				showFilter() {
					this.filterShow = true;
				},
				closeFilter() {
					this.filterShow = false;
					this.schoolName ="" ;
					this.studentName = ""; 
					this.parentsName = "" ;
					this.studentId = "" ;
					this.mobile ="";
					this.studentCardNo ="";
					this.ICNo ="";
				},
				more (stu) {
					this.alertShow=true;
					this.curStu=stu;
				},
				sendMsg (stu) {
					this.msgShow=true;
					this.curStu=stu;
				},
				//关闭alert
	           closeAlert(){
	           	 this.alertShow=false;
	           },
	           msgClose(){
	           		this.msgShow=false;
	           },
				seach() {
					var _this = this;
					
					if(  _this.schoolName == "" 
					  && _this.studentName == "" 
					  && _this.parentsName == "" 
					  && _this.studentId == "" 
					  && _this.studentCardNo ==""
					  && _this.ICNo =="") {
						alert("至少输入一个搜索条件！");
						return;
					}else{
						 _this.$http.get('static/data/searchStudents.json', {}).then(function(response){
							// 响应成功回调
							console.log(response.body);
							_this.students=response.body;
							
							
							_this.schoolName ="" ;
							_this.studentName = "" ;
							_this.parentsName = "" ;
							_this.mobile ="";
							_this.studentId = "" ;
							_this.studentCardNo ="";
							_this.ICNo ="";
						
							_this.filterShow=false;
							if(_this.students.length==0){
								_this.tips="没有该学生的信息";
							}else{
								_this.noData=false;
							}
		
						}, function(response){
							// 响应错误回调
							console.log(response)
						});
					}
				},
				getMore () {
					var _this=this;
					_this.$http.get('static/data/searchStudents.json', {}).then(function(response){
							// 响应成功回调
							console.log(22);
							//console.log(response.body);
							_this.students=_this.students.concat(response.body);
							
							
						
		
						}, function(response){
							// 响应错误回调
							console.log(response)
						});	
				}
			},
			directives: { // 自定义指令
				scroll: {
					bind: function(el, binding) {
						/*window.addEventListener('scroll', function() {
							if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
								var fnc = binding.value;
								fnc();
							}
						})*/
						
						var _this=this;
						//var el=document.getElementById('stu-list');
						var listBody=document.getElementsByClassName('list-body');
						
						//这里与常规的有所不同，stu-list 的固定的
						el.addEventListener('scroll', function() {
							
								//el.scrollTop--滚动高度（滚动会变）   el.clientHeight--stu-list的固定高度   20--距离底部的值   
								//listBody[0].clientHeight --数据列表的总高度 （这个值数据增加就会变）
								if(el.scrollTop+el.clientHeight+ 20>= listBody[0].clientHeight) {	
									var fnc = binding.value;
									fnc();
								}
							})
					}
				}
			}
		}
</script>

<style scoped lang="less">
	@blue:#329FFE;
	.blue{color: @blue !important;}
	.stu-list-wrap{
		header{
			position: absolute;
			top: 0;
			width: 100%;
		    height: 1.4rem;
		    background: #fff;
		    display: flex;
		    justify-content: flex-start;
		    align-items: center;
		    padding-left: .4rem;
		    margin-bottom: .2rem;
			button{
				box-shadow: 2px 2px #3781C0;
    			border-radius: 3px;
    			background: @blue;
    			color: #FFFFFF;
    			height: .7rem;
    			width: 2.1rem;
    			outline: 0;
			}
		}
		.stu-list{
			padding: 0 .2rem;
			
				position: absolute;
				width: 100%;
				top: 1.6rem;
			/*	height: ~'-webkit-calc(100%-1.6rem-1rem)';*/
				bottom: 1rem;
				overflow-y: auto;
				
			.list-header{
				display: flex;
				div{
					display: flex;
					justify-content: center;
					align-items: center;
					color:@blue ;
					flex: 1;
					height: 1rem;
					font-size: .28rem;
					border-bottom: 0.5px solid #DDDDDD;
				}
			}
			.list-body{
				
				.none_data{
					min-height: 2rem;
					padding-left: .2rem;
					padding-top: .2rem;
					color: #999999;
					font-size: .24rem;
				}
				.list-item{
					display: flex;
					border-bottom: 0.5px solid #ddd;
					.cell{
						display: flex;
						flex: 1;
						height:1.2rem;
						justify-content: center;
						align-items: center;
						text-align: center;
						color: #333;
					}
					
					
				}
			}
		}
	}
	
	.filter-mask{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 110;
	    background: rgba(0,0,0,0.5);
	    /* background: #333; */
	    cursor: pointer;
	}
	
	.filter-box{
		width: 80%;
		
	    position: fixed;
	    z-index: 125;
	    background: #fff;
	    left: 10%;
	    border-radius: .2rem;
	    top: 15%;
	    
	    .head{
	    	border-radius: .2rem .2rem 0 0;
		    height: 1rem;
		    font-size: .28rem;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    background: #F7F8FA;
	    }
	    .item-list{
	    	margin-top: .3rem;
    		padding: 0 .4rem ;
    		> .item{
    			margin-bottom: .3rem;
    			>input{
    				width: 100%;
    				height: .6rem;
    				border:.5px solid #DDDDDD;
    				padding-left: .2rem;
    				border-radius:4px;  
    				&:focus{
    					outline: 0;
    					border-color: #129FEA;
    				}
    			}
    		}
	    }
	    .foot{
	    	display: flex;
	    	justify-content: space-between;
	    	padding: .1rem .5rem .4rem;
	    	
	    	.btn{
	    		height: .6rem;
	    		width: 2.2rem;
	    		border-radius: .08rem;
	    		color: #FFFFFF;
	    		font-size: .28rem;
	    		outline: 0;
	    	}
	    	.cancel{
	    		background: #A4A9AD;
    			box-shadow: 0 2px #82898F;
    			
	    	}
	    	.sure{
	    		    background: #329FFE;
   					 box-shadow: 0 2px #3781C0;
	    	}
	    }
	}
	
	.more-confirm{
		width: 90%;
		background: #FFFFFF;
		position: fixed;
		z-index: 100;
	}
</style>