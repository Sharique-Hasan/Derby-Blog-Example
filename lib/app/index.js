var derby = require('derby')
  , app = derby.createApp(module)
  , get = app.get
  , view = app.view
  , ready = app.ready
  , start = +new Date()

derby.use(require('../../ui'))
derby.use(require('derby-ui-boot'))


var navItems = [
	{title: 'About',	link: '/about'},
	{title: 'Contact',link: '/contact'}
];

// ROUTES //

// Derby routes can be rendered on the client and the server
get('/', function(page, model, params) {
	page.render({
  	title: "Home"
	, navItems: navItems
  })
})


// CONTROLLER FUNCTIONS //

ready(function(model) {
})
