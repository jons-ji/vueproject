<template>
    <div class="unit">
        <div class="unit-body">
            <div class="unit-img">
                <img src="../../assets/images2/国际航空服务与管理_40.jpg" alt="">
            </div>
            <ul>
                <li v-for="(item,index) in imag" :key="index">
                    <img :src="item.img" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imag:[
                {img:require("../../assets/images2/国际航空服务与管理_83.jpg")},
                {img:require("../../assets/images2/国际航空服务与管理_83.jpg")},
                {img:require("../../assets/images2/国际航空服务与管理_83.jpg")},
                {img:require("../../assets/images2/国际航空服务与管理_83.jpg")},
                {img:require("../../assets/images2/国际航空服务与管理_83.jpg")},
                {img:require("../../assets/images2/国际航空服务与管理_83.jpg")}
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .unit{
        width:100%;
        margin-top: .15rem;
        display: flex;
        justify-content: center;
        .unit-body{
            width: 3.55rem;
            height: 4.11rem;
            background: white;
            border-radius: .05rem;
            .unit-img{
                width: 3.55rem;
	            height: .55rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                li{
                    width: 1.63rem;
                    height: 1.05rem;
                    background-color: #00ffff;
	                border: solid 1px #c5c5c5;
                    margin-top: .1rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>