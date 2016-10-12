import React from 'react';
import { connect } from 'react-redux';

const CharacterWorld = ({ world }) =>
  <div id='character-world'>
    <h1>World</h1>
    <h2>{world.name}</h2>
    <p>Population: {world.population}</p>
    <p>Diameter: {world.diameter}km</p>
    <p>Day length: {world.rotation_period} hours</p>
    <p>Year length: {world.orbital_period} days</p>
    <p>Climate: {world.climate}</p>
  </div>;

const mapStateToProps = ({ character: { world } }) => ({
  world,
});

export default connect(mapStateToProps)(CharacterWorld);
