import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'

// search replace in outputfile
const searchReplacePlugin = () => {
    return {
        name: 'search-replace',
        enforce: 'pre',
        async transform(code) {
            // Replace the string "foo" with "bar"
            code = code.replaceAll('setFineTune', 'sft');
            code = code.replaceAll('getFineTune', 'gft');
            code = code.replaceAll('getPeriodForNote', 'gN');
            code = code.replaceAll('getInstrument', 'gin');
            code = code.replaceAll('instrumentIndex', 'iI');
            code = code.replaceAll('Instrument', 'iN');
            code = code.replaceAll('emulateProtracker1OffsetBug', 'eB');
            code = code.replaceAll('Current', 'Cr');
            code = code.replaceAll('Pattern', 'Pt');
            code = code.replaceAll('Position', 'Pos');
            code = code.replaceAll('period', 'prd');
            code = code.replaceAll('Period', 'Prd');
            code = code.replaceAll('useLinearFrequency', 'ulf');
            code = code.replaceAll('volumeEnvelope', 've');
            code = code.replaceAll('panningEnvelope', 'pe');
            code = code.replaceAll('mod_ProTracker', 'm_p');
            code = code.replaceAll('setTrackerMode', 'strM');
            code = code.replaceAll('readString', 'rS');
            code = code.replaceAll('readUbyte', 'rU');
            code = code.replaceAll('readByte', 'rB');
            code = code.replaceAll('readWord', 'rdW');
            code = code.replaceAll('readDWord', 'rdD');
            code = code.replaceAll('readUint', 'rUI');
            code = code.replaceAll('dataView', 'dV');
            code = code.replaceAll('trigger', 'tr');
            code = code.replaceAll('currentVolume', 'cV');
            code = code.replaceAll('volumeFadeOut', 'vFO');
            code = code.replaceAll('clearScheduledNotesCache', 'cSNC');
            code = code.replaceAll('setStereoSeparation', 'sSS');
            code = code.replaceAll('clearEffectCache', 'cEC');
            code = code.replaceAll('setAmigaSpeed', 'sAS');
            code = code.replaceAll('inFTMode', 'iFM');
            code = code.replaceAll('patternDelay', 'pD');
            code = code.replaceAll('FASTTRACKER', 'FT');
            code = code.replaceAll('sampleHeaderSize', 'sHS');
            code = code.replaceAll('sampleNumberForNotes', 'sNfN');
            code = code.replaceAll('patternBreak', 'pBr');
            code = code.replaceAll('fineSlide', 'fS');
            code = code.replaceAll('waveFormFunction', 'wFn');
            code = code.replaceAll('getLastMasterVolume', 'gLM');
            code = code.replaceAll('startPlaybackRate', 'sPR');
            code = code.replaceAll('numberOfSamples', 'nS');
            code = code.replaceAll('.points', '.ps');
            code = code.replaceAll('finetuneX', 'ftX');
            code = code.replaceAll('relativeNote', 'rN');
            code = code.replaceAll('setCrSongPos', 'setCurrentSongPosition');
            return {
                code,
                map: null // provide source map if available
            };
        }
    };
}

export default defineConfig(({ command, mode }) => {
    let config = {
        base: "./",
        build: {
            modulePreload:{
                polyfill: false
            },
            outDir: './build',
            assetsDir: '',
            rollupOptions: {
                preserveEntrySignatures: "exports-only",
                input: {
                    main: resolve(__dirname, 'bassoonplayer.js'),
                },
                output: {
                    entryFileNames: `bassoonplayer-min.js`
                }
            }
        },
        esbuild: {
            pure: ['console.log']
        }
    }

    if (mode === 'development' || mode === 'dev') {
        config.build.minify = false;
        config.build.rollupOptions.output.entryFileNames = "bassoonplayer.js";
    }else{
        config.build.minify = "terser";
        config.build.terserOptions = {
            compress: {
                module: true,
                drop_console: true,
                drop_debugger: true,
                pure_getters: true,
            },
            output: {
                comments: false,
            }
        };
        config.plugins =  [searchReplacePlugin()];
    }
    return config;
})