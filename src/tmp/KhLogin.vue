<template>
    <div class="layout">
        <div class="header_tit">
            <em class="khlogo"></em>
        </div>
        <div>
            <!-- 输入框 -->
            <!-- <label v-show="isSmsLogin" class="login_user">
                <input type="text" class="item_account" autocomplete="off" placeholder="账号或手机号">
            </label> -->
            <label class="login_user">
                <div v-show="!isSmsLogin" class="country_list">
                    <div class="countrycode_selector">
                        <span class="country_code">
                            <tt class="countrycode-value">+86</tt>
                            <i class="icon_arrow_down"></i>
                        </span>
                    </div>
                </div>
                <input type="text" class="item_account" autocomplete="off" :placeholder="placeholderTxt">
            </label>
            <label v-show="isSmsLogin" class="pwd_panel">
                <input type="password" class="item_account" placeholder="密码" autocomplete="off">
                <!-- <i class="eye pwd_eye">eye</i> -->
            </label>
            <label v-show="!isSmsLogin" class="pwd_panel">
                <input type="number" class="item_account" placeholder="短信验证码" autocomplete="off">
                <a href="javascript:;" class="sms_code">获取验证码</a>
            </label>
            <div class="panel">
                <div class="registered">快速注册</div>
                <div class="code-login">手机验证登录</div>
            </div>
            <!-- 错误信息 -->
            <!-- <div class="err_tip">
                <em class="icon_error">err</em>
                <span class="error-con">请输入密码</span>
            </div> -->
            <div class="btns_bg">
                <input type="button" class="btnadpt" value="登录">
            </div>
            <div class="other_panel">
                <a class="outer-link">忘记密码？</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isSmsLogin: true,
        }
    },
    computed: {
        placeholderTxt(){
            return this.isSmsLogin ? '账号或手机号' : '手机号'
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
    .layout{
        padding: 0 28px;
        position: relative;
        box-sizing: border-box;
    }
    .header_tit{
        padding: 30px 0 10px;
        text-align: center;
    }
    .khlogo{
        width: 48px;
        height: 48px;
        margin: 0 auto 15px;
        display: block;
        background-image: url(../assets/images/milogo.png);
    }
    .login_user, .pwd_panel{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d3d3d3;
    }
    .pwd_panel{
        justify-content: space-between;
    }
    .country_list{
        padding: 1px 10px 1px 0;
        margin-right: 8px;
        color: #4a4a4a;
        display: block;
        overflow: hidden;
    }
    .countrycode_selector{
        position: relative;
        animation: fade-in ease-in-out .5s;
    }
    @keyframes fade-in{
        0%{
            left: -100%;
        }
        100%{
            left: 0;
        }
    }
    .country_code{
        display: flex;
        align-items: center;
    }
    .countrycode-value{
        margin-right: 2px;
        color: #9b9b9b;
        font-size: 16px;
    }
    .panel{
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        margin-bottom: 10px; 
        font-size: 14px;
    }
    .panel .registered{
        padding: 4px 14px 4px 0;
    }
    .panel .code-login{
        padding: 4px 0 4px 14px;
    }
    .btns_bg{
        padding-top: 24px;
    }
    .btnadpt{
        width: 100%;
        display: block;
        padding: 12px 0;
        margin-bottom: 24px;
        border-radius: 30px;
        background-color: #ff6700;
        text-align: center;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
    .outer-link{
        padding: 0 9px;
        margin-top: 10px;
        color: #646464;
    }
    .sms_code{
        padding: 6px 12px;
        background: #ff6700;
        border-radius: 15px;
        font-size: 14px;
        color: #fff;
    }
</style>
