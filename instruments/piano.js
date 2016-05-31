var piano = require('pie-ano')(ac)
var int2freq = require('int2freq')
module.exports = function (ac) {
  piano.update({attack: 0.1, decay: 0.05, sustain: 0.01, release: 0.01}, ac.currentTime)
  return {
    play: function (data, key) {
      piano.update({freq: int2freq(data, key)}, ac.currentTime)
      piano.play(ac.currentTime)
    },
    connect: function (destination) {
      piano.connect(destination)
      return this
    }
  }
}
