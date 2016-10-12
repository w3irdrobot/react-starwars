import React from 'react';
import { connect } from 'react-redux';

const CharacterProfile = ({ profile, world }) =>
  <div id='character-profile'>
    <h1>{profile.name}</h1>
    <p>Height: {profile.height}cm</p>
    <p>Weight: {profile.mass}kg</p>
    <p>Homeworld: {world.name}</p>
    <p>Gender: {profile.gender}</p>
  </div>;

const mapStateToProps = ({ character: { profile, world } }) => ({
  profile,
  world,
});

export default connect(mapStateToProps)(CharacterProfile);
