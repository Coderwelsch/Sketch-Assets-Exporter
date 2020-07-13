# Sketch Assets Exporter

Plugin that lets you export your assets automatically on document save. 
Psst… It’s developer friendly! You can define `.sketchconfig.json` files for each Sketch project 😉 …  

## Installation

- [Download](../../releases/latest/download/assets-exporter.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on assets-exporter.sketchplugin

## Using `.sketchconfig.json` Configuration

You can create a `.sketchconfig.json` file in the same directory as your sketch mockup, if you want to store and adjust the behaviour of the plugin. Currently it is limited to some basic options.

Folder Structure:
- `YourDesigns.sketch`
- `.sketchconfig.json`

### Example `.sketchconfig.json` config:

```js
{
    "plugins": {
        "assets-exporter": { // selector/name of the plugin (it’s like a namespaces
            "pageName": "Assets-to-Export", // name of the page in Sketch containing your icon artboards
            "output": "/Users/YOUR_USER/your_website.com/src/assets/" // Output folder (example)
        }
    }
}
```

## Development Guide

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

### Usage

Install the dependencies

```shell script
yarn # npm install
```

Once the installation is done, you can run some commands inside the project folder:

```shell script
yarn build # npm run build
```

To watch for changes:

```shell script
yarn watch # npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```shell script
yarn start # npm run start
```
