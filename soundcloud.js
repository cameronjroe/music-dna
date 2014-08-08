(function () {

	var SoundCloud = {

		api: {
			key: '83c37277b2c82f9b59b3ebbae1fd7de3',
			secret: '06722ee05ca5603cbbb0ff341d11a406',
			redirect_uri: 'http://localhost:3000/callback.html'
		},

		init: function () {

		    SC.initialize({
		      client_id: SoundCloud.api.key,
		      redirect_uri: SoundCloud.api.redirect_uri
		    });

		    SoundCloud.bindings();

		},

		bindings: function () {

			this.loginBtn = document.querySelector('.soundcloud-login');
			this.loginBtn.addEventListener('click', this.logIn);

		},

		logIn: function () {
			// initiate auth popup
			SC.connect(function() {
				SC.get('/me', function(me) {
					console.log(me);
				});
			});
		}

	};

	window.onload = SoundCloud.init;

})();