
function fix_progress_size(value, max)
{
  /* since the SVG can't have size 100% - borderpadding, we use JS to contract
     the size for the border */

  var svgel = document.getElementById('svg');
  var svg = svgel.getSVGDocument();
  var p_bg = svg.getElementById('progress_background');
  var p_in = svg.getElementById('progress_indicator');
  var shadow = svg.getElementById('shadow');
  var progressbar = document.getElementById('progressbar');

  p_bg.setAttribute('width', progressbar.offsetWidth - 20);
  p_bg.setAttribute('height', progressbar.offsetHeight - 20);

  p_in.setAttribute('width', p_bg.getAttribute('width'));
  p_in.setAttribute('height', p_bg.getAttribute('height'));

  shadow.setAttribute('width', p_bg.getAttribute('width'));
  shadow.setAttribute('height', p_bg.getAttribute('height'));

  p = svg.getElementById('prog');
  p.setAttribute('width', progressbar.offsetWidth * value / max);
}

function weekprogress()
{
  var minutesofweek = 60 * 24 * 7;
  date = new Date();
  var days = (date.getDay() + 6) % 7
  var minute = ((date.getDay() + 6) % 7) * 24 * 60 + date.getHours() * 60 + date.getMinutes();

  fix_progress_size(minute, minutesofweek);
}

window.addEventListener('load', weekprogress, false);
