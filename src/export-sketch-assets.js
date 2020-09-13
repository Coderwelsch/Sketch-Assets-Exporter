import sketch from "sketch";


function exportSketchAssets (artboards, output) {
	console.log("ARTBOARDS", artboards);

	sketch.export(
		artboards,
		{
			output: output,
			formats: "svg",
			overwriting: true
		}
	);
}

export default exportSketchAssets;


