<template>
<div id="advisory" class="advisory">
    
		<header>这里可以对学生的任教老师进行问题咨询，包括学习方面和学校方面。</header>
   <div class="select-list">
	 		<select v-model="sentTo">
				 <option value="" class="none">请选择</option>
			 	<option v-for="teacher in teachers" :value="teacher.tid">{{teacher.name}}</option>
				
			 </select>

			 <div class="kf">客服电话：<span v-text="kf"></span></div>
	 </div>
	 <div class="send-cont">
	 	<textarea v-model="sendCont" placeholder="请填写咨询内容" maxlength="200"></textarea>
	 </div>
	 <div class="send-oper">
		 <button type="button" @click="sureSend">发送</button>
	 </div>
    <footer-nav></footer-nav>
</div>
   
</template>
<script>
    	import FooterNav from '../../components/FooterNav'
	export default {
		  name: 'Advisory',
		   components: {
				FooterNav
				
		   },
		  data () {
		    return {
		      kf: '',
			  teachers:[],
			  sentTo:'',
			  sendCont:''
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
			  sureSend(){
				  if(this.sentTo==""){
					  alert("请选择发送的老师");
					  return;
				  }
				  if(this.sendCont==""){
					   alert("发送内容不能为空！");
					  return;
				  }
				  alert("发送到："+this.sentTo+"\n内容为："+this.sendCont);
			  }
		  }
	}
</script>
<style lang="less" scoped>
    .advisory{
			header{
				height:1.2rem;
				display:flex;
				padding: .2rem;
				font-size: .28rem;
				background: #ffffff;
			}
			.select-list{
				display: flex;
				padding: .2rem;
				justify-content: space-between;
				align-items: center;
				select{
					outline: 0;
					width: 3rem;
					height: .6rem;
					border: 0.5px solid #dddddd;
					padding: 0 .2rem;
					border-radius: 4px;
					appearance: none;
					background: url(../../assets/img/jt_xia.png) #ffffff 2.6rem center  no-repeat;
					background-size:.2rem; 
					    box-shadow: 1px 2px 2px #ccc;
				}
				.kf{font-size: .28rem;margin-right: .2rem;}
			}
			.send-cont{
				padding: .2rem;
				margin-bottom: .2rem;
				textarea{
					padding: .2rem;
					width: 100%;
					border: 0;
					resize: none;
					border-radius: 4px;
					height: 2rem;
					outline: 0;
					box-shadow: 1px 2px #ccc;
				}
			}
			.send-oper{
				padding-left: .2rem;
				button{
					outline: 0;
					width: 1.6rem;
					height: .6rem;
					border-radius: 4px;
					color: #ffffff;
					box-shadow: 1px 2px #3881C0;
					background: #329FFE;
					font-size: .28rem;
				}
			}
		}
</style>