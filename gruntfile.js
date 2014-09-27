module.exports = function(grunt) {
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'client/public/css/style.css' : 'client/sass/app.scss'
                }
            }
        },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['client/javascripts/**/*.js'],
              dest: 'client/public/js/build.js',
            },
        },
        uglify: {
             options: {
                mangle: false
              },
            build: {
                src: ['client/javascripts/**/*.js'],
                dest: 'client/public/js/build.min.js'
            }
        },
        cssmin: {
          css: {
            src: ['client/public/css/style.css'],
            dest: 'client/public/css/style.min.css'
          }
        },
        watch: {
            source: {
                files: ['client/sass/**/*.scss', 'client/javascripts/**/*.js'],
                tasks: ['sass', 'concat', 'uglify', 'cssmin'],
                options: {
                    livereload: true,
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);
};