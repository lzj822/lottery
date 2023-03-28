<template>
	<view class="content">
		<view class="user">
			<view class="vve-flex">
				<u-avatar :src="src" size="64" class="avatar-border" />
				<view class="info">
					<view class="info-top vve-flex-items-start vve-flex-space-between">
						<view class="vve-flex-1">
							<view class="info-title">
								名字名字名字名字名字
							</view>
							<image v-for="index of star" :key="index" class="star" src="/static/star.svg"></image>
						</view>
						<image class="badge" src="/static/badge.svg"></image>
					</view>
					<view class="info-text">
						体彩休市安排：五一（5月1日至5月5日）
					</view>
					<view class="info-text">
						停售，5月6日9:00恢复下单
					</view>
				</view>
			</view>
			<view class="user-bottom vve-flex-space-between">
				<u-button class="user-btn" shape="square">分享店铺</u-button>
				<u-button class="user-btn" shape="square">下载</u-button>
				<u-button class="user-btn" shape="square">微信</u-button>
			</view>
		</view>

		<view class="card vve-flex-space-between">
			<view class="items" v-for="index of 3" :key="index">
				<image class="items-image" src="/static/logo.svg"></image>
				<view class="items-text">
					跟单大厅
				</view>
			</view>
		</view>

		<view class="card card-prefecture">
			<view class="card-title">
				购彩专区
			</view>
			<view class="vve-flex-wrap">
				<view class="card-prefecture-items" v-for="index of 11" :key="index">
					<image class="items-image" src="/static/logo.svg"></image>
					<view class="items-text">
						跟单大厅
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
				star: 5,
				src: 'https://tvax2.sinaimg.cn/crop.123.96.858.858.180/006IQzGply8gu4xvjohb5j60u00u0ack02.jpg?KID=imgbed,tva&Expires=1679896606&ssig=l1OqQMzD8M'
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

	.user {
		width: auto;
		color: white;
		padding: 40rpx 40rpx 30rpx;
		border-radius: 20rpx;
		background: linear-gradient(270deg, #F05712 0%, #FE1531 100%);

		.avatar-border {
			border: 4rpx solid #fff;
		}

		.info {
			width: 100%;
			margin-left: 20rpx;

			&-title {
				font-family: PingFang SC;
				font-size: 32rpx;
				margin-top: 20rpx;
			}

			&-text {
				font-size: 24rpx;
				color: rgba(255, 255, 255, 0.7);
			}

			.star {
				width: 30rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
		}

		.badge {
			width: 112rpx;
			height: 88rpx;
		}

		.user-bottom {
			width: 100%;
			margin-top: 52rpx;

			.user-btn {
				width: 160rpx;
				height: 60rpx;
				background: #FFD278;
				border-color: #FFD278;
				border-radius: 44rpx;
				margin: 0;
			}
		}
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
