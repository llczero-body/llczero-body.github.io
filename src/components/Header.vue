<script setup lang="ts">
let active = ref('home')
let isMenuOpen = ref(false)
const toggleMenu = (obj: Object): void => {
  console.log(obj, '123213')
  active.value = obj.value
}
</script>

<template>
  <el-affix style="width: 100%" :offset="10">
    <el-col :span="24">
      <FrostedGlass>
        <div class="herader-wrapper frosted-calss-text">
          <div class="right-wrapper">
            <div class="logo-title">zero的博客</div>
            <div class="hidden-xs-only right">
              <div :class="[
                'item',
                active === item.value ? 'active frostedGlass' : ''
              ]" @click="toggleMenu(item)" v-for="(item, index) in TOP_NAVIGATION_LIST" :key="index">
                {{ item.label }}
              </div>
            </div>
          </div>
          <div class="left">
            <el-icon class="hidden-xs-only">
              <Search />
            </el-icon>
            <div class="hidden-sm-and-up left-wrapper">
              <el-icon v-if="!isMenuOpen" @click="isMenuOpen = true">
                <Expand />
              </el-icon>
              <el-icon @click="isMenuOpen = false" v-else>
                <Fold />
              </el-icon>
            </div>
          </div>
        </div>
      </FrostedGlass>
    </el-col>
  </el-affix>
</template>
<style lang="scss" scoped>
.herader-wrapper {
  display: flex;
  justify-content: space-between;

  .right-wrapper {
    display: flex;
  }

  .right {
    margin-left: 20px;
    display: flex;
    align-items: center;

    .item {
      border-radius: 45px;
      padding: 6px 10px;
      margin-right: 10px;
      cursor: pointer;
      font-size: 18px;
      border: 1px solid transparent;
      // transform: ;
      transition: all 0.3s ease;
    }

    .active {
      color: rgb(249, 115, 22);
      border: 1px solid #fff;
      background: rgba(244, 244, 244, 0.4);
      box-shadow: 0 4px 6px #0000001a, inset 1px 1px 2px #ffffff4d;
    }

    .item:hover {
      color: rgb(249, 115, 22);
    }
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;

    .left-wrapper {
      display: flex;
      align-items: center;
    }
  }

  .logo-title {
    font-size: 25px;
  }
}
</style>