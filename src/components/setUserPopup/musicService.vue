<template>
  <viewContiner :title="title">
    <listView
      v-for="item in litsData"
      :iconName="item.iconName"
      :name="item.name"
      :line="item.line"
    ></listView>
  </viewContiner>
</template>
<script setup>
import viewContiner from "../viewContiner/viewContiner.vue";
import listView from "./listView.vue";

const title  = '音乐服务'

const litsData = ref([
  {
    iconName: "email",
    name: "免费听歌",
  },
  {
    iconName: "email",
    name: "有票",
  },
  {
    iconName: "email",
    name: "视频彩铃",
    line: false
  },
]);
</script>
<style lang="scss" scoped></style>
