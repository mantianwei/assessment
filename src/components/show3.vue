<template>
<div>
<h2>数据分析结果呈现  折线图</h2>
<div id="show3" style="width: 600px;height: 400px;"></div>
</div>
</template>
<script>
 import echarts from 'echarts'
    export default {
      
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [20, 32, 90, 34, 10, 77, 80],
        type: 'line'
    }]
               })
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('show3')
            })
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>