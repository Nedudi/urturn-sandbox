// bower = require('bower');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('bower.json'),
    exec: {
      install: {
        cmd: "bower cache-clean && bower install"
      },
      tag: {
        cmd: "git tag v<%=pkg.version%> && git push --tags"
      },
      npmpublish: {
        cmd: "npm publish"
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  grunt.registerTask('default', ['exec:install']);
  grunt.registerTask('publish', ['exec:tag', 'exec:npmpublish']);

};
