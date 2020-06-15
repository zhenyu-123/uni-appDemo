<template>
	<view>	
	<!--
		* 广告组件
		* timedown 倒计时时间
		* imageUrl 背景图
		* url 跳转链接
		*  -->
		<!-- #ifdef H5-->
	<!-- 	<mix-advert 
			ref="mixAdvert" 
			:timedown="8" 
			imageUrl="/static/advert.jpg"
			:url="advertNavUrl"
		></mix-advert> -->
		<!-- #endif -->
		
		cart
		<uni-badge text="1"></uni-badge>
	</view>
</template>

<script>
	import mixAdvert from '@/components/mix-advert/vue/mix-advert';//首屏广告
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		computed: {
			advertNavUrl(){
				let data = {
					title: '测试跳转新闻详情',
					author: '测试作者',
					time: '2019-04-26 21:21'
				}
				return `/pages/details/details?data=${JSON.stringify(data)}`;
			} 
		},
		components:{
			uniBadge,
			mixAdvert
		},
		onLoad() {
			console.log(this.$route)
			console.log(ROUTES)
		}
	}
</script>

<style>

</style>
