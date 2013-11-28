module.exports = function(grunt){
 
  // loadnpmTasksで使用したいタスクを読み込んでおく
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-watch');

  // initConfigで基本設定
  grunt.initConfig({
    uglify : {
      min : {
        files: {
          "../DevHub/static/javascripts/devhub.min.js" : [
//    "../DevHub/static/javascripts/jquery.min.js",
//    "../DevHub/static/javascripts/jquery-ui.js",
//    "../DevHub/static/javascripts/bootstrap.min.js",
//    "../DevHub/static/javascripts/perfect-scrollbar-0.4.5.with-mousewheel.min.js",
          "../DevHub/static/javascripts/libs/jquery.cookie.js",
          "../DevHub/static/javascripts/libs/jquery.autofit.js",
          "../DevHub/static/javascripts/libs/moment.js",
          "../DevHub/static/javascripts/libs/moment.lang_ja.js",
          "../DevHub/static/javascripts/libs/suggest.js",
          "../DevHub/static/javascripts/libs/livestamp.js",
          "../DevHub/static/javascripts/libs/jquery.decora.js",
          "../DevHub/static/javascripts/libs/jquery.caret.js",
          "../DevHub/static/javascripts/libs/difflib.js",
          "../DevHub/static/javascripts/libs/diffview.js",
          "../DevHub/static/javascripts/libs/client.js",
          ]
        }
      }
    },
    cssmin : {
      min : {
        files : {
          "../DevHub/static/stylesheets/devhub.min.css" : [
            "../DevHub/static/stylesheets/libs/diffview.css",
            "../DevHub/static/stylesheets/libs/emolett.css",
            "../DevHub/static/stylesheets/libs/devhub.css",
          ]
        }
      }
    },
    watch: {
      files: [
        '../DevHub/static/javascripts/libs/*.js',
        '../DevHub/static/stylesheets/libs/*.css'
        ],
      tasks: ['uglify','cssmin']
    }
  });

  grunt.registerTask("default", ["uglify", "cssmin"]);
 
};

