# BassoonPlayer

Standalone player, based on the BassoonTracker playback engine, that can be used to play SoundTracker, ProTracker and Fast Tracker modules in a web page.  
The player is tiny (16kB gzipped) and is friendly on the CPU.

This is a build based v0.5.0.5 of BassoonTracker.

## Usage and Examples
See [the docs](https://www.stef.be/bassoontracker/docs/?player) for usage instructions and examples.

## Building
To build the player, you need to have [Node.js](https://nodejs.org/) and [Vite](https://vite.dev/) installed. Then run:

```bash
vite build
```
to build the compressed player library in the `build` directory.

```bash
vite build -m dev
```
to build the uncompressed player library in the `build` directory.

## History
The player moved to ES6 modules and is using Promises.  
If you need a callback-based player that you can directly drop in your HTML page using a script tag, you can use the [legacy player](https://www.stef.be/bassoontracker/player/old/), based on version 0.4.0 of BassoonTracker.

