import React, { Component } from 'react';
import Showpost from './components/Showpost';

class App extends Component {
	constructor() {
		super()
		this.state = {
			posts : [],
			searchfield : '',
			latestposts : [],
			newpost : '',
			newbody : ''
		}
	}

	oninputchange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	onbuttonclick = (event) => {
		var i= 0
		var latestposts = []
		
		for(i=0;i<this.state.searchfield;i++) {
			latestposts[i] = this.state.posts[i]
		}
		this.setState({ latestposts : latestposts})
	}

	onposttitlechange = (event) => {
		this.setState({ newpost: event.target.value})
	}

	onpostbodychange = (event) => {
		this.setState({ newbody: event.target.value})
	}

	onpostbuttonclick = () => {
		fetch('http://localhost:5000/fetchdata', {
        			method: 'post',
        			headers: {'Content-Type': 'application/json'},
        			body: JSON.stringify({
              			newpost: this.state.newpost,
              			newbody: this.state.newbody
        			})
        		})

	}

	  render() { 
	  	fetch('http://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(posts => this.setState({ posts : posts }))

	  	let list = ''
	  	if(this.state.latestposts.length) {
	  		list = <Showpost latestposts={this.state.latestposts}></Showpost>
	  	} else {
	  		list = <p>Enter the number to get the posts</p>
	  	}

	  	
	    return (
	      <div className="App">
	        <input onChange={this.oninputchange}/>
	        <button onClick={this.onbuttonclick}>View</button>
	        { list }
	        Enter post title: <input placeholder="Enter post title" 
	        onChange={this.onposttitlechange}/>
	        Enter post body: <input placeholder="Enter body"
	        onChange={this.onpostbodychange}/>
	        <button onClick={this.onpostbuttonclick}>Post</button>

	      </div>
	    );
	  }
}

export default App;
