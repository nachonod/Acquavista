var panorama, viewer, container, infospot;

var controlIndex = PANOLENS.CONTROLS.ORBIT;
var modeIndex = 0;

container = document.querySelector("#container");
aerea = document.querySelector("#aerea");
aereaDos = document.querySelector("#aereados");

panorama = new PANOLENS.ImagePanorama("./assets/GALP_Acquavista_360.jpg");

viewer = new PANOLENS.Viewer({ container: container, autoHideInfospot: false });
viewer.add(panorama);

// Info Point Aerea 1
infospot = new PANOLENS.Infospot(110, PANOLENS.DataImage.Info);
infospot.position.set(1500, 170, -1500);
infospot.addHoverElement(aerea, 0);
infospot.addEventListener("click", function () {
  this.focus();
});

panorama.add(infospot);

// Info Point Aerea 2
infospot = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot.position.set(100, 170, -1500);
infospot.addHoverElement(aereaDos, 0);
infospot.addEventListener("click", function () {
  this.focus();
});

panorama.add(infospot);

// Info Point Texto

// infospot = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
// infospot.position.set(200, -55, 510);
// infospot.addHoverText(
//   "Sabias que esta laguna tiene la superficien de 20,8 Piscinas Olimpicas",
//   -50
// );
// infospot.addEventListener("click", function () {
//   this.focus();
// });

// panorama.add(infospot);

// Orbit Controls
// Momentum
viewer.OrbitControls.momentumDampingFactor = 0.5;
viewer.OrbitControls.momentumScalingFactor = -0.01;
viewer.OrbitControls.momentumKeydownFactor = 10;

// Fov
viewer.OrbitControls.minFov = 50;
viewer.OrbitControls.maxFov = 70;
