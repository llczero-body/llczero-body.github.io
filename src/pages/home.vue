<script setup lang="ts">
import { CARD_OBJ } from '~/mock/home.js'
</script>

<template>

  <!-- 头像 -->
  <avatar />

  <!-- 内容标签 -->
  <div class="module-spacing">
    <el-row>
      <el-col :span="24">
        <div class="home-label-wrapper">
          <FrostedGlass style="margin: 0px 12px 12px 0px" v-for="item in CONTENTLIST" :key="item.index">
            <span class="frosted-calss-text home-label">
              {{ item.label }}
            </span>
          </FrostedGlass>

        </div>
      </el-col>
    </el-row>
  </div>

  <!-- 主体内容 -->
  <section class="home-content module-spacing">
    <el-row :gutter="20">
      <el-col :span="17" :xs="24" :sm="24" :md="17">
        <div class="left module shadow">
          <div class="title">最新文章</div>
          <!-- <el-row :gutter="20"></el-row> -->
          <div class="card-container">
            <el-col :span="12" :xs="24" v-for="(item, index) in CARD_OBJ" :key="index">
              <card :item="item"></card>
            </el-col>
          </div>
        </div>
      </el-col>

      <el-col :span="7" :xs="24" :sm="24" :md="7">
        <div class="right module  shadow">
          <div class="title">推荐</div>
          <div class="card-container-recommend">
              <div style="width: 100%" v-for="(item, index) in CARD_OBJ" :key="index">
              <recommendCard :item="item"></recommendCard>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>

</template>
<style scoped lang="scss">
.home-label-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  .home-label {
    cursor: pointer;
    font-size: 20px;
    border: 1px solid transparent;
     transform: all 1s ease;
  }
}

.home-label:hover{
  transform: scale(1.1);
     color: rgb(249, 115, 22);
      border: 1px solid #fff;
      background: rgba(244, 244, 244, 0.4);
      box-shadow: 0 4px 6px #0000001a, inset 1px 1px 2px #ffffff4d;
}
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card-container-recommend{
  width: 100%;
}

.home-content {

}


.left,
.right {
  margin-bottom: 30px;

  .title {
    font-size: 26px;
    margin-bottom: 10px;
  }
}
</style> url(#glass-distortion)