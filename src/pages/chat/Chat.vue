<template>
	<div>
		<p class="">共有<font class="color_blue">14</font>条与<font class="color_blue">电子学生证中心</font>的交谈记录</p>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	
	import FooterNav from '../../components/FooterNav'
	export default {
		  name: 'Chat',
		   components: {
				FooterNav
				
		   },
		  data () {
		    return {
		      msg: ''
		    }
		  },
		  methods:{
		  	
		  }
	}
</script>

<style>
</style>