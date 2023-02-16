import * as B from 'babylonjs';
import { Color4 } from 'babylonjs';
import { canvas } from './domitems';

export const engine = new B.Engine(canvas, true);
export const scene = makeScene();

function makeScene(): B.Scene {
    const scene = new B.Scene(engine);
    
    createCamera(scene);
    createLight(scene);
    setBackground(scene);
    return scene;
}

function createCamera(scene: B.Scene): void {
    const alpha = Math.PI / 4;
    const beta = Math.PI / 3;
    const radius = 8;
    const target = new B.Vector3(0, 0, 0);

    new B.ArcRotateCamera(
        "Camera",
        alpha,
        beta,
        radius,
        target,
        scene
    ).attachControl(canvas, true);
}

function createLight(scene: B.Scene): B.HemisphericLight {
    const position = new B.Vector3(1, 1, 0);
    return new B.HemisphericLight(
        "light",
        position,
        scene
    );

}

function setBackground(scene: B.Scene): void {
    scene.clearColor = new Color4(0, 0, 0, 1);
    
}
