$(document).ready(function() {
  var sc = $('#seat-map').seatCharts(hall);
  //  sc.status(['A_1', 'A_10'], 'selected');
  //  setTimeout(function(){
  //     sc.status(['E_1', 'E_10','E_11','E_12'], 'selected');
  // }, 2000);
  colors = ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c',
    '#b10026', '#960524', '#78011b'
  ]
  let range = max - min;

  $.each(obj, function(key, value) {
    for (var i = 1; i <= colors.length; i++) {
      if (value <= range * i / colors.length) {
        if (i <= colors.length / 4) {
          sc.get(key).node().css({
            "background-color": colors[i - 1],
            "color": "#dfdfdf"
          });
        } else {
          sc.get(key).node().css({
            "background-color": colors[i - 1]
          });
        }
        break;
      }
    }
  });
  //sold seat
});