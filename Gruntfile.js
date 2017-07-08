module.exports = function (grunt) {

    grunt.initConfig({
        concat: {

            js: {
                src: ['js/custom.js', 'js/jquery-1.11.3.min.js'],
                dest: 'dist/js/built.js',
            },
            css: {
                src: ['css/main.css', 'css/font-awesome.min.css'],
                dest: 'dist/css/built.css',
            }
        },
        watchChokidar: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
            },
            css: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
            },
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/main.css': 'sass/main.scss'       // 'destination': 'source'

                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch-chokidar');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat', 'watchChokidar', 'sass']);


};
