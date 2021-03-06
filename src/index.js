import sketch from "sketch";
import Dialog from "@skpm/dialog";
import OS from "os";

import loadConfig from "./load-config";
import exportSketchAssets from "./export-sketch-assets";


function getOutputDir () {
	let dir = openDialog({ message: "Please choose an assets export directory …" });

	if (!dir) {
		sketch.UI.message("Canceled export");
		throw "Canceled";
	}

	return dir[0].replace("~", OS.homedir());
}

const exportOnDocSaved = async () => {
	await exportPageArtboards();
};

const exportPageArtboards = async () => {
	const doc = sketch.getSelectedDocument();

	if (doc) {
		// load config
		const config = loadConfig("assets-exporter");

		if (!config) {
			return;
		}

		const pageToExport = doc.pages.filter(({ name }) => name === config.pageName)[0];
		const artboardsToExport = pageToExport.layers;

		// opens file dialog when output isn’t set
		let output = config.output || getOutputDir();

		// add a slash to the configs output path, when not defined
		if (!output.endsWith("/")) {
			output += "/";
		}

		await exportSketchAssets(artboardsToExport, output);
		stepDone(`Exported ${ artboardsToExport.length } assets successfully`);
	} else {
		console.log("Error: No document selected");
	}
}

function openDialog (settings) {
	const doc = sketch.getSelectedDocument();

	return Dialog.showOpenDialogSync({
		properties: ["openDirectory"],
		showHiddenFiles: true,
		createDirectory: true,
		defaultPath: doc.path,
		...settings
	});
}

function stepDone (message) {
	sketch.UI.message(`🌈 Assets Exporter: ${ message }`);
}


// EXPORTS
export default exportPageArtboards;

export {
	exportOnDocSaved
};
