import * as B from "babylonjs";
import "regenerator-runtime/runtime";
import {scene, engine } from "./src/scene";
import Ammo from "ammojs-typed";
import { makeGround } from "./src/ground";
import { makeCube } from "./src/cube";
import { ObjectPooler } from "./src/objectpooler";

async function main(): Promise<void> {
    const ammo = await Ammo();
    const physics: B.AmmoJSPlugin = new B.AmmoJSPlugin(true, ammo);
    scene.enablePhysics(new B.Vector3(0, -9.81, 0), physics);

    makeGround();
    
    const cubeObjectPooler = new ObjectPooler(makeCube(), 10);

    scene.registerBeforeRender(function () {
        cubeObjectPooler.spawnFromPool(new B.Vector3(0,2,0))
        }
    );
    
    engine.runRenderLoop( () => scene.render());
}

main();