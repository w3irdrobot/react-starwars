import React from 'react';
import { connect } from 'react-redux';

const CharacterProfile = ({ profile, world }) =>
  <div id='character-profile' className='col-md-6'>
    <h1>Profile</h1>
    {profile.name && <p>Name: {profile.name}</p>}
    {profile.height && <p>Height: {profile.height}cm</p>}
    {profile.mass && <p>Weight: {profile.mass}kg</p>}
    {world.name && <p>World: {world.name}</p>}
    {profile.gender && <p>Gender: {profile.gender}</p>}
  </div>;

const mapStateToProps = ({ character: { profile, world } }) => ({
  profile,
  world,
});

export default connect(mapStateToProps)(CharacterProfile);
