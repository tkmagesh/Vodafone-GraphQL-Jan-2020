import React, { Component } from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';


class App extends Component{
  state = { userList : [] };

  onLoadClick = async () => {
    const getUsers = gql`
      {
        allUsers : getUsers{
          id,
          name,
          isActive
        }
      }
    `;

    const client = new ApolloClient({
      uri: 'http://localhost:8085/graphql'
    });

    const response = await client.query({
      query : getUsers
    });
    const { allUsers } = response.data;
    this.setState({ userList : allUsers });

  }
  render() {
    const userItems = this.state.userList.map(user => <li>{user.name}</li>);

    return (
      <div>
        <input type="button" value="Load" onClick={this.onLoadClick} />
        <ol>
          {userItems}
        </ol>
      </div>
    );
  }
}



export default App;
