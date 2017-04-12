<img src="https://travis-ci.org/J8298c/yumshub.svg?branch=master" alt="build pass or fail"/>
<h1 style="text-align: center">Yums!</h1> 
<p>Yums lets you search for restuarants that deliver near you. Users have the ability to search for food by type on a side note currently the only options we have for search are <strong>"Italian Pizza Burgers Vegan American Spanish"</strong>. The search page provides a view of all types of restuarants and all nearby restuarants and thier rating, if you want to check out the restaurants menu just click on the restuarant of your choosing and you will be taken to the restaurants menu.</p>
<hr />

<h3>Getting Started</h3>
These instruction will help you get a local copy of Yum up and running.

<h4>Prerequisites</h4>
<p>Yum is built on top of facebooks create-react-app, You can find out more about that here (https://github.com/facebookincubator/create-react-app)</p>

<p>You need to have a package manager such as nodes npm (<a href='https://www.npmjs.com'>https://www.npmjs.com</a>) or yarn (<a href='https://yarnpkg.com/en/'>https://yarnpkg.com</a>).</p>

<p>You will also need node installed on your local dev machine which can be found here (<a href="https://nodejs.org/en/">nodejs.org</a>)</p>

<p>You will also need express installed locally as well which can be found here (<a href="https://expressjs.com/">https://expressjs.com/</a>)</p>

<hr />

<h3>Installing</h3>

<p>To install Yum on your local machine, checkout the repo and cd into your local copy and run yarn install or npm install. This will install all the needed dependencies</p>

<p>To fire up Yum in your browser you can run Yarn/Npm <strong>dev</strong> this will start the development server which will watch your files for errors everytime you save.</p>

<p>If you want to further configure the webpack build you can run Yarn/Npm eject(<strong>This is irreversible</strong>).</p>
<p>To login into the app you can create a username and password or simply use the default user below</p>
<ul style="list-style-type: none">
<li>Username: thewolverine@xmen.com</li>
<li>Password: abcd1234</li>
</ul>
<hr />

<h3>Testing</h3>

<p>Yum is using enzyme and sinon for testing you can read more about them here <a href="https://github.com/airbnb/enzyme">enzyme</a> and <a href="http://sinonjs.org/">sinon</a></p>

<p>Most of the tests use shallow rendering to test that the inner elements of the components are rendering below you can see a quick example this type of test</p>

<code>
describe('<NotFound />', ()=>{
	it('should render correctly', ()=>{
		const wrapper = shallow(<NotFound />);
		expect(wrapper.find('div')).to.have.length(1);
		expect(wrapper.find('h1')).to.have.length(1);
	})
})
</code>
<hr />

<h3>Deployment</h3>

<p>To serve your file first run the Yarn/Npm build command to rebuild all the files in the Build folder.</p>
<hr />

<h3>Built With</h3>
<ul>
	<ol><a href="https://facebook.github.io/react/">React</a></ol>
	<ol><a href="https://webpack.github.io/">WebPack</a></ol>
	<ol><a href="https://reacttraining.com/react-router/">React Router</a></ol>
	<ol><a href="https://firebase.google.com/">Firebase</a></ol>
	<ol><a href="https://react-bootstrap.github.io/">React-Bootstrap</a></ol>
	<ol><a href="http://redux.js.org/">Redux</a></ol>
	<ol><a href="http://redux.js.org/docs/basics/UsageWithReact.html">React-Redux</a></ol>
	<ol><a href="http://chaijs.com/">Chai</a></ol>
	<ol><a href="https://github.com/airbnb/enzyme">Enzyme </a></ol>
	<ol><a href="http://sinonjs.org/releases/v2.1.0/spies/">Sinon</a></ol>
	<ol><a href="https://github.com/facebookincubator/create-react-app">React-Create-App </a></ol>
</ul>
<hr />
