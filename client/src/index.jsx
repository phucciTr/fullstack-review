import React from 'react';
import ReactDOM from 'react-dom';
import request from './ajax/request.js';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    request.getTop25((repos) => this.setState({ repos: repos }));
  }

  search (term) {
    request.searchUser(term);
  }

  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));