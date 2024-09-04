import {
    ViewerApp,
    addBasePlugins,

} from "webgi";
import "./styles.css";

async function setupViewer(){

    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
    })


    await addBasePlugins(viewer) 

    // Import and add a GLB file.
    await viewer.load("./assets/model.glb")

}

setupViewer()
