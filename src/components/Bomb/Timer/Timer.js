
import * as THREE from 'three';

var time = 300
var counter = 0
var clock
var targetList = [];

function timeIt() {
    counter++
    var timeLeft = time - counter

    var min = Math.floor(timeLeft / 60)
    var sec = Math.floor(timeLeft % 60)

    // console.log(min + ':' + sec)
    const str = (min + ':' + sec).toString()
    // console.log('str', str)
    return str
}

setInterval(timeIt, 1000);

let fontLoader = new THREE.FontLoader();
fontLoader.load('fonts/Digital-7_Regular.json', function (font) {

    let textGeo = new THREE.TextGeometry(timeIt(), {
        font: font,
        size: 12,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.1,
        bevelSegments: 5
    });
    let textMat = new THREE.MeshPhongMaterial({
        color: 0xff1111,
        shininess: 100,
    });
    if (textGeo) {
        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();
        let text = new THREE.Mesh(textGeo, textMat)
        text.scale.set(0.06, 0.06, 0.06);
        text.position.x = 0.16;
        text.position.y = -0.68;
        text.position.z = 0.8;
        text.rotation.y = Math.PI / 2;
        text.name = "ClockDisplay"
        clock.add(text)
        targetList.push(text)
    }
});
