///<reference path="matter.d.ts""/>

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

engine = Engine.create();

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 640,
        height: 480,
        wireframes: false
    }
});

let middle = render.options.width / 2;
let groundLevel = render.options.height - 64;

var boxes = [Bodies.rectangle(middle, groundLevel, 32, 32), 
    Bodies.rectangle(middle, groundLevel, 32, 32),
    Bodies.rectangle(middle, groundLevel, 32, 32),
    Bodies.rectangle(middle - 48, groundLevel, 32, 32),
    Bodies.rectangle(middle + 48, groundLevel, 32, 32),
    Bodies.rectangle(middle - 50, groundLevel - 32, 32, 32),
    Bodies.rectangle(middle + 4, groundLevel - 32, 32, 32),
    Bodies.rectangle(middle - 48, groundLevel - 32, 32, 32)
    ,Bodies.rectangle(0, render.options.height - 32, 
    render.options.width * 2, 32, {isStatic: true})];

var circle = [Bodies.circle(middle - 4, 64, 48)]

World.add(engine.world, boxes.concat(circle));

Engine.run(engine);
Render.run(render);