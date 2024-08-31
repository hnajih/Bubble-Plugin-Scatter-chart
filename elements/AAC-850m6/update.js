function(instance, properties, context) {

    var height = properties.bubble.height();
    var font_size = properties.bubble.font_size();
    var font_alignment = properties.bubble.font_alignment();
    var font_color = properties.bubble.font_color();
    var font_face = properties.bubble.font_face();
        
    var title = properties.title;
    var title_align = properties.title_alignment;
    var xaxis_position = properties.xaxis_position;
    var show_yaxis = properties.show_yaxis;
    var yaxis_position = properties.yaxis_position
    var reverse_yaxis = properties.reverse_yaxis
    var zoomable = properties.zoomable;
    var data_labels_enabled = properties.data_labels_enabled;
    var show_grid = properties.show_grid;
    var show_legend = properties.show_legend;
    var no_data_text = properties.no_data_text;
    var dark_mode = properties.dark_mode;
    var tooltip_enabled = properties.tooltip_enabled;
    var downloading_enabled = properties.downloading_enabled;
    var tick_amount = properties.tick_amount;
    
    var series_1_name = properties.series_1_name || "";
    var series_1_color = properties.series_1_color;
    var series_1_data =
      properties.series_1_data?.get(0, properties.series_1_data.length()) || [];
    var series_2_name = properties.series_2_name || "";
    var series_2_color = properties.series_2_color;
    var series_2_data =
      properties.series_2_data?.get(0, properties.series_2_data.length()) || [];
    var series_3_name = properties.series_3_name || "";
    var series_3_color = properties.series_3_color;
    var series_3_data =
      properties.series_3_data?.get(0, properties.series_3_data.length()) || [];
    var series_4_name = properties.series_4_name || "";
    var series_4_color = properties.series_4_color;
    var series_4_data =
      properties.series_4_data?.get(0, properties.series_4_data.length()) || [];
    var series_5_name = properties.series_5_name || "";
    var series_5_color = properties.series_5_color;
    var series_5_data =
      properties.series_5_data?.get(0, properties.series_5_data.length()) || [];
    
    var colors = [series_1_color, series_2_color, series_3_color, series_4_color, series_5_color];
    
    var style = { fontSize: font_size, fontFamily: font_face, colors: font_color }  

    var options = {
      series: [
        ... series_1_data.length > 0 ? [{
          name: series_1_name,
          data: series_1_data.map(e => e.split(',').map(ee => Number(ee))),
        }]: [],
        ... series_2_data.length > 0 ? [{
          name: series_2_name,
          data: series_2_data.map(e => e.split(',').map(ee => Number(ee))),
        }]: [],
        ... series_3_data.length > 0 ? [{
          name: series_3_name,
          data: series_3_data.map(e => e.split(',').map(ee => Number(ee))),
        }]: [],
        ... series_4_data.length > 0 ? [{
          name: series_4_name,
          data: series_4_data.map(e => e.split(',').map(ee => Number(ee))),
        }]: [],
        ... series_5_data.length > 0 ? [{
          name: series_5_name,
          data: series_5_data.map(e => e.split(',').map(ee => Number(ee))),
        }]: [],
      ],
      chart: {
        type: 'scatter',
        height: height,
        fontFamily: font_face,
        zoom: {
          enabled: zoomable,
        },
        toolbar: {
            tools: {
               download: downloading_enabled
            }
        }
      },
      dataLabels: {
        enabled: data_labels_enabled,
      },
      colors: colors,
      stroke: {
        curve: "straight",
      },
      title: {
        text: title || "",
        align: title_align,
      },
      grid: {
          show: show_grid
      },
      xaxis: {
        position: xaxis_position,
        labels: { style: style },
        type: 'category',
        tickAmount: tick_amount,
      },
      yaxis: {
        show: show_yaxis,
        opposite: yaxis_position === 'right',
      	reversed: reverse_yaxis,
        labels: { style: style } 
      },
      legend: {
        show: show_legend
      },
      noData: {
      	text: no_data_text
      },
      theme: {
        mode: dark_mode ? 'dark': 'light'
      },
      tooltip: {
      	enabled: tooltip_enabled
      }
    };

    instance.data.container = document.createElement("div");
    instance.canvas.append(instance.data.container);

    var apexChart = new ApexCharts(instance.data.container, options);
    apexChart.render();

}