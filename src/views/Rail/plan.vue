<template>
    <div class="plan">
        <div class="plan-body">
            <div class="plan-img1">
                <img src="../../assets/images2/国际航空服务与管理_22.jpg" alt="">
            </div>
            <div class="plan-img2">
                <img src="../../assets/images2/国际航空服务与管理_02.jpg" alt="">
            </div>
            <ul class="plan-list">
                <li v-for="(item,index) in highList" :key="index">{{item.text}}</li>
            </ul>
         </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            highList:[{
                text:"伴随着近几年铁路格局的改变，铁路事业的发展，形成了在铁路工程和服务领域的人才紧缺，这一专业的人才呈现出供不应求的状态，大量高铁乘务专业的人才缺口急需填补。因此，未来高铁专业的就业前景十分广阔。"
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
    .plan{
        width:100%;
        margin-top: .15rem;
        margin-bottom: .15rem;
        display: flex;
        justify-content: center;
        .plan-body{
            width: 3.55rem;
            height: 2.94rem;
            background: white;
            border-radius: .05rem;
            .plan-img1{
                width: 3.55rem;
	            height: .55rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .plan-img2{
                width: 3.55rem;
	            height: 1.3rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .plan-list{
                width: 3.33rem;
	            height: .89rem;
                padding: .1rem .1rem .1rem .1rem;
                font-size: .14rem;
                color: #000000;
                li{
                    line-height: .19rem;
                    text-align: justify;
                }
            }
        }   
    }
</style>