<template>
    <div class="foot">
        <footer>
            <div>
                <img src="@/assets/images/首页改1_123.gif" alt="">
            </div>
            <div>
                <img src="@/assets/images/首页改1_12007 (2).gif" alt="">
            </div>
            <div>
                <img src="@/assets/images/首页改1_12007 (3).gif" alt="">
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
    .foot{
        footer{
            width: 3.75rem;
            height: .42rem;
            // background: #EAEAEA;
            position: fixed;
            left: 50%;
            bottom: 0;
            transform: translate(-50%,0);
            display: flex;
            z-index: 9999999;
            justify-content: space-between;
            div{
                width: 33%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>