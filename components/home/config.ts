
const cameraStartPositionValue: number[] = [0, 35, 10];
const cameraEndPositionValue: number[] = [10, 7, 36];

const CameraState = {
  from: cameraStartPositionValue,
  to: cameraEndPositionValue
};


const config = {
  intro: 'Wing. Frontend developer.',
};

const journeyPoints = [
  { key: 'Work in tech' },
  { key: 'Frontend developer' },
  { key: 'Part time studies, ICT in SUSS' },
];

export { config, journeyPoints, CameraState };
