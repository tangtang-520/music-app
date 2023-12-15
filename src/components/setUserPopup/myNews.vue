<template>
  <viewContiner>
    <listView
      v-for="item in litsData"
      :iconName="item.iconName"
      :name="item.name"
      :line = item.line
    ></listView>
  </viewContiner>
</template>
<script setup>
import viewContiner from "../viewContiner/viewContiner.vue";
import listView from "./listView.vue";

const litsData = [
  {
    iconName: "email",
    name: "我的消息",
  },
  {
    iconName: "email",
    name: "云贝中心",
  },
  {
    iconName: "email",
    name: "创作者中心",
    line: false
  },
];
</script>
<style lang="scss" scoped>
.newsList {
  display: flex;
  align-content: center;
  justify-content: space-between;
  .news {
    display: flex;
    align-items: center;
  }
}
</style>
