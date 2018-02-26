<template>
	<section class="more-list">
	
		<div class="more-item">
			菜单
		</div>
		
		<footer-nav></footer-nav>
	</section>
</template>

<script>
	
	import FooterNav from '../../components/FooterNav'
	export default {
		  name: 'Menu',
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