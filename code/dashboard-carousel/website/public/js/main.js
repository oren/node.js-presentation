var dashboards = {};

dashboards.showReport = function(id) {
  $('img').hide();
  $($('img')[id]).show();
};

var digit = /\d/;

$(document).ready(function(){

  dashboards.index = 0;
  dashboards.showReport(dashboards.index);
  
  setInterval(function() {
    dashboards.index = (dashboards.index + 1) % 4;
    dashboards.showReport(dashboards.index);
  }, config.interval);

});

