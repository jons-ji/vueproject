<template>
    <div class="high_speed">
        <Header/>
        <Liner/>
        <High/>
        <Major/>
        <Plan/>
        <Unit/>
        <Foot/>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Liner from "../views/Rail/liner.vue"
import High from "../views/Rail/High .vue"
import Major from "../views/Rail/major.vue"
import Plan from "../views/Rail/plan.vue"
import Unit from "../views/Rail/unit.vue"
import Foot from "../views/Rail/Foot.vue"

export default{
    components:{
        Header,
        Liner,
        High,
        Major,
        Plan,
        Unit,
        Foot
    }
}
</script>

<style lang="scss" scoped>
    .high_speed{
        background: #eaeaea;
        width: 100%;
        padding: 0 0 .42rem 0;
    }
</style>