
Area
====
Area is an extremely simple synchronization mechanism for asynchronous jobs.
This is basically a slightly improved version of job counter, and is usually for
synchronizing arbitrary number of jobs.

How to Use
----------
First, of course, we have to create an area.

	var Area = require('area')
	  , area = new Area()

Then, register callbacks to the area.

	do_something(arg, function(err, ret) {
	  ...
	  do_more(function() { ... }.join(area))
	  ...
	}.join(area)

Note that `join` must be called only when a function is passed as a callback.

	// This code is WRONG
	var callback = function () { ...  }.join(area) // <--- DONT DO THIS
	do_something(callback)

Last, set the callback to be called after the completion of all the jobs in area.

	area.join(function() {
	  console.log('Done!')
	})


License
-------
Public domain

