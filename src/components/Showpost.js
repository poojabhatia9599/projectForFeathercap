import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class Showpost extends Component {
	render() {

		const {latestposts} = this.props;
		
		const listt = latestposts.map((post,i) => {
			return (
				<tr key={i}>

				<td >{post.userId}</td>
				<td >{post.id}</td>
				<td >{post.title}</td>
				<td >{post.body}</td>
				</tr>
			)
		})

		return(
			<div>
			<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>UserId</th>
							<th>Id</th>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
				{listt}
					</tbody>
			</Table>
			</div>
		);
	}

}


export default Showpost;
