<template>
  <div class="mine-loading" :class="{'mine-loading-inline':inline}">
  <span class="mine-loading-indicator" v-if="indicator === 'on'">
    <slot>
      <img src="./loading.gif" alt="loading">
    </slot>
  </span>
    <span class="mine-loading-text" v-if="text" v-text="text"></span>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      indicator: {
        type: String,
        default: 'on',
        validate(vale) {
          return ['on', 'off'].indexOf(vale) > -1
        }
      },
      text: {
        type: String,
        default: '正在加载...',
      },
      inline: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/mixins";

  .mine-loading {
    overflow: hidden;
    width: 100%;
    height: 100%;
    @include flex-center(column);

    &.mine-loading-inline {
      flex-direction: row;

      .mine-loading-indicator ~ .mine-loading-text {
        margin-top: 0;
        margin-left: 6px;
      }
    }
  }

  .mine-loading-indicator ~ .mine-loading-text {
    margin-top: 6px;
  }

</style>
