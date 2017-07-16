// const socket = io('http://localhost:3030/');
// const app = feathers().configure(feathers.socketio(socket));

const app = feathers()
  .configure(feathers.rest('http://localhost:3030').fetch(fetch))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }));

const data	= app.service('/data');
const users = app.service('/users');

function localAuth() {
	app.authenticate({
     type:	'local',
     'email':	'feathers@example.com',
     'password':	'secret'
    }).then(token	=>	{
		    console.log('User	is	logged	in with token : '+token);
    }).catch(err => {
	    console.log('Failed : '+err);
    });
}
