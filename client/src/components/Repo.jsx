import React from 'react';


const Repo = (props) => (
  <div>
    <tr>
      <td>
        <a className="owner" href={props.url}>{props.owner}</a> <br/>
        <img className="ava" src={props.avatar} />
      </td>

      <td>
        <p className="about">About Repo: {props.about ? props.about : 'No description provided'}</p>
      </td>

      <td className="rating">
        <h3 id="forks">Forks: {props.forks}</h3>
        <h3 id="stars">Stars: {props.stars}</h3>
      </td>
    </tr>
  </div>
)

export default Repo;