<template>
	<section id="login" class="login-wrap">
		<div class="logo">
			<img src="../../assets/img/login_top.png" />
			<p>信息管理平台</p>
		</div>
		<div class="login-item">
			<img src="../../assets/img/user.png" class="ico"/>
			
			<input type="text" v-model="phone" maxlength="11" placeholder="请输入用户名或手机" class="login_input" id="username">
		</div>
		<div class="login-item">
			<img src="../../assets/img/password.png" class="ico"/>
			<input type="password" maxlength="30" v-model="userPwd" placeholder="请输入密码" class="login_input" id="pwd">
		</div>
		<div class="login-item">
			<button @click="login">登录</button>
		</div>
		<div class="login-p text-c"><a href="#">遇到登录问题？</a></div>
		
		<alert :visible="alertShow" v-on:fatherClose="closeAlert" :title="'11'" :contents="errorTip" ></alert>
		
	</section>
</template>

<script>
   import  Alert  from '../../components/Alert.vue'
  
    export default {
        components: {
          Alert
        },
        data() {
            return {
               phone:'',
               userPwd:'',
               accesstoken:'',
               alertShow:false,
               errorTip:'',
               alertMsg:''
            }
        },
		mounted(){
			var _this=this;
			_this.facthData();
		},
        methods: {
			facthData() {
				var _this=this;
				let accesstoken = localStorage.getItem("accesstoken");
				if (accesstoken) {
					_this.$router.push({
						path: '/identity/Identity'
					})
								
				}
				
			},
        	//关闭alert
           closeAlert(){
           	 this.alertShow=false;
           },
          //v-model双向数居绑定  输入值值 post给后端验证 accessToken 的正确性 并且用localstorage储存 没输入值或者输入错误值 给反馈
            login() {
               let _this=this;
               let param;
               
               if(_this.phone==""){
               		this.alertShow=true;
               		this.errorTip='手机号不能为空';
               		return;
               }else if(_this.phone.length!=11){
               		this.alertShow=true;
               		this.errorTip='请输入11位手机号';
               		
               		return;
               }
               if(_this.password==""){
               		this.alertShow=true;
               		this.errorTip='密码不能不能为空';
               		return;
               }
               param={
               		"phone":_this.phone,
               		"password":_this.password
               }
               _this.$http.get('static/data/users.json', param).then(function(response){
					// 响应成功回调
					console.log(response);
					let users=response.body;
					for(let i=0;i<users.length;i++){
						if(users[i].phone==_this.phone&&users[i].password==_this.userPwd){
							//  使用localStorage API 
							
							//这里需要优化 存一个obj
	                        localStorage.setItem('accesstoken', users[i].accesstoken);
	                        localStorage.setItem('user_id', users[i].user_id);
	                        localStorage.setItem('phone', users[i].phone);
	                        localStorage.setItem('userName', users[i].userName);
	                        _this.$router.push({
                            	path: '/identity/Identity'
                        	})
	                        
						}else{
							this.alertShow=true;
               				this.errorTip='用户名或密码错误';
						}
					}

				}, function(response){
					// 响应错误回调
					console.log(response)
				});
            }
        }
    }
</script>

<style scoped lang="less">

	.login-wrap{
		 border-top:4px solid #329EFF;
		 position: absolute;
		 width: 100%;
		 
		 top: 0;
		 bottom: 0;
		 background: url(../../assets/img/login_bg.jpg) no-repeat;
		 background-size: 100% 100%;
		 padding-top: 20%;
		 max-width: 750px;
		 margin: 0 auto;
	}
	.login-wrap .logo {text-align: center;margin-bottom: 1rem;}
	.login-wrap .logo img{
		width: 2.5rem;
		
	}
	.login-wrap .logo p{font-size: .28rem;color: #329FFE;}
	.login-wrap .login-item{
		display: -webkit-box;
		padding: 0 20%;
		margin-bottom: .5rem;
		height: .6rem;
		line-height: .6rem;
	}
	
	.login-wrap .login-item .ico{
		width: .4rem;
		vertical-align: middle;
		display: inline-block;
		margin-right: .2rem;
	}
	
	.login-wrap .login-item input{
		height: .6rem;
		background: transparent;
		border-bottom:1px solid #329EFF;
		display: -webkit-box;
		-webkit-box-flex: 1;
		width: 100%;
		font-size: .24rem;
	}
	.login-wrap .login-item input:focus{outline: 0;background: transparent;}
	.login-wrap .login-item input::-webkit-input-placeholder{color: #FFFFFF;}
	.login-wrap .login-item button{
		    background: url(../../assets/img/login_button.png)  no-repeat;
		        width: 100%;
		        background-size:100% 100% ;
   			 display: -webkit-box;
   			 font-size: .28rem;
   			 letter-spacing: .2rem;
   			 color: #FFFFFF;
   			 line-height: .6rem;
   			 height: .6rem;
	}
	.login-wrap .login-p{margin-top: 1rem;}
	.login-wrap .login-p a{ text-decoration: underline;font-size: .28rem;color: #FFFFFF;}
</style>