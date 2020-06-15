<template>
	<view>
		<view class="content">{{ title }}</view>
		<!-- 可视滚动区域 -->
		<scroll-view class="scroll" scroll-x="true" show-scrollbar="false">
			<view class="a">A</view>
			<view class="b">B</view>
			<view class="c">C</view>
		</scroll-view>
		<view>双联动</view>
		<view class="ID">
			<view class="left">
				<view v-for="(item, index) in list" :key="index" @click="setId(index)"  >
					
					<view :class="{titles: currentNum==index}">
						{{ item.title }}
					</view>
				</view>
			</view>
			<view class="right">
				<scroll-view class="nowrap" @scrolltolower="scrolltolower" :scroll-y="true" :scroll-into-view="clickId" scroll-with-animation="true" @scroll="scroll">
					<view v-for="(item, index) in list" po2 :key="index">
						<view class="title" :id="'po' + index">{{ item.title }}</view>
						<view v-for="(it, ind) in item.list" :key="ind">{{ it }}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			list: [
				{ title: '中餐', list: ['盖饭', '酸辣粉', '炒米粉', '花蛤'] },
				{ title: '日餐', list: ['寿司', '火腿', '炒米粉', '花蛤'] },
				{ title: '美餐', list: ['牛肉', '奶酪', '面包', '汉堡'] },
				{ title: '德餐', list: ['牛肉', '奶酪', '面包', '汉堡'] },
			],
			clickId: '',
			currentNum:0,
			toplist:[]
		};
	},
	onLoad() {
		//当前的路由信息
		// console.log(this.$route)
		// console.log(ROUTES)
	},
	onReady() {
		this.getNodeInfo();
	},
	methods: {
		// 点击切换
		setId(index) {
			this.clickId = 'po' + index;
			this.currentNum=index;
		},
		scroll(e){
	      let toTop=e.target.scrollTop;
		  console.log(toTop);
		  this.getNodeInfo()//滚动时获取	子标题距离顶部；
		  //滚动子组件同时判断在哪个父组件；滚动的时候,判断当前的scrollTop在当前的那个区间；
		  for(let i=0;i<this.toplist.length;i++){
			  let h1=this.toplist[i];
			  let h2=this.toplist[i+1];
			  if(toTop>=h1&&toTop<=h2){
				  this.currentNum=i;
			  }
		  }
		},
		getNodeInfo(){
			let rel=[];	
			const query = uni.createSelectorQuery().in(this);
			//子标题距离顶部；
			query.selectAll('.title').boundingClientRect(data => {
				console.log(data)
				data.map(res=>{
					rel.push(res.top)
				})
			}).exec();
			this.toplist=rel;
			console.log(this.toplist)
		},
		scrolltolower(){
			setTimeout(()=>{
				this.currentNum=3;
				//这里为解决无法跳到最后一个
				// this.currentNum=this.toplist.length-1;
			},80)
		}
	}
};
</script>

<style lang="scss">
/deep/.uni-scroll-view ::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none;
	width: 0;
	height: 0;
	color: transparent;
	background: transparent;
}
.scroll {
	border: solid 2upx #000;
	white-space: nowrap;
	.a {
		display: inline-block;
		width: 300upx;
		height: 50upx;
		background: red;
	}
	.b {
		display: inline-block;
		width: 300upx;
		height: 50upx;
		background: yellow;
	}
	.c {
		display: inline-block;
		width: 300upx;
		height: 50upx;
		background: green;
	}
}
.ID {
	border: 1px solid red;
	display: flex;
	.left {
		flex: 1;
		border-right: 1px solid red;
	}
	.right {
		flex: 1;
	}
}
// 双联动激活样式
.titles{
	font-size: 20px;
	font-weight: bold;
	background: pink;
}
.title{
	font-size: 20px;
	font-weight: bold;
	background: pink;
}
.nowrap {
	white-space: nowrap;
	height: 200px;
}
</style>
