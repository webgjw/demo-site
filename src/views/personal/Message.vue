<template>
<h1>个人中心消息页面 -- {{ t('sitename') }}</h1>
<el-pagination :page-size="100" layout="total, prev, pager, next" :total="1000"></el-pagination>
</template>

<script setup>
const { t } = useI18n();
</script>