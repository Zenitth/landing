module.exports = function(grunt) {

  // Configuration de Grunt
  grunt.initConfig({

  	// Less
  	less: {
  	  development: {
  	    options: {
  	      paths: ["../site/assets/css"]
  	    },
  	    files: {
  	      "../site/assets/css": "less/core.less"
  	    }
  	  },
  	  production: {
  	    options: {
  	      paths: ["../site/assets/css"],
  	      plugins: [
  	        new (require('less-plugin-clean-css'))
  	      ]
  	    },
  	    files: {
  	      "../site/assets/css/main.css": "less/core.less"
  	    },
  	  }
  	},

	// Concat JS
	// concat: {
 //      options: {
 //        separator: ';', // permet d'ajouter un point-virgule entre chaque fichier concaténé.
 //      },
 //      dist: {
 //        src: ['site/assets/js/caroussel-slick.js', 'site/assets/js/slick.min.js', '_src/js/app.js', '_src/js/main.js'], // la source
 //        dest: 'site/assets/js/main.js' // la destination finale
 //      }
 //    },

    // Combine Media Queries
    cmq: {
		options: {
	      	log: false
	    },
		your_target: {
			files: {
				'../site/assets/css': ['../site/assets/css/main.css']
			}
	    }
	  },

    // CSS min
    // cssmin: {
    //   target: {
    //     files: {
    //       '../site/assets/css/main.min.css': ['site/assets/css/main.css']
    //     }
    //   }
    // },

    // JS min
    minified : {
      files: {
        src: [
          'js/main.js',
        ],
        dest: '../site/assets/js/'
      },
      options : {
        sourcemap: false,
        allinone: false
      }
    },

    // Watch
    watch: {
      less: {
        files: 'less/*.less', // tous les fichiers Less de n'importe quel dossier
        tasks: ['less:production'],
        options: {
          livereload: false
        }
      },
      minified: {
        files: 'js/*.js',
        tasks: ['minified'],
      }
    }

  });

  // Import des packages
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-minified');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Définition des tâches Grunt
  grunt.registerTask('default', ['less:production', 'cmq']);

}