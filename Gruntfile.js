module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            src: 'src'
        },
        uglify: {
            scripts: {
                files: {
                    '<%= paths.src %>/pinyinize.min.js': ['<%= paths.src %>/pinyinize.js']
                },
                options: {
                    mangle: false
                }
            }
        },
        watch: {
            scripts: {
                files: ['<%= paths.src %>/**/*.js'],
                tasks: ['minify'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('minify', ['uglify:scripts']);
    grunt.registerTask('default', ['minify', 'watch:scripts']);
};
