
var Area = module.exports = function Area() {
  // nothing
}

Area.prototype = {
  count: 0
, callback: null

, join: function(callback) {
    if (this.count == 0) {
      this._reset()
      return callback()
    }
    this.callback = callback
  }

, increase: function() {
    this.count ++
  }

, decrease: function() {
    this.count --
    if( this.count == 0 && this.callback ) {
      var cb = this.callback
      this._reset()
      cb()
    }
  }

, _reset: function() {
    this.count = 0
    this.callback = null
  }
}

Function.prototype.join = function(area) {
  var self = this
  area.increase()
  return function() {
    self.apply(this, Array.prototype.slice.call(arguments))
    area.decrease()
  }
}

