<template>
    <div class="commodity-list">
        <search-input></search-input>
        <commodity-list></commodity-list>
    </div>
</template>
<script>
import SearchInput from 'components/SearchInput.vue'
import CommodityList from 'components/CommodityList.vue'

export default {
    components: {
        SearchInput,
        CommodityList,
    }
}
</script>
