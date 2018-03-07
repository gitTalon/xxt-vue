<template>
<div  class="records-box">
	<header>
		<div class="nav ">
			<router-link to="/menu/SmsRecords">
				<img src="../../assets/img/email.png"/>
				<p>短信记录</p>
			</router-link>
		</div>
		<div class="nav cur">
			<router-link to="/menu/AdvRecords">
				<img src="../../assets/img/msg-cur.png"/>
				<p>咨询记录</p>
			</router-link>
		</div>
	</header>

	<div class="filter-box">
		<div class="item">
			<select>
				<option>选择回复状态</option>
				<option>已回复</option>
				<option>未回复</option>
			</select>
			<a href="tel:4001898385">客服电话: 4001898385</a>
		</div>
		<div class="item">
			<input type="text" placeholder="选择开始时间"/>
			<span>--</span>
			<input type="text" placeholder="选择结束时间"/>
		</div>
		<div class="item">
			<input type="text" class="search_input" placeholder="请输入搜索内容"/>
			<button type="button" @click="search">确定</button>
		</div>
	</div>

	<div class="records-list">
		<div class="list-head">
			<div>内容</div>
			<div>时间</div>
		</div>
		<div class="list-body">
			
			<div class="data-list" v-if="searchData.length>0">
				<div class="list-item"  v-for="item in searchData">
					<div class="cell-2 tl-ellipsis-2">
						{{item.content}}
					</div>
					<div class="cell-1 c-999">{{item.date}}</div>
				</div>
				
			</div>
			<div class="data_none" v-else>请点击“确定”进行记录搜索</div>
		</div>
	</div>
	
    <footer-nav></footer-nav>
</div>
   
</template>
<script>
    	import FooterNav from '../../components/FooterNav'
	export default {
		  name: 'AdvRecords',
		   components: {
				FooterNav
				
		   },
		  data () {
		    return {
		      kf: '',
			  teachers:[],
			  sentTo:'',
			  sendCont:'',
			  searchData:[]
		    }
		  },

		  mounted (){
			  this.kf="4001898385";
			  this.getData();
		  },
		  methods:{
		  	getData(){
				  this.teachers=[
					  {
						  "name":"张三",
						  "tid":"t001"
					  },
					   {
						  "name":"李四",
						  "tid":"t002"
					  },
					   {
						  "name":"王斌先",
						  "tid":"t003"
					  },
					   {
						  "name":"张握三",
						  "tid":"t004"
					  }
				  ];
			  },
			  search(){
				 var _this=this;
				 _this.searchData=[
					 {
						"content":"2018-3-27阿斯加德发附件按实际记得来开家长会",
						"date":"2018-2-27"
					 },
					 {
						 "content":"fasdfafasfsdfaf",
						"date":"2018-2-28"
					 },
					 {
						"content":"2018-3-27阿斯加德发附件按实际记得来开家长会",
						"date":"2018-2-27"
					 },
					 {
						 "content":"fasdfafasfsdfaf",
						"date":"2018-2-28"
					 },
					 {
						"content":"2018-3-27阿斯加德发附件按实际记得来开家长会",
						"date":"2018-2-27"
					 },
					 {
						 "content":"fasdfafasfsdfaf",
						"date":"2018-2-28"
					 },
					 {
						"content":"2018-3-27阿斯加德发附件按实际记得来开家长会",
						"date":"2018-2-27"
					 },
					 {
						 "content":"fasdfafasfsdfaf",
						"date":"2018-2-28"
					 }
				 ];
			  }
		  }
	}
</script>
<style lang="less" scoped>
	@blue:#329FFE;
    .records-box{
		header{
			height: 1.4rem;
			display: flex;
			background: #ffffff;
		 position: fixed;
			top: 0;
			width: 100%;
			.nav{
				display: flex;
				flex: 1;
				a{
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				p{color: #999;font-size: .28rem;}
				&.cur{
					border-bottom: 2px solid #329ffe;
					p{color: #329FFE;}
				}
			}
			img{
				width: .6rem;
				margin-bottom: .12rem;
			}
		}
		.filter-box{
			margin-top: 1.5rem;
			.item{
				height: .8rem;
				line-height: .8rem;
				padding: 0 .2rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-right: .5rem;
				a{font-size: .28rem;}
				input,select{
					height: .6rem;
					width: 3rem;
					border-radius: 4px;
					padding: 0 .2rem;
					appearance: none;
					outline: 0;
					background: url(../../assets/img/jt_xia.png) #ffffff 2.6rem center  no-repeat;
					background-size:.2rem; 
					box-shadow: 1px 2px 2px #ccc;
					
					&.search_input{
						width: 3.5rem;
						background: url(../../assets/img/jt_xia.png) #ffffff 3.1rem center  no-repeat;
						background-size:.2rem;
					}
				}
				button{
					width: 2rem;
					height: .6rem;
					background: #329FFE;
					color: #ffffff;
					border-radius: 4px;
					box-shadow: 0 2px #3881C0;
					margin-right: .5rem;		
				}
			}
		}
		.records-list{
			padding: 0 .2rem;
			margin-top: .5rem;
			.list-head{
				height: 1rem;
				display: flex;
				background: #ffffff;
				font-size: .28rem;
				color: @blue;
				border-bottom: .5px solid #dddddd;
				border-top: 0.5px solid #dddddd;
				div{
					display: flex;
					flex: 1;
					justify-content: center;
					align-items: center;
				}
			}
			.list-body{
				 background: #fff;
				min-height: 1.4rem;
				color: #999;
				
				font-size: .28rem;
				.data_none{padding: .2rem;}
				.data-list{	margin-bottom:1.2rem;}
				.list-item{
					display: flex;
					height: 1rem;
					justify-content: flex-start;
					align-items: center;
					border-bottom: 0.5px solid #dddddd;
				
					.cell-2{
						display: flex;
						flex:2;
						width: 0;
						padding: .1rem;
						color: @blue;
					}
					.cell-1{
						display: flex;
						flex:1;
						width: 0;
						padding: .1rem;
					}
				}
			}
		}
	}
</style>