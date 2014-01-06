// Generated on 2013-10-05 using generator-mobile 0.0.2
'use strict';
var LIVERELOAD_PORT = 35730;
//var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        // TODO: Make this conditional
        watch: {
            // coffee: {
            //     files: ['<%= yeoman.app %>/js/{,*/}*.coffee'],
            //     tasks: ['coffee:dist']
            // },
            // coffeeTest: {
            //     files: ['test/spec/{,*/}*.coffee'],
            //     tasks: ['coffee:test']
            // },
            // compass: {
            //     files: ['<%= yeoman.app %>/css/{,*/}*.{scss,sass}'],
            //     tasks: ['compass:server']
            // },
            less:{
                files: ['<%= yeoman.app %>/less/**/*.less'],
                tasks: ['less:server']
            },
            handlebars:{
                files: ['<%= yeoman.app %>/js/**/*.hbs'],
                tasks: ['handlebars:server']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/css/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/js/**/*.js',
                    '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        autoshot: {
            default_options: {
              options: {
                // necessary config
                path: 'screenshots/',
                filename: '',
                type: 'PNG',
                // optional config, must set either remote or local
                remote: 'http://localhost:<%= connect.options.port %>',
                viewport: ['320x480','480x320','384x640','640x384','602x963','963x602','600x960','960x600','800x1280','1280x800','768x1024','1024x768']
              },
            },
          },

        connect: {
            options: {
                port: 9100,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }

        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '<%= yeoman.app %>/js/{,*/}*.js',
                '!<%= yeoman.app %>/js/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: yeomanConfig.app + '/js',
                    mainConfigFile: yeomanConfig.app + '/js/requirejs.config.js',
                    name: "main",
                    out: yeomanConfig.dist+"/js/app.js",
                    optimize: 'uglify'
                }
            }
        },

        less: {
            server: {
                files: {
                  "<%= yeoman.app %>/css/main.css":"<%= yeoman.app %>/less/style.less"
                }
            },
            dist: {
                options: {
                  compress: true
                },
                files: {
                  "<%= yeoman.dist %>/css/main.css":"<%= yeoman.app %>/less/style.less"
                }
            }
        },

        handlebars: {
          server: {
            options: {
              namespace: false,
              amd: true
            },
            files: [
              {
                expand: true,     // Enable dynamic expansion.
                cwd: '<%= yeoman.app %>/js',      // Src matches are relative to this path.
                src: ['**/*.hbs'], // Actual pattern(s) to match.
                dest: '<%= yeoman.app %>/js',   // Destination path prefix.
                ext: '.hbs.js',   // Dest filepaths will have this extension.
              }
            ]
          }
        },

        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'index.html',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'css/fonts/*',
                        //'bower_components/bootstrap/dist/fonts/*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist/',
                    dest: '<%= yeoman.dist %>/css',
                    src: [
                        'fonts/*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/modernizr/',
                    dest: '<%= yeoman.dist %>/js/vendor',
                    src: [
                        'modernizr.js'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/requirejs/',
                    dest: '<%= yeoman.dist %>/js/vendor',
                    src: [
                        'require.js'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/img',
                    dest: '<%= yeoman.dist %>/img',
                    src: [
                        'generated/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                //'coffee:dist',
                //'compass:server'
                'handlebars:server',
                'less:server'
            ],
            test: [
                //'coffee',
                //'compass'
            ],
            dist: [
                'less:dist'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'requirejs',
        //'concat',
        //'uglify',
        'copy',
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('screenshots', [
        'clean:server',
        'concurrent:server',
        'connect:livereload',
        'autoshot'
    ]);

};
