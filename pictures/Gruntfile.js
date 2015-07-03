/**
 * Created by Donghui Huo on 2015/5/28.
 */
module.exports = function (grunt) {
    grunt.config.init({
        'compass': {
            dev: {
                options: {
                    force: true,
                    sassDir: ['scss'],
                    cssDir: ['css'],
                    environment: 'development'
                }
            },
            prod: {
                options: {
                    force: true,
                    sassDir: ['scss'],
                    cssDir: ['css'],
                    environment: 'production'
                }
            }
        },
        'copy': {
            once: {
                files:[
                    {expand: true,flatten: true, src: ['bower_components/jquery/dist/jquery.js','bower_components/bootstrap-sass/assets/javascripts/bootstrap.js','node_modules/masonry-layout/dist/masonry.pkgd.js','bower_components/imagesloaded/imagesloaded.pkgd.js','bower_components/jquery-colorbox/jquery.colorbox.js'], dest: 'js/dev/'},
                    {expand: true, flatten: true,src: ['bower_components/jquery/dist/jquery.min.js','bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js','node_modules/masonry-layout/dist/masonry.pkgd.min.js','bower_components/imagesloaded/imagesloaded.pkgd.min.js','bower_components/jquery-colorbox/jquery.colorbox-min.js'], dest: 'js/pro/'},
                    {expand: true, flatten: true,src: ['bower_components/jquery-colorbox/example5/*'], dest: 'css/jquery-colorbox/', filter: 'isFile'},
                    {expand: true, flatten: true,src: ['bower_components/jquery-colorbox/example5/images/*'], dest: 'css/jquery-colorbox/images/', filter: 'isFile'},
                    {expand: true, flatten: true,src: ['bower_components/bootstrap-sass/assets/fonts/bootstrap/*'], dest: 'fonts/bootstrap/', filter: 'isFile'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');


}