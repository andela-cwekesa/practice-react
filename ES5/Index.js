//var Header = require ('./Header');
var Index = React.createClass({
	render : function () {
		return (
			<div>
			  	<Header />
			  	<h3>Imported Header</h3>
			</div>
			)
	}
});

var Header = React.createClass({
	render : function () {
		return (
				<h2>I am the header!!</h2>
			)
	}
});
ReactDOM.render(<Index /> , document.getElementById('app'))