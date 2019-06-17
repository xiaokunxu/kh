<template>
    <div class="app-view-wrapper">
        <header>
            <!-- <the-title /> -->
            <div class="user-top">
                <img src="../../assets/images/return.png" alt="" @click="toBack">
                <span class="top-middle">个人信息</span>
                <span>保存</span>
            </div>
        </header>
        <div class="container">
            <div class="section1">
                <div class="section avatar">
                    <div class="left-layout">
                        <img src="../../assets/images/ic_Receipt_b.png" alt="">
                    </div>
                    <div class="right-layout">
                        <span>修改头像</span>
                        <img src="../../assets/images/link.png" alt="">
                    </div>
                </div>
                <div class="section">
                    <div class="left-layout">
                        <span>用户ID</span>
                    </div>
                    <div class="right-layout">
                        <span>{{userInfo.UserAccount}}</span>
                    </div>
                </div> 
                <div class="section">
                    <div class="left-layout">
                        <span>昵称</span>
                    </div>
                    <div class="right-layout">
                        <span>昵称</span>
                    </div>
                </div> 
                <div class="section" @click="onShowGender">
                    <div class="left-layout">
                        <span>性别</span>
                    </div>
                    <div class="right-layout">
                        <span>{{gender}}</span>
                        <img src="../../assets/images/link.png" alt="">
                    </div>
                </div> 
                <div class="section" @click="onShowDate">
                    <div class="left-layout">
                        <span>生日</span>
                    </div>
                    <div class="right-layout">
                        <span>{{userInfo.UserBirthday}}</span>
                        <img src="../../assets/images/link.png" alt="">
                    </div>
                </div>
                <div class="section" @click="onShowCity">
                    <div class="left-layout">
                        <span>城市</span>
                    </div>
                    <div class="right-layout">
                        <span>{{city}}</span>
                        <img src="../../assets/images/link.png" alt="">
                    </div>
                </div> 
            </div>
            <div class="section2">
                <div class="section" @click="toChangeTel">
                    <div class="left-layout">
                        <span>修改手机</span>
                    </div>
                    <div class="right-layout">
                        <span>{{tel}}</span>
                        <img src="../../assets/images/link.png" alt="">
                    </div>
                </div> 
                <div class="section" @click="toChangePwd">
                    <div class="left-layout">
                        <span>修改密码</span>
                    </div>
                    <div class="right-layout">
                        <img src="../../assets/images/link.png" alt="">
                    </div>
                </div> 
            </div>
        </div>
        <van-popup v-model="isShowGender" position="bottom">
            <van-picker 
                :columns="columns" 
                @change="onChangeGender" 
                />
        </van-popup>
        <van-popup v-model="isShowDate" position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="onConfirm"
                @cancel="onCancel"
                />
        </van-popup>
        <van-popup v-model="isShowCity" position="bottom">
            <van-area 
                :area-list="areaList" 
                :columns-num="2"
                @confirm="onConfirmCity"
                @cancel="onCancelCity"
            />
        </van-popup>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import areaList from '../../assets/js/area'
import TheTitle from 'components/TheTitle.vue'
import { DatetimePicker, Popup, Area, Picker } from 'vant'
import { toASCII } from 'punycode';

export default {
    components: {
        [DatetimePicker.name]: DatetimePicker,
        [Popup.name]: Popup,
        [Area.name]: Area,
        [Picker.name]: Picker,
        TheTitle,
    },
    data(){
        return{
            currentDate: new Date(),
            isShowGender: false,
            columns: ['男', '女'],
            isShowDate: false,
            isShowCity: false,
            gender: '',
            areaList,
            birthday: '',
            city: '',
            tel: '',
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    created(){
        this.init()
    },
    methods: {
        init(){
            
        },
        toBack(){
            this.$router.push('../user')
        },
        toChangeTel(){
            this.$router.push('../userInfo/changetel')
        },
        toChangePwd(){
            this.$router.push('../userInfo/ChangePassword')
        },
        onShowGender(){
            this.isShowGender = true
        },
        onChangeGender(picker, value, index){
            this.gender = value
            this.isShowGender = false
        },
        onShowDate(){
            this.isShowDate = true
        },
        onConfirm(val){
            console.log(val.getYear())
            this.birthday = val
            this.isShowDate = false
        },
        onCancel(){
            this.isShowDate = false
        },
        onShowCity(){
            this.isShowCity = true
        },
        onConfirmCity(val){
            this.city = val[1].name
            this.isShowCity = false
        },
        onCancelCity(){
            this.isShowCity = false
        }
    }
}
</script>
<style scoped>
    .app-view-wrapper{
        width: 100%;
        height: 100vh;
        background: #F3F3F4;
        overflow: hidden;
    }
    .user-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px;
        background: #fff;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #000;
    }
    .user-top img{
        width: 10px;
    }
    .user-top .top-middle{
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .container .section1,
    .container .section2{
        background: #fff;
    }
    .container .section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 16px;
        margin-left: 12px;
        margin-right: 12px;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        color: #000;
    }
    .container .section1 .section:first-child{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .left-layout img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    .right-layout{
        font-size: 14px;
        color: #939393;
    }
    .right-layout img{
        width: 8px;
        margin-left: 10px;
        vertical-align: middle;
    }
    .section2{
        margin-top: 10px;
    }
    .section2 .section:last-child{
        border-bottom: none;
    }
    
</style>
