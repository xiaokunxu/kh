<template>
    <div class="adderss-layout">
        <header class="address-header">
            <the-title :title="title"/>
        </header>
        <div class="app-view-wrap-address">
            <van-address-edit
                :area-list="areaList"
                :address-info="addressInfo"
                show-postal
                :show-delete="showDelete"
                show-set-default
                @save="onSave"
                @delete="onDelete"
                @change-default="changeDefault"
            />
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'
import areaList from '../assets/js/area'
import { AddressEdit, Toast } from 'vant'
import Address from '../api/address'
import { setTimeout } from 'timers';

export default {
    components: {
        [AddressEdit.name]: AddressEdit,
        [Toast.name]: Toast,
        TheTitle
    },
    data() {
        return {
            title: '',
            areaList,
            addressInfo: {},
            showDelete: false,
            addressID: ''
        }
    },
    created(){
        this.init()
    },
    methods: {
        init(){
            if(this.$route.query.name){
                this.title = '编辑收货地址'
                this.showDelete = true
            }else{
                this.title = '添加收货地址'
            }
            this.addressInfo.name = this.$route.query.name
            this.addressInfo.tel = this.$route.query.tel
            this.addressInfo.province = this.$route.query.ConsigneeProvince
            this.addressInfo.city = this.$route.query.ConsigneeCity
            this.addressInfo.county = this.$route.query.ConsigneeCounty
            this.addressInfo.addressDetail = this.$route.query.ConsigneeAddress
            this.addressInfo.postalCode = this.$route.query.ConsigneePostalcode
            this.addressID = this.$route.query.addressID
            if(this.$route.query.ConsigneeStatus == '0'){
                this.addressInfo.isDefault = true
            }else{
                this.addressInfo.isDefault = false
            }
        },
        changeDefault(value){
            console.log(value)
        },
        onSave(content) {
            if(!this.showDelete){
                let postData = '[["UserName","UserMobile","ConsigneeProvince","ConsigneeCity","ConsigneeCounty","UserAddress","ConsigneePostalcode","AddressStatus"],["'+content.name+'","'+content.tel+'","'+content.province+'","'+content.city+'","'+content.county+'","'+content.addressDetail+'","'+content.postalCode+'","0"]]'
                Address.UserAddressManage({
                    "SOURCE": "TEST",
                    "CREDENTIALS": "0",
                    "ADDRESS": "192.168.1.195",
                    "TERMINAL": "0",
                    "INDEX": "20170714",
                    "METHOD": "UserAddressManage",
                    "UserAccount": "test001",
                    "Status": "1",
                    "DATA": encodeURI(postData)
                }).then(res => {
                    console.log(res)
                    if(res.DATA[0] === 1){
                        Toast.success('添加成功')
                        setTimeout(() => {
                            this.$router.back(-1)
                        }, 2000)
                    }else{
                        Toast.fail('添加失败')
                    }
                })
            }else{
                let postData = '[["ID","UserName","UserMobile","ConsigneeProvince","ConsigneeCity","ConsigneeCounty","UserAddress","ConsigneePostalcode","AddressStatus"],["'+this.addressID+'","'+content.name+'","'+content.tel+'","'+content.province+'","'+content.city+'","'+content.county+'","'+content.addressDetail+'","'+content.postalCode+'","1"]]'
                Address.UserAddressManage({
                    "SOURCE": "TEST",
                    "CREDENTIALS": "0",
                    "ADDRESS": "192.168.1.195",
                    "TERMINAL": "0",
                    "INDEX": "20170714",
                    "METHOD": "UserAddressManage",
                    "UserAccount": "test001",
                    "Status": "0",
                    "DATA": encodeURI(postData)
                }).then(res => {
                    console.log(res)
                    if(res.DATA[0] === 1){
                        Toast.success('修改成功')
                        setTimeout(() => {
                            this.$router.back(-1)
                        }, 2000)
                    }else{
                        Toast.fail('修改失败')
                    }
                })
            }
        },  
        onDelete(content) {
            let postData = '[["ID","UserName","UserMobile","ConsigneeProvince","ConsigneeCity","ConsigneeCounty","UserAddress","ConsigneePostalcode","AddressStatus"],["'+this.addressID+'","'+content.name+'","'+content.tel+'","'+content.province+'","'+content.city+'","'+content.county+'","'+content.addressDetail+'","'+content.postalCode+'","1"]]'
                Address.UserAddressManage({
                    "SOURCE": "TEST",
                    "CREDENTIALS": "0",
                    "ADDRESS": "192.168.1.195",
                    "TERMINAL": "0",
                    "INDEX": "20170714",
                    "METHOD": "UserAddressManage",
                    "UserAccount": "test001",
                    "Status": "2",
                    "DATA": encodeURI(postData)
                }).then(res => {
                    console.log(res)
                    if(res.DATA[0] === 1){
                        Toast.success('删除成功')
                        setTimeout(() => {
                            this.$router.back(-1)
                        }, 2000)
                    }else{
                        Toast.fail('删除失败')
                    }
                })
        }
    }
}
</script>

<style lang="stylus">
    .app-view-wrap-address .van-cell{
        text-align left 
        align-items center
    }
    .adderss-layout{
        height 100vh
        background #f3f3f3
    }
    .app-view-wrap-address{
        padding-top 51px
    }
    .van-button--danger{
        background-color #FF3947
        border 1px solid #FF3947
    }
</style>

