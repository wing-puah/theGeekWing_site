import * as THREE from 'three';

const JSONfont = require('three/examples/fonts/droid/droid_serif_bold.typeface.json');
const font = new THREE.FontLoader().parse(JSONfont);

type Axis = 'x' | 'y' | 'z';

interface IScaleConfig {
  axis: Axis[];
  step: number;
}

function scale(
  el,
  config: IScaleConfig = { axis: ['x', 'y', 'z'], step: 0.08 }
): void {
  const { axis, step } = config;
  axis.forEach((singleAxis) => {
    el.scale[singleAxis] = THREE.MathUtils.lerp(el.scale[singleAxis], 1, step);
  });
}

export { font, scale };
