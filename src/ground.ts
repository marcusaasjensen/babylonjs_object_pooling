import * as B from "babylonjs";
import {scene} from "./scene";

export function makeGround(): B.Mesh {
    const size = 4;
    const ground = B.MeshBuilder.CreateGround(
        "ground", 
        { width: size, height: size },
        scene
    );

    ground.physicsImpostor = new B.PhysicsImpostor(
        ground,
        B.PhysicsImpostor.BoxImpostor, 
        { mass: 0, restitution: 0.9 },
        scene
    );

    return ground;
}