<template>
  <div class="layout">
    <div class="header">
      <vHeader></vHeader>
    </div>
    <div class="body">
      <router-view class="main-content"></router-view>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from "./Header"
import vFooter from "./Footer"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default {
  data(){
    return {
      app:[]
    }
  },
  components:{
    vHeader, vFooter,
  },
  methods:{

  }
}
</script>

<style scoped lang='less'>
.header{
  width: 100%;
  height: 60px;
  text-align: center;
}
</style>
