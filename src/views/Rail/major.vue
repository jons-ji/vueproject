<template>
    <div class="major">
        <div class="major-body">
            <div class="major-img1">
                <img src="../../assets/images2/国际航空服务与管理_22.jpg" alt="">
            </div>
            <div class="major-img2">
                <img src="../../assets/images2/国际航空服务与管理_02.jpg" alt="">
            </div>
            <ul class="major-list">
                <li v-for="(item,index) in highList" :key="index">
                    <em></em>
                    <span>{{index+1}}.{{item.title}}</span>
                    {{item.text}}
                </li>
            </ul>
         </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            highList:[{
                title:"工作前景好",
                text:"我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。"
            },{
               title:"工作前景好",
                text:"我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。"
            },{
               title:"工作前景好",
                text:"我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。"
            },{
               title:"工作前景好",
                text:"我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。"
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
    .major{
        width:100%;
        margin-top: .15rem;
        margin-bottom: .15rem;
        display: flex;
        justify-content: center;
        .major-body{
            width: 3.55rem;
            height: 5.96rem;
            background: white;
            border-radius: .05rem;
            .major-img1{
                width: 3.55rem;
	            height: .55rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .major-img2{
                width: 3.55rem;
	            height: 1.3rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .major-list{
                width: 3.32rem;
	            // height: 4.32rem;
                padding: .1rem .1rem .1rem .1rem;
                font-size: .14rem;
                color: #000000;
                li{
                    line-height: .25rem;
                    text-align: justify;
                    span{
                        display: block;
                    }
                }
            }
        }   
    }
</style>