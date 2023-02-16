import * as B from "babylonjs";
import { scene } from "./scene";

export function makeCube(): B.Mesh {
    const cube = B.MeshBuilder.CreateBox(
        "cube",
        {size: .5},
        scene
    )
    cube.position = new B.Vector3(0,1,0);
    cube.physicsImpostor = new B.PhysicsImpostor(
        cube,
        B.PhysicsImpostor.BoxImpostor,
        {mass: 1, restitution: .9},
        scene
    )

    return cube;
}