<template>
  <view class="popupCont">
    <u-popup
      :show="show"
      @close="close"
      :round="10"
      :duration="300"
      :closeOnClickOverlay="true"
    >
      <view class="countryCont pd10" style="height: 90vh">
        <view mgb10>
          <view class="close">
            <u-icon name="close" @tap="close" size="20"></u-icon>
            <text class="closetText">选择国家和地区</text>
          </view>
          <scroll-view
            :scroll-y="true"
            :scroll-into-view="scrollIntoView"
            class="allCountry"
            @scroll="scroll"
          >
            <view v-for="item in countryData">
              <view :id="item.label === '常用' ? 'CU' : item.label " class="countryLabel">{{
                item.label
              }}</view>
              <view v-for="ele in item.countryList">
                <view class="eleSty" @tap="tapCountyCode(ele)">
                  <text>{{ ele.zh }}</text>
                  <text class="codeSty">{{ "+" + ele.code }}</text>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
        <view v-show="nodeShow" class="anchor">
          <view class="nodeSty" v-for="node in countryData" @tap="scorllTo(node)">
            {{ node.label === "常用" ? "常" : node.label }}
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script setup>
const props = defineProps({
  countryData: Array,
});
const emit = defineEmits(['changCountryCode'])

const nodeShow = ref(true)
const show = ref(false);
const close = () => {
  show.value = false;
};

const open = () => {
  show.value = true;
};

// 锚点滚动
const scrollIntoView = ref("");
const scorllTo = (data) => {
  scrollIntoView.value = data.label === '常用' ? 'CU' : data.label;
};
const scroll = () => {
  scrollIntoView.value = "";
};

// 选择国家code
const tapCountyCode = (data) =>{
  emit('changCountryCode', data.code)
  close()
}

defineExpose({
  open,
});
</script>
<style lang="scss" scoped>
.popupCont {
  .countryCont {
    position: relative;
    .close {
      display: flex;
      align-items: center;
      .closetText {
        margin-left: 20rpx;
        font-weight: bold;
      }
    }
  }
  .allCountry {
    height: calc(90vh - 40rpx);
    overflow: auto;
    .countryLabel {
      position: sticky;
      top: 0rpx;
      font-weight: bold;
      background-color: #fff;
      padding: 20rpx 0rpx;
      z-index: 1;
    }
    .eleSty {
      font-size: 26rpx;
      display: flex;
      align-items: center;
      padding: 25rpx 60rpx 25rpx 0rpx;
      justify-content: space-between;
      border-bottom: 2rpx solid #eee;
      .codeSty {
        color: #a8a8a8;
      }
    }
  }
  .anchor {
    position: absolute;
    top: 50%;
    right: 20rpx;
    transform: translateY(-50%);
    width: 40rpx;
    background-color: #cacaca;
    color: #fff;
    font-size: 24rpx;
    text-align: center;
    border-radius: 20rpx;
    z-index: 3;
    .nodeSty {
      padding: 10rpx 0rpx;
    }
  }
}
</style>
