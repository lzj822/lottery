<template>
	<view class="content">
		<view class="card card-prefecture">
			<view class="card-title">
				购彩服务
			</view>
			<view class="vve-flex-wrap">
				<view class="card-prefecture-items" v-for="index of 3" :key="index">
					<image class="items-image" src="/static/logo.svg"></image>
					<view class="items-text">
						购彩记录
					</view>
				</view>
			</view>
		</view>

		<view class="card card-prefecture">
			<view class="card-title">
				专家方案
			</view>
			<view class="vve-flex-wrap">
				<view class="card-prefecture-items" v-for="index of 2" :key="index">
					<image class="items-image" src="/static/logo.svg"></image>
					<view class="items-text">
						我的方案
					</view>
				</view>
			</view>
		</view>

		<view class="card card-prefecture">
			<view class="card-title">
				通用设置
			</view>
			<view class="vve-flex-wrap">
				<view class="card-prefecture-items" v-for="index of 3" :key="index">
					<image class="items-image" src="/static/logo.svg"></image>
					<view class="items-text">
						设置
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #F3F3F3;
	}
</style>

<style lang="scss" scoped>
	.content {
		padding: 24rpx;
	}

	.card {
		width: auto;
		padding: 40rpx 54rpx;
		border-radius: 20rpx;
		background: #FFFFFF;
		margin-top: 20rpx;

		.items {
			text-align: center;

			&-image {
				width: 80rpx;
				height: 80rpx;
				margin-bottom: 5rpx;
			}

			&-text {
				font-family: PingFang SC;
				font-size: 28rpx;
			}
		}
	}

	.card-prefecture {
		padding: 30rpx 34rpx;
		.card-title {
			font-family: PingFangSC-Semibold;
			font-size: 32rpx;
		}
		&-items {
			text-align: center;
			margin: 40rpx 62rpx 0 0;

			&:nth-child(4n) {
				margin: 40rpx 0;
			}
		}
	}
</style>
