//http://threejs.org/examples/webgl_geometry_shapes.html
var createShapeGeometry = function( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {
	
	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	return geometry;

}


// Disc
//  http://spencermortensen.com/articles/bezier-circle/
var circleRadius = 69;
var spencerCPoint = 0.551915024494 * circleRadius;

var armadaLogoShape = new THREE.Shape();
armadaLogoShape.moveTo( 0, circleRadius );
armadaLogoShape.bezierCurveTo( spencerCPoint, circleRadius, circleRadius, spencerCPoint, circleRadius, 0 );
armadaLogoShape.bezierCurveTo( circleRadius, -spencerCPoint, spencerCPoint, -circleRadius, 0, -circleRadius );
armadaLogoShape.bezierCurveTo( -spencerCPoint, -circleRadius, -circleRadius, -spencerCPoint, -circleRadius, 0 );
armadaLogoShape.bezierCurveTo( -circleRadius, spencerCPoint, -spencerCPoint, circleRadius, 0, circleRadius );		


// Wings
var x = -48, y = -21;
var s = 0.3;

var armadaLogoDetail = new THREE.Path();
armadaLogoDetail.moveTo(x, y);
armadaLogoDetail.bezierCurveTo(x + -4.2313 * s, y + -65.541 * s, x + 62.3957 * s, y + -131.2693 * s, x + 103.933 * s, y + -140.9591 * s);
armadaLogoDetail.bezierCurveTo(x + 70.8762 * s, y + -107.1271 * s, x + 82.4968 * s, y + -50.0178 * s, x + 88.9926 * s, y + -35.0774 * s);
armadaLogoDetail.bezierCurveTo(x + 128.3478 * s, y + -85.8524 * s, x + 200.0711 * s, y + -112.3776 * s, x + 200.0711 * s, y + -112.3776 * s);
armadaLogoDetail.bezierCurveTo(x + 143.227 * s, y + -63.8606 * s, x + 160.0876 * s, y + 35.304 * s, x + 167.592 * s, y + 45.4707 * s);
armadaLogoDetail.bezierCurveTo(x + 218.0473 * s, y + -17.6318 * s, x + 291.2963 * s, y + -61.6709 * s, x + 333.795 * s, y + -69.5411 * s);
armadaLogoDetail.bezierCurveTo(x + 256.9156 * s, y + 3.4375 * s, x + 263.6986 * s, y + 147.4987 * s, x + 322.1923 * s, y + 221.5072 * s);
armadaLogoDetail.bezierCurveTo(x + 240.464 * s, y + 195.0864 * s, x + 109.2587 * s, y + 230.322 * s, x + 76.001 * s, y + 270.2258 * s);
armadaLogoDetail.bezierCurveTo(x + 73.0616 * s, y + 195.1728 * s, x + 118.0017 * s, y + 107.4928 * s, x + 139.0822 * s, y + 81.7755 * s);
armadaLogoDetail.bezierCurveTo(x + 126.0547 * s, y + 78.7968 * s, x + 37.5321 * s, y + 98.4278 * s, x + 23.4208 * s, y + 126.0008 * s);
armadaLogoDetail.bezierCurveTo(x + 21.9422 * s, y + 37.3537 * s, x + 78.5993 * s, y + -23.3849 * s, x + 78.5993 * s, y + -23.3849 * s);
armadaLogoDetail.bezierCurveTo(x + 19.8072 * s, y + -23.7978 * s, x + 0.4415 * s, y + -0.7803 * s, x + -0.0 * s, y + 0.0 * s);
armadaLogoShape.holes.push( armadaLogoDetail );


// Settings
var extrudeSettings = { 
	amount: 8, 
	bevelEnabled: true, 
	bevelSegments: 2, 
	steps: 2, 
	bevelSize: 1, 
	bevelThickness: 1 
};

