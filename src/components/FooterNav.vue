<template>
	<footer class="footer-nav">
		<nav class="text-c">
			<ul class="tl-grid">
				<li class="tl-grid-1-4">
					<router-link to="/identity/Identity" :class="{ active: currentNav==1 }">
						<span class="ico ico-id"></span>
						<p>身份</p>
					</router-link>
					
				</li>
				<li class="tl-grid-1-4">
					<router-link to="/menu/Menu" :class="{ active: currentNav==2 }">
						<span class="ico ico-menu"></span>
						<p>菜单</p>
					</router-link>
					
				</li>
				<li class="tl-grid-1-4">
					<router-link to="/Chat/chat" :class="{ active: currentNav==3 }">
						<span class="ico ico-msg"></span>
						<p>交流</p>
					</router-link>
					
				</li>
				<li class="tl-grid-1-4">
					<router-link to="/more/More" :class="{ active: currentNav==4 }">
						<span class="ico ico-more"></span>
						<p>更多</p>
					</router-link>
					
				</li>
			</ul>
		</nav>
	</footer>
</template>

<script>
export default {
	  name: 'FooterNav',
	  
	  data () {
	    return {
	       currentNav:0
	    }
	  },
	  mounted(){
	  	var _this=this;
	  	this.facthData()
	  },
	  methods:{
	  	facthData() {
	  		var _this=this;
	        let accesstoken = localStorage.getItem("accesstoken");
	        if (!accesstoken) {
	          	_this.$router.push({
	            	path: '/login/Login'
	        	})
	                        
	        }
	        if (_this.$route.path === '/identity/Identity') {
	          _this.currentNav = 1;
	        }
	        if (_this.$route.path.indexOf('/menu')!=-1) {
	          _this.currentNav = 2;
	        }
	        if (_this.$route.path === '/Chat/chat') {
	          _this.currentNav = 3;
	        }
	        if (_this.$route.path === '/more/More') {
	          _this.currentNav = 4;
	        }
	    }
	  }
}
</script>

<style scoped="scoped">
	.footer-nav{
	    position: fixed;
	    bottom: 0;
	    width: 100%;
	    background: #ffffff;
	    height: 1rem;
	    padding-top: .1rem;
	    font-size: .24rem;
	    border-top: 0.5px solid #DDDDDD;
	    z-index: 100;
	}
	.footer-nav .ico{
		width: .4rem;
		height: .4rem;
		display: inline-block;
	}
	.footer-nav .active{
		color: #329FFE;
	}
	.footer-nav a .ico-id{
		background: url(../assets/img/sf.png) no-repeat;
		background-size:100% ;
	}
	.footer-nav a.active .ico-id{
		background: url(../assets/img/sf_hover.png) no-repeat;
		background-size:100% ;
	}
	
	.footer-nav a .ico-menu{
		background: url(../assets/img/cdl.png) no-repeat;
		background-size:100% ;
	}
	.footer-nav a.active .ico-menu{
		background: url(../assets/img/cdl_hover.png) no-repeat;
		background-size:100% ;
	}
	
	.footer-nav a .ico-msg{
		background: url(../assets/img/jl.png) no-repeat;
		background-size:100% ;
	}
	.footer-nav a.active .ico-msg{
		background: url(../assets/img/jl_hover.png) no-repeat;
		background-size:100% ;
	}
	
	.footer-nav a .ico-more{
		background: url(../assets/img/gd.png) no-repeat;
		background-size:100% ;
	}
	.footer-nav a.active .ico-more{
		background: url(../assets/img/gd_hover.png) no-repeat;
		background-size:100% ;
	}
</style>