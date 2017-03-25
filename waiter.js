import React from 'react'

export default (getPromise,loading)=>{
	return class AsyncComponent extends React.Component {
		mounted = false
		state = {
			Component:null
		}
		componentWillMount() {
			getPromise().then(m => m.default).then(Component => {
				if ( this.mounted ) {
					this.setState({Component});
				}
			})
		}
		componentDidMount() {
			this.mounted = true;
		}
		componentWillUnmount() {
			this.mounted = false;
		}
		render() {
			const {Component} = this.state;
			if ( Component !== null ) {
				return <Component {...this.props} />
			}
			return loading||<h2>加载中...</h2>
		}
	}
}