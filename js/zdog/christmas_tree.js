// Tree colour variables
var green1 = '#51cf66';
var green2 = '#40c057';
var green3 = '#37b24d';
var green4 = '#2f9e44';
var green5 = '#2b8a3e';
var trunk = '#966F33';
var trunkBottom = '#654321'
const TAU = Zdog.TAU;

// Create the illustration
var illo = new Zdog.Illustration({
    element: '.tree',
    dragRotate: true,
    scale: 1.5,
    rotate: { x: -TAU/16 },
});

// Tree Anchor
var treeAnchor = new Zdog.Anchor({
    addTo: illo,
    translate: { y: 24 },
    rotate: { x: TAU/4 },
});

// Top layer of the tree
var tree = new Zdog.Cone({
    addTo: treeAnchor,
    diameter: 60,
    length: 50,
    stroke: false,
    translate: { z: 50 },
    color: green1,
    backface: green5,
});

// 2nd layer of the tree
var tree2 = new Zdog.Cone({
    addTo: treeAnchor,
    diameter: 80,
    length: 50,
    stroke: false,
    translate: { z: 25 },
    color: green2,
    backface: green5,
    rotate: { z: TAU/6 },
});

// 3rd layer of the tree
var tree3 = new Zdog.Cone({
    addTo: treeAnchor,
    diameter: 100,
    length: 50,
    stroke: false,
    color: green3,
    backface: green5,
    rotate: { z: TAU/4.5 },
});

// 4th layer of the tree
var tree4 = new Zdog.Cone({
    addTo: treeAnchor,
    diameter: 120,
    length: 50,
    stroke: false,
    translate: { z: -25 },
    color: green4,
    backface: green5,
    rotate: { z: -TAU/6 },
});

// 5th layer of the tree
var tree5 = new Zdog.Cone({
    addTo: treeAnchor,
    diameter: 140,
    length: 50,
    stroke: false,
    translate: { z: -50 },
    color: green5,
    backface: green5,
    rotate: { z: TAU/10 },
});

// Trunk
new Zdog.Cylinder({
    addTo: treeAnchor,
    diameter: 30,
    length: 80,
    stroke: false,
    translate: { z: -60 },
    color: trunk,
    backface: trunkBottom,
});

// ----------------------------------------------- //

// Shadow
new Zdog.Cylinder({
    addTo: treeAnchor,
    diameter: 160,
    length: 1,
    stroke: false,
    translate: { z: -100 },
    color: '#F0EBEB',
});

// ----------------------------------------------- //

var baubleAnchor = new Zdog.Anchor({
    addTo: tree,
});

var baubleZ = ( tree.diameter + tree.stroke ) / 2 - 2;

new Zdog.Shape({
    addTo: baubleAnchor,
    translate: { z: baubleZ },
    stroke: 10,
    color: '#d6336c',
});

baubleAnchor.copyGraph({
    rotate: { x: .9 },
});

baubleAnchor.copyGraph({
    rotate: { x: -.9 },
});

baubleAnchor.copyGraph({
    rotate: { y: .9 },
});

baubleAnchor.copyGraph({
    rotate: { y: -.9 },
});

// ----------------------------------------------- //

var baubleAnchor2 = new Zdog.Anchor({
    addTo: tree2,
});

var baubleGroup2 = new Zdog.Group({
    addTo: baubleAnchor2,
});

var baubleZ2 = ( tree2.diameter + tree2.stroke ) / 2 - 6;

new Zdog.Shape({
    addTo: baubleGroup2,
    translate: { z: baubleZ2 },
    stroke: 10,
    color: '#ffe066',
});

baubleAnchor2.copyGraph({
    rotate: { x: 1.2 },
});

baubleAnchor2.copyGraph({
    rotate: { x: -1.2 },
});

baubleAnchor2.copyGraph({
    rotate: { y: 1.2 },
});

baubleAnchor2.copyGraph({
    rotate: { y: -1.2 },
});

// ----------------------------------------------- //

var baubleAnchor3 = new Zdog.Anchor({
    addTo: tree3,
});

var baubleZ3 = ( tree3.diameter + tree3.stroke ) / 2 - 8;

new Zdog.Shape({
    addTo: baubleAnchor3,
    translate: { z: baubleZ3 },
    stroke: 10,
    color: '#74c0fc',
});

baubleAnchor3.copyGraph({
    rotate: { x: 1.3 },
});

baubleAnchor3.copyGraph({
    rotate: { x: -1.3 },
});

baubleAnchor3.copyGraph({
    rotate: { y: 1.3 },
});

baubleAnchor3.copyGraph({
    rotate: { y: -1.3 },
});

// ----------------------------------------------- //

var baubleAnchor4 = new Zdog.Anchor({
    addTo: tree4,
});

var baubleZ4 = ( tree4.diameter + tree4.stroke ) / 2 - 10;

new Zdog.Shape({
    addTo: baubleAnchor4,
    translate: { z: baubleZ4 },
    stroke: 10,
    color: '#c0eb75',
});

baubleAnchor4.copyGraph({
    rotate: { x: 1.3 },
});

baubleAnchor4.copyGraph({
    rotate: { x: -1.3 },
});

baubleAnchor4.copyGraph({
    rotate: { y: 1.3 },
});

baubleAnchor4.copyGraph({
    rotate: { y: -1.3 },
});

// ----------------------------------------------- //

var baubleAnchor5 = new Zdog.Anchor({
    addTo: tree5,
});

var baubleZ5 = ( tree5.diameter + tree5.stroke ) / 2 - 10;

new Zdog.Shape({
    addTo: baubleAnchor5,
    translate: { z: baubleZ5 },
    stroke: 12,
    color: '#e599f7',
});

baubleAnchor5.copyGraph({
    rotate: { x: 1.4 },
});

baubleAnchor5.copyGraph({
    rotate: { x: -1.4 },
});

baubleAnchor5.copyGraph({
    rotate: { y: 1.4 },
});

baubleAnchor5.copyGraph({
    rotate: { y: -1.4 },
});

// ----------------------------------------------- //

// Star
new Zdog.Polygon({
    addTo: illo,
    radius: 13,
    sides: 5,
    stroke: 2,
    translate: { z: -0, y: -80 },
    color: '#EA0',
    fill: true,
});


function animate() {
    illo.rotate.y += 0.01;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}
animate();

class Snowing {

    constructor(el) {

        var total = 500;
        this.holder = document.querySelector('.snow');
        this.winW = window.innerWidth;
        this.winH = window.innerHeight;

        for (let i = 0; i < total; i++){

            var particle = document.createElement('div');
            TweenLite.set(particle, {attr:{class:'snow__particle'}, x:this.random(0, this.winW), y:this.random(-200,-150), z:this.random(-200,200)});
            this.holder.appendChild(particle);

            this.animm(particle);
        }

    }

    animm(elm) {
        TweenMax.to(elm, this.random(3,6.5), {y:this.winH + 100, ease:Linear.easeNone, repeat:-1, delay:-15});
        TweenMax.to(elm, this.random(5,7), {x:'+=100', repeat:-1, yoyo:true, ease:Sine.easeInOut});
    }

    random(min,max) {
        return min+Math.random()*(max-min)
    }

}

var snowing = new Snowing;
