google.load('visualization', '1', {
  'packages': ['geochart']
});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {

  var data = new google.visualization.DataTable();

  google.charts.load('upcoming', {
    'packages': ['geochart']
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {
      backgroundColor: '#E9FAFD',
      //  backgroundColor: { fill: '#FFF', stroke: '#000', strokeWidth: 30 },
      colorAxis: {
        minValue: 0,
        colors: ['#006778', '#3C6273']
      },
      datalessRegionColor: '#85D0DA',
      legend: 'none',
      tooltip: {
        isHtml: true,
        textStyle: {
          color: '#FFF',
          fontName: 'Open Sans'
        },
        showColorCode: false
      }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }


}
