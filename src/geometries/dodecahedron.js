var registerGeometry = require('../core/geometry').registerGeometry;
var THREE = require('../lib/three');

registerGeometry('dodecahedron', {
  schema: {
    detail: {default: 0, min: 0, max: 1},
    radius: {default: 1, min: 0}
  },

  init: function (data) {
    this.geometry = new THREE.DodecahedronGeometry(data.radius, data.detail);
  }
});
