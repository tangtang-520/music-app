<template>
  <viewContiner title="其他">
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

const litsData = [
  {
    iconName: "email",
    name: "设置",
  },
  {
    iconName: "email",
    name: "深色模式",
  },
  {
    iconName: "email",
    name: "音乐黑名单",
  },

  {
    iconName: "email",
    name: "音乐闹钟",
    line: false,
  },
];
</script>
<style lang="scss" scoped></style>
