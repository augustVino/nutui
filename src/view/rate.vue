<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="评分组件，支持配置ICON。" 
        :showQrCode="true"></nut-docheader>
        <!-- DEMO区域 -->
        <!-- <h5><a class="button button-primary" href="/demo.html#/rate" target="_blank">demo</a></h5> -->
        <h6>默认用法</h6>
        <nut-codebox :code="demo1"  imgUrl="../asset/img/demo/rate1.png"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>可配置图片路径，需同时配置图片的高度和宽度</h6>
        <!-- DEMO代码 -->
        <nut-codebox :code="demo2"  imgUrl="../asset/img/demo/rate2.png"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo2" ></code></pre> -->
        <h5>Props</h5>
        <div class="tbl-wrapper">
            <table class="u-full-width">
              <thead>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                  <th>可选值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>num</td>
                  <td>评分的个数</td>
                  <td>Number</td>
                  <td>5</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>originalPath</td>
                  <td>评分中初始图片的路径</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>activePath</td>
                  <td>评分中激活后图片的路径</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>picHeight</td>
                  <td>评分图片的高度,单位rem</td>
                  <td>Number</td>
                  <td>0.5</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>picWidth</td>
                  <td>评分图片的宽度，单位rem</td>
                  <td>Number</td>
                  <td>0.5</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>currValue</td>
                  <td>当前值</td>
                  <td>Number</td>
                  <td>0</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
        </div>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>change-rate</td>
              <td>点击评分图片时触发的事件</td>
              <td>返回点击的索引值</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            demo1:`<nut-rate 
:num="5"
:currValue="3" 
></nut-rate>`,
            demo2:`<nut-rate 
:num="10"  
:currValue="4" 
originalPath="初始图片路径" 
:picWidth="0.32" 
:picHeight="0.31" 
activePath="激活图片路径" 
></nut-rate>`
        }
        
    },
    methods:{
        changeRate(index){
            //console.log(index);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
