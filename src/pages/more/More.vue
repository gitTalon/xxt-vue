<template>
	<div>
		<section class="more-list">
			<div class="more-item" @click="showMgrList">
				<img src="../../assets/img/htgl.png" alt="" class="ico">后台管理
				<i></i>
			</div>
			<div class="more-item">
				<img src="../../assets/img/yhj.png" alt="" class="ico">优惠凭证
				<i></i>
			</div>
			<div class="more-item" @click="signOut">
				<img src="../../assets/img/out_login.png" alt="" class="ico">退出登录
				<i></i>
			</div>
			
			
		</section>
		<div class="tl-select-mask" v-if="listShow" @click="closeMgrList"></div>
		 <transition name="slide-fade"> 
			<section class="mgr-list" v-if="listShow">
				<div class="text-c">
					<p class="c-333">尊敬的<span v-text="user"></span></p>
					<p class="c-333">欢迎使用电子学生证管理平台</p>
				</div>
				<div class="tl-grid">
					<div class="tl-grid-1-3 text-c">
						<router-link to="/menu/StudentsList">
							<img src="../../assets/img/student_list.png" alt="" class="parent_img">
							<p class="tip">学生列表</p>
						</router-link>
					</div>
					<div class="tl-grid-1-3 text-c">
						<router-link to="/menu/SchoolsList">
							<img src="../../assets/img/teacher_list.png" alt="" class="parent_img">
							<p class="tip">学校列表</p>
						</router-link>
					</div>
					<div class="tl-grid-1-3 text-c">
						<router-link to="/menu/RecordsList">
							<img src="../../assets/img/notes.png" alt="" class="parent_img"> 
								<p class="tip">记录查看</p>
						</router-link>
					</div>
				</div>
			
		</section>
		</transition>
		<footer-nav></footer-nav>
	</div>
	
</template>

<script>
	
	import FooterNav from '../../components/FooterNav'
	export default {
		  name: 'More',
		   components: {
				FooterNav
				
		   },
		  data () {
		    return {
		      user: localStorage.getItem('userName'),
		      listShow:false
		      
		    }
		  },
		  methods:{
		  		showMgrList (){
		  			this.listShow=true;
		  		},
		  		closeMgrList (){
		  			this.listShow=false;
		  		},
		  		//退出登录
		  		signOut () {
		  			if(confirm("您确定要退出嘛？")){
		  				localStorage.removeItem('userName');
	    				localStorage.removeItem('user_id');
	    				localStorage.removeItem('phone');
	    				localStorage.removeItem('accesstoken');
	    				
    				      this.$router.push({
                        	path: '/login/Login'
                    	})
		  			}
		  		}
		  }
	}
</script>

<style scoped lang="less">
	
	.more-list{
		.more-item{
			height: .88rem;
		    line-height: .88rem;
		    padding: 0 .24rem;
		    border-bottom: 0.5px solid #ddd;
		    font-size: .32rem;
		    position: relative;
		    
		    .ico{
				width: .4rem;
				height: .4rem;
				vertical-align: middle;
				margin-right: .4rem;
			}
			/* '>' 图标制作 */
			i:after{
				display: block;
				width: 8px;
				height: 8px;
			    position: absolute;
			     right: .24rem;
			     top: 50%;
			     margin-top: -4px;
			    content: '';
			    /*border: 1px solid #DDDDDD;*/
			    border-style:solid ;
			    border-width:1px 1px 0px 0px ;
			    border-color: #666;
			    -webkit-transform: rotate(45deg);
			    transform: rotate(45deg);
			    border-radius: 1px;
				   
				   
			}
		}
	}
	
	.mgr-list{
	    position: fixed;
	    width: 100%;
	    z-index: 100;
	    bottom: 1rem;
	    padding: .2rem 0;
	    p{margin-bottom: .1rem;font-size: .28rem;}
	    img{
	    	width: .9rem;
	    	margin-top: .2rem;
	    }
	    .tip{
	    	color: #999999;
	        margin-top: 0.1rem;
    		font-size: .28rem;
    		margin-bottom: 0;
    	}
	}
	
	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	  transform: translateY(100px);
	  opacity: 0;
	}
	
</style>