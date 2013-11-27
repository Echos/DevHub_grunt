module.exports = function(grunt){
 
  // loadnpmTasksで使用したいタスクを読み込んでおく
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
 
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
          "../DevHub/static/javascripts/jquery.cookie.js",
          "../DevHub/static/javascripts/jquery.autofit.js",
          "../DevHub/static/javascripts/moment.js",
          "../DevHub/static/javascripts/moment.lang_ja.js",
          "../DevHub/static/javascripts/suggest.js",
          "../DevHub/static/javascripts/livestamp.js",
          "../DevHub/static/javascripts/jquery.decora.js",
          "../DevHub/static/javascripts/jquery.caret.js",
          "../DevHub/static/javascripts/difflib.js",
          "../DevHub/static/javascripts/diffview.js",
          "../DevHub/static/javascripts/client.js",
          ]
        }
      }
    },
    cssmin : {
      min : {
        files : {
          "../DevHub/static/stylesheets/devhub.min.css" : [
            "../DevHub/static/stylesheets/diffview.css",
            "../DevHub/static/stylesheets/emolett.css",
            "../DevHub/static/stylesheets/devhub.css",
          ]
        }
      }
    }
  });

  grunt.registerTask("default", ["uglify", "cssmin"]);
 
};

