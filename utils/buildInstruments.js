module.exports = function (ac) {
  // TODO: probably put a light global reverb here as well, yeah
  var mainVolume = ac.createGain()
  mainVolume.connect(ac.destination)
  return {
    ac: ac,
    mainVolume: mainVolume,
    // reverb: reverb,
    bass: require('../instruments/bass')(ac).connect(mainVolume),
    // voice: require('../instruments/voice')(ac).connect(mainVolume),
    piano: require('../instruments/piano')(ac).connect(mainVolume),
    pluck: require('../instruments/pluck')(ac).connect(mainVolume),
    // snare: require('../instruments/snare')(ac).connect(mainVolume),
    // hat: require('../instruments/hat')(ac).connect(mainVolume),
    // ohh: require('../instruments/ohh')(ac).connect(mainVolume),
    // etc. etc. etc. forever
  }
}