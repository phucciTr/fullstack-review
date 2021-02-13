import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    <table>
      {props.repos.map((repo) =>
        <Repo avatar={repo.avatarUrl} owner={repo.owner} url={repo.repoUrl} forks={repo.forksCount} stars={repo.starsCount} about={repo.repoDescription} key={repo._id}/>
      )}
    </table>

  </div>
)

export default RepoList;