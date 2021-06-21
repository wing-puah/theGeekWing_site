import * as THREE from 'three';

const JSONfont = require('three/examples/fonts/droid/droid_serif_bold.typeface.json');
const font = new THREE.FontLoader().parse(JSONfont);

export { font };
