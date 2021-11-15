<template>
    <div class="high">
        <div class="high-body">
            <div class="high-img1">
                <img src="../../assets/images2/国际航空服务与管理_22.jpg" alt="">
            </div>
            <div class="high-img2">
                <img src="../../assets/images2/国际航空服务与管理_02.jpg" alt="">
            </div>
            <ul class="high-list">
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
                text:"高铁乘务专业全称是高速铁路客运乘务专业，是国家教育部面向铁路行业开设的高等职业教育专业。其专业学制为三年。就业主要集中在铁路旅客列车客运乘务及其相关方向。"
            },{
                text:"高铁乘务专业是目前的一大热门专业，再加之中国目前的铁路系统技术和运营里程都是全世界规模最大的国家之一，因此我国的高铁行业发展将会持续走高，高铁乘务专业的毕业生在就业前景和发展前景上是很光明的。目前我国的很多高铁院校都是与企业实行资源互补，校企合作的发展方向和趋势，高铁乘务专业的学生在毕业之前学校一般会提供实习机会，在高铁企业实习期间，表现突出的学生会有优先就业的机会。"
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
    .high{
        width:100%;
        margin-bottom: .15rem;
        display: flex;
        justify-content: center;
        .high-body{
            width: 3.55rem;
            height: 4.87rem;
            background: white;
            border-radius: .05rem;
            .high-img1{
                width: 3.55rem;
	            height: .55rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .high-img2{
                width: 3.55rem;
	            height: 1.3rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .high-list{
                width: 3.32rem;
	            height: 2.84rem;
                padding: .1rem .1rem .1rem .1rem;
                font-size: .14rem;
                color: #000000;
                li{
                    line-height: .22rem;
                    text-align: justify;
                }
            }
        }   
    }
</style>