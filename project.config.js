process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path     from 'path';
import { argv } from 'yargs';

const config = new Map();

// ------------------------------------
// User Configuration
// ------------------------------------
config.set('dir_src',  'app');
config.set('dir_dist', './');

config.set('server_host',  '0.0.0.0');
config.set('server_port',  process.env.PORT || 4000);
config.set('webpack_port', 3000);

config.set('vendor_dependencies', [
    'react',
    'redux',
    'react-redux',
    'react-router'
]);

config.set('webpack_lint_in_dev', false);

/*  *********************************************
 -------------------------------------------------

 All Internal Configuration Below
 Edit at your own risk

 -------------------------------------------------
 ************************************************/
// ------------------------------------
// Environment
// ------------------------------------
config.set('env', process.env.NODE_ENV);
config.set('globals', {
    'process.env'  : {
        'NODE_ENV' : JSON.stringify(config.get('env'))
    },
    'NODE_ENV'     : config.get('env'),
    '__DEV__'      : config.get('env') === 'development',
    '__PROD__'     : config.get('env') === 'production',
    '__DEBUG__'    : config.get('env') === 'development' && !argv.no_debug,
    '__DEBUG_NW__' : !!argv.nw
});

// ------------------------------------
// Webpack
// ------------------------------------
config.set('webpack_public_path',
    `http://${config.get('server_host')}:${config.get('webpack_port')}/`
);

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, ''));

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
    const base    = [config.get('path_project')],
        resolve = path.resolve;

    const project = (...args) => resolve.apply(resolve, [...base, ...args]);

    return {
        project : project,
        src     : project.bind(null, config.get('dir_src')),
        dist    : project.bind(null, config.get('dir_dist'))
    };
})();

config.set('utils_paths', paths);

// ------------------------------------
// src aliases
// ------------------------------------
const srcAliases = [
    'actions',
    'pages',
    'constants'
].reduce((acc, x) => ((acc[x] = paths.src(x)) && acc), {});

// ------------------------------------
// project aliases
// ------------------------------------
const projectAliases = [
    'components',
    'decorators',
    'middleware',
    'modules',
    'theme'
].reduce((acc, x) => ((acc[x] = paths.project(x)) && acc), {});

config.set('aliases', {...srcAliases, ...projectAliases});

export default config;