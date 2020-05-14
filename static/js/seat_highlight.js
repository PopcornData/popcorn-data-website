  
  $(document).ready(function() {
    var sc = $('#seat-map').seatCharts(hall);
    //  sc.status(['A_1', 'A_10'], 'selected');
 
    s_arr = order;

    function highlight() {
      for (let i = 0; i < s_arr.length; i++) {
        setTimeout(function() {
          if (s_arr[i].length === 1) {
            sc.status(s_arr[i], 'one');
          } else if (s_arr[i].length === 2) {
            sc.status(s_arr[i], 'two');
          } else if (s_arr[i].length === 3) {
            sc.status(s_arr[i], 'three');
          } else if (s_arr[i].length === 4) {
            sc.status(s_arr[i], 'four');
          } else if (s_arr[i].length === 5) {
            sc.status(s_arr[i], 'five');
          } else {
            sc.status(s_arr[i], 'other');
          }
        }, i * 500);
      }
    }
    highlight();
    $("#replay").click(function() {
      for (let i = 0; i < s_arr.length; i++) {
        sc.status(s_arr[i], 'available');
      }
      highlight();
    });
  });

