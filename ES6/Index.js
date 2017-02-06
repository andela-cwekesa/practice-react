class Index extends React.Component {
	render () {
		return (
			<div>
			<Header />
			<p>Imported Header</p>
			</div>
			)
	}
}

class Header extends React.Component {
	render () {
		return (
			<p>I am the header!</p>
			)
	}
}

ReactDOM.render(<Index /> , document.getElementById('app'))