all: widget extension

widget:
	zip -r WeekProgressBar.wgt images/*.svg config.xml index.html scripts.js style.css

extension:
	zip -r WeekProgressBar.oex images/*.svg config.xml index.html scripts.js style.css

clean:
	rm -f WeekProgressBar.oex
	rm -f WeekProgressBar.wgt
