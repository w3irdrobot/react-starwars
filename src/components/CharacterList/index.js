import React from 'react';
import { connect } from 'react-redux';

const CharacterList = ({ characters }) =>
  <ul>
    {characters.map(char =>
      <li>{char.name}</li>
    )}
  </ul>;

const mapStateToProps = ({ characters }) => ({
  characters,
});

export default connect(mapStateToProps)(CharacterList);
