import sketch from "sketch";
import Dialog from "@skpm/dialog";
import FileSystem from "@skpm/fs";

// import exportAssets from "./index";


const exportOnDocSaved = context => {
	context.actionContext.document.showMessage('Document Saved')
};

export {
	exportOnDocSaved
};