<template>
    <div class="layout">
        <div>
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
        </div>
    </div>
</template>
