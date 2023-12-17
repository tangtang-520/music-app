<template>
  <page-meta
    :page-style="show ? 'overflow:hidden' : 'overflow:auto'"
  ></page-meta>
  <u-popup :show="show" :round="25" @close="close" @open="open">
    <view class="listCont">
      <view class="closeClass">
        <u-icon @tap="close" name="close" color="#c6c6c6" size="15"></u-icon>
      </view>
      <u-list height=" '60vh' ">
        <u-list-item v-for="(item,index) in listData" :key="item.resourceId">
          <u-cell :border="false" @tap="playSong(item)">
            <template #title>
              <view>
                <text>{{ item.data.name }}</text>
                <text>·</text>
                <text>{{ songMatch(item) }}</text>
              </view>
            </template>
            <template #right-icon>
              <u-icon name="close" color="#c6c6c6" size="15"></u-icon>
            </template>
          </u-cell>
        </u-list-item>
      </u-list>
    </view>
  </u-popup>
</template>
<script setup>
const props = defineProps({
  listData: Array,
});

const emit = defineEmits(['changeMusic'])

const show = ref(false);

// 格式化歌手
const songMatch = (item) => {
  const songArr = [];
  item.data.ar.forEach((ele) => {
    songArr.push(ele.name);
  });
  return songArr.join("/");
};

const playSong = (item) => {
    emit('changeMusic', item )
}

const close = () => {
  show.value = false;
};

const open = () => {
  show.value = true;
};

defineExpose({
  open,
});
</script>
<style lang="scss" scoped>
.listCont {
  height: 60vh;
  padding: 40rpx 20rpx;
  overflow: auto;
  .closeClass {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20rpx;
  }
}
</style>
