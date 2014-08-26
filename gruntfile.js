'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        bowerInstall: {
            target: {
                src: './index.html'
            },
            app: {
                src: ['./index.html']
            },
            fileTypes: {
                src: '*.min.js'
            }
        },



    });

    grunt.loadNpmTasks('grunt-bower-install');

    grunt.registerTask('default', [
        'bowerInstall'
    ]);
};
