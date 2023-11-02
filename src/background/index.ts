console.log("Background.ts")

const manifest = chrome.runtime.getManifest();
const currentVersion = manifest.version;

chrome.runtime.onInstalled.addListener(function (object) {
    if (object.reason === 'install') {
        //
    } else if(object.reason === 'update') {
        const previousVersionInstalled = object.previousVersion;
        console.log({previousVerion: previousVersionInstalled, currentVersion})
    }
})