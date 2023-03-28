<template>
	<view class="content">
		<image class="logo" src="/static/logo.svg"></image>
		<view class="title-content" style="margin-top: 60rpx;">
			<text class="title" :class="{ active: type === 'message' }" @tap="contentChangeHandler('message')">快捷登录</text>
      <u-line direction="col" length="24rpx" margin="8rpx 30rpx"></u-line>
      <text class="title" :class="{ active: type === 'input' }" @tap="contentChangeHandler('input')">账号密码登录</text>
		</view>

    <view v-if="type === 'message'" style="margin-top: 80rpx;">
      <u--input
        placeholder="请输入手机号"
        shape="circle"
        type="number"
        fontSize="16"
        :customStyle="{
          height: '64rpx'
        }"
      >
        <template slot="prefix">
          <u-row>
            <text>+86</text>
            <u-line direction="col" length="24rpx" margin="8rpx 20rpx"></u-line>
          </u-row>
        </template>
      </u--input>
      <u--input
        style="margin-top: 40rpx;"
        placeholder="请输入验证码"
        type="number"
        shape="circle"
        fontSize="16"
        :customStyle="{
          height: '64rpx'
        }"
      >
        <template slot="suffix">
					<u-code
						ref="uCode"
						@change="codeChange"
						:seconds="seconds"
						changeText="x秒重新获取"
					></u-code>
					<u--text
						@click="getCode"
						:text="tips"
						color="#F92927"
            size="14"
					></u--text>
				</template>
      </u--input>
    </view>

    <view v-if="type === 'input'" style="margin-top: 80rpx;">
      <u--input
        v-model="inputInfo.mobile"
        placeholder="请输入账号"
        shape="circle"
        type="number"
        fontSize="16"
        :customStyle="{
          height: '64rpx'
        }"
      >
      </u--input>
      <u--input
        v-model="inputInfo.password"
        style="margin-top: 40rpx;"
        placeholder="请输入密码"
        type="number"
        shape="circle"
        fontSize="16"
        :customStyle="{
          height: '64rpx'
        }"
      >
      </u--input>
    </view>    
    
    <view style="margin-top: 80rpx;">
      <button class="login-button" @tap="loginHandler">登录</button>
    </view>
    <u-row justify="space-between" style="margin-top: 40rpx;">
      <text class="tip-text">快速注册</text>
      <text class="tip-text">遇到问题？</text>
    </u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
        seconds: 60,
        type: 'message',
        inputInfo: {
          mobile: '',
          password: '',
        }
				// refCode: null
			}
		},
		onLoad() {
      
		},
		methods: {
      codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
      contentChangeHandler (type) {
        this.type = type;
      },
      loginHandler () {
        await uni.$u.http.post('https://m.51gee.com/yx-store-api/api/login', {
          ...this.inputInfo
        }) 
      }
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
    padding: 0 48rpx;
	}

  .logo {
		height: 96rpx;
		width: 96rpx;
		margin-top: 100rpx;
	}

  .title-content {
    display: flex;
    align-items: center;
    height: 40rpx;

    .title {
      height: 32rpx;
      font-size: 32rpx;
      font-weight: normal;
      line-height: 32rpx;
      letter-spacing: 0px;

      color: #000000;
      opacity: 0.4;
    }

    .active {
      height: 40rpx;
      font-size: 40rpx;
      line-height: 40rpx;
      opacity: 1;
      color: #000;
    }
  }

  // .title-content .title {
	// 	display: flex;
	// 	justify-content: center;
	// }

  .tip-text {
    height: 28rpx;
    opacity: 0.4;

    font-size: 28rpx;
    font-weight: normal;
    line-height: 28rpx;
    letter-spacing: 0em;

    color: #000000;
  }

  .login-button {
    height: 88rpx;
    border-radius: 44rpx;
    line-height: 88rpx;
    font-size: 32rpx;
    color: #fff;
    background: linear-gradient(270deg, #FD172F 0%, #F15115 100%, #A33AFF 100%);
  }
</style>
