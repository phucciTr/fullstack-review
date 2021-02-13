import React from 'react';


const Repo = (props) => (
  <tbody>
    <tr>
      <td>
        <a className="owner" href={props.url}>{props.owner}</a> <br/>
        <img className="ava" src={props.avatar} />
      </td>

      <td className="rating">
        <h4 className="forks">Forks: {props.forks}</h4>
        <h4 className="stars">Stars: {props.stars}</h4>
      </td>

      <td>
        <p className="about">About Repo: {props.about ? props.about : 'No description provided'}</p>
      </td>

    </tr>
  </tbody>
)

export default Repo;