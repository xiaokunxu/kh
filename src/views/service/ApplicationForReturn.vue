<template>
    <div class="app-view-wrapper">
        <header>
            <the-title title="申请退货"></the-title>
        </header>
        <div class="container">
            <div class="reason return-cell">
                <span>退货原因</span>
                <div class="reason-right" @click="selectReason">
                    <span>{{selectReasonTxt}}</span>
                    <img src="../../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                </div>
            </div>
            <div class="question return-cell">
                <p>问题描述</p>
                <textarea class="question-area" placeholder="请输入问题描述的内容"></textarea>
            </div>
            <div class="upload return-cell">
                <p>上传凭证<span>（最多三张照片）</span></p>
            </div>
            <div class="contact return-cell">
                <p>联系方式</p>
                <div class="contact-item">
                    <label for="">
                        <span>联系人</span>
                        <input type="text" placeholder="请输入联系人" v-model="username">
                    </label>
                    <label for="">
                        <span>联系电话</span>
                        <input type="number" placeholder="请输入电话号码" v-model="usermobile">
                    </label>
                </div>
            </div>
            <div class="submit">
                <button @click="onSubmit">提交</button>
            </div>
            <div class="tips">
                <p class="tips-title">温馨提示：</p>
                <p><span></span>商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</p>
                <p><span></span>提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</p>
                <p><span></span>退货处理成功后退款金额将原路返回到您的支持账户中。</p>
            </div>
        </div>
        <van-popup v-model="isShow" position="bottom">
            <van-picker :columns="columns" @change="onChange" />
        </van-popup>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'
import { Popup, Picker, Toast } from 'vant'

export default {
    components: {
        [Popup.name]: Popup,
        [Picker.name]: Picker,
        [Toast.name]: Toast,
        TheTitle,
    },
    data(){
        return{
            isShow: false,
            columns: ['质量问题', '配件问题', '少件/漏发', '与商品描述不符', '包装/商品残破', '发票问题', '其它'],
            selectReasonTxt: '请选择退货原因',
            usermobile: '',
            username: ''
        }
    },
    methods: {
        selectReason(){
            this.isShow = true
        },
        onChange(picker, value, index) {
            this.selectReasonTxt = value
            this.isShow = false
        },
        onSubmit(){
            // let postData = '[["CommodityPicture","RefundReason","DealNumber","DealStatement","RefundType","CommodityCode","DealMoney","RefundWaybill","RefundAccount","UserName","UserMobile"],["'+CommodityPicture+'","'+this.selectReasonTxt+'","'+this.$route.query.DealNumber+'","'+this.$route.query.DealNumber+'","1","'+CommodityCode+'","'+DealMoney+'","0","'+RefundAccount+'","'+this.username+'","'+this.usermobile+'"]]'
            // Order.Reformat({
            //     "SOURCE": "TEST",
            //     "CREDENTIALS": "0",
            //     "ADDRESS": "192.168.1.195",
            //     "TERMINAL": "0",
            //     "INDEX": "20170714",
            //     "METHOD": "Reformat",
            //     "UserAccount": "test001",
            //     "DATA": encodeURI(postData)
            // }).then(res => {
            //     console.log(res.DATA[0])
            // })
            this.$router.push('../order/serviceSuccess')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container{
        padding-top 50px
        background #f6f6f6
        text-align left
        font-size 15px
        color #000
        .return-cell{
            margin-top 10px
            padding 15px 10px
            background #fff
        }
        .reason{
            display flex
            justify-content space-between
            align-items center
            .reason-right{
                display flex
                align-items center
                span{
                    color #939393
                }
                img{
                    width 8px
                    margin-left 8px
                    vertical-align middle
                }
            }
        }
        .question-area{
            width 100%
            height 100px
            border none
            resize none
            padding 10px 0
            font-size 14px
            line-height 22px
        }
        .contact{
            label{
                display block
            }
            input{
                width 240px
                margin-left 10px
                padding 10px 0
            }
        }
        .submit{
            padding 0 10px
            button{
                width 100%
                margin 20px 0
                padding 14px 0
                background #FF3948
                border none 
                border-radius 30px
                font-size 16px
                color #fff
            }
        }
        .tips{
            padding 0 10px 10px 10px
            font-size 13px
            color #939393
            line-height 22px
            .tips-title{
                color #FF3948
            }
            span{
                display inline-block
                width 5px
                height 5px
                margin-right 5px
                background #939393
                border-radius 50%
            }
        }
    }
    
</style>

