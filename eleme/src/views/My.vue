<template>
    <div>
        <Myheader />
        <Mymoney />
        <Mysite />
    </div>
</template>
<script>
import Myheader from "@/components/Myheader.vue";
import Mymoney from "@/components/Mymoney.vue";
import Mysite from "@/components/Mysite.vue";
export default {
    components: {
        Myheader,
        Mymoney,
        Mysite
    }
}
</script>

