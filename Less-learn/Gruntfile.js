/**
 * http://usejsdoc.org/
 */

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		watch : {
			lessfiles : {
				files : [ '*.less' ],
				tasks : [ 'less' ]
			},
		},
		less : {
			development : {
				files : {
					'style.css' : 'style.less'
				}
			}
		}
	});

	grunt.registerTask('default', [ 'less','watch' ]);

};