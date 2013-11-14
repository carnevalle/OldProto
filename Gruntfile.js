// Generated on 2013-10-05 using generator-mobile 0.0.2
'use strict';
var LIVERELOAD_PORT = 35729;
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
                port: 9000,
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
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        // coffee: {
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: '<%= yeoman.app %>/js',
        //             src: '{,*/}*.coffee',
        //             dest: '.tmp/js',
        //             ext: '.js'
        //         }]
        //     },
        //     test: {
        //         files: [{
        //             expand: true,
        //             cwd: 'test/spec',
        //             src: '{,*/}*.coffee',
        //             dest: '.tmp/spec',
        //             ext: '.js'
        //         }]
        //     }
        // },
        // compass: {
        //     options: {
        //         sassDir: '<%= yeoman.app %>/css',
        //         cssDir: '.tmp/css',
        //         generatedImagesDir: '.tmp/img/generated',
        //         imagesDir: '<%= yeoman.app %>/img',
        //         javascriptsDir: '<%= yeoman.app %>/js',
        //         /*fontsDir: '<%= yeoman.app %>/css/fonts',*/
        //         importPath: '<%= yeoman.app %>/bower_components',
        //         httpImagesPath: '/img',
        //         httpGeneratedImagesPath: '/img/generated',
        //         httpFontsPath: '/css/fonts',
        //         relativeAssets: false
        //     },
        //     dist: {},
        //     server: {
        //         options: {
        //             debugInfo: true
        //         }
        //     }
        // },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: yeomanConfig.app + '/js',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },

        less: {
            server: {
                /*
                files: [
                    {
                        expand: true,
                        cwd:'<%= yeoman.app %>/less/',
                        src: ['style.less'],
                        dest: '<%= yeoman.app %>/css',
                        ext: '.css'
                    }
                ]
                */
                files: {
                  "<%= yeoman.app %>/css/main.css":"<%= yeoman.app %>/less/style.less"
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

        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/js/{,*/}*.js',
                        '<%= yeoman.dist %>/css/{,*/}*.css',
                        '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/css/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/css/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/css/main.css': [
                        '.tmp/css/{,*/}*.css',
                        '<%= yeoman.app %>/css/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
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
                //'coffee',
                //'compass:dist',
                'imagemin',
                //'svgmin',
                'htmlmin'
            ]
        },
        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                rjsConfig: '<%= yeoman.app %>/js/main.js'
            }
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
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'requirejs',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        //'rev',
        'usemin'
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
