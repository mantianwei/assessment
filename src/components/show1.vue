<template>
<div>
<h2>数据分析结果呈现  柱状图</h2>
<div id="show1" style="width: 600px;height: 400px;"></div>
</div>
</template>
<script>
 import echarts from 'echarts'
    export default {
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
 color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1', '2', '3', '4', '5', '6', '7'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'数据',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 20, 30, 90, 30, 70]
        }
    ]
               })
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('show1')
            })
        }
    }
</script>
<style scoped>

</style>