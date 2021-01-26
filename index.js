var panorama, viewer, container;

var controlIndex = PANOLENS.CONTROLS.ORBIT;
var modeIndex = 0;

container = document.querySelector("#container");

panorama = new PANOLENS.ImagePanorama("./assets/360_12.jpg");

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);

// Orbit Controls
// Momentum
viewer.OrbitControls.momentumDampingFactor = 0.5;
viewer.OrbitControls.momentumScalingFactor = -0.01;
viewer.OrbitControls.momentumKeydownFactor = 10;

// Fov
viewer.OrbitControls.minFov = 50;
viewer.OrbitControls.maxFov = 70;
