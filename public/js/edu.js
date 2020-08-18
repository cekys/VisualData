$.ajax({
    url: "http://127.0.0.1:3000/mock/edu",
    type: "GET",
    dataType: "json",
    success: function (data) {
        let myChart = echarts.init(document.getElementById('main'));

        let options = {
            title: {
                text: "人才学历分布",
            },
            legend: {
                data: ['count'],
            },
            tooltip: {},
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: "none"
                    },
                    magicType: {
                        type: ["line", "bar"]
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataset: {
                dimensions: ['education', 'count'],
                source: data
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                name: "人数"
            },
            series: [

                {
                    type: "bar",
                }
            ]
        };
        myChart.setOption(options);
    }
})