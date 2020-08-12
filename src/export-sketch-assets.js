import sketch from "sketch";


function exportSketchAssets (page, output) {
	const doc = sketch.getSelectedDocument();
	const artboards = page.layers;

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


