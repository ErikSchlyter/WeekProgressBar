var minutesofweek = 60 * 24 * 7;
var minutestofriday = 60 * 24 * 4;
var minutestoweekend= 60 * 24 * 4 + 17 * 60;

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
  date = new Date();
  var days = (date.getDay() + 6) % 7
  var minute = ((date.getDay() + 6) % 7) * 24 * 60 + date.getHours() * 60 + date.getMinutes();

  fix_progress_size(minute, minutesofweek);
	if (minute < minutestofriday)
	{
		setStatusNo();
	}
	else if (minute < minutestoweekend)
	{
		setStatusSoon();
	}
	else
	{
		setStatusYes();
	}
}

function setStatusNo()
{
	document.getElementById('yesimg').style.display = 'none';
	document.getElementById('noimg').style.display = 'block';
	document.getElementById('comment').innerHTML = 'Get back to work!';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#444';
}

function setStatusSoon()
{
	document.getElementById('yesimg').style.display = 'none';
	document.getElementById('noimg').style.display = 'block';
	document.getElementById('comment').innerHTML = "but soon, it's Friday!";
	document.getElementsByTagName('body')[0].style.backgroundColor = '#555';
}

function setStatusYes()
{
	document.getElementById('yesimg').style.display = 'block';
	document.getElementById('noimg').style.display = 'none';
	document.getElementById('comment').innerHTML = "Go home and play!";
	document.getElementsByTagName('body')[0].style.backgroundColor = '#084808';
}

window.addEventListener('load', weekprogress, false);
window.addEventListener('resize', weekprogress, false);
window.setInterval(weekprogress, 60*1000);
