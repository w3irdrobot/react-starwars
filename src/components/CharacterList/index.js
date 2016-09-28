import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacterProfile,
} from '../../redux/character/actions';

const CharacterList = ({ characters, setCharacter }) =>
  <ul>
    {characters.map((c, i) =>
      <li
        onClick={setCharacter(i + 1)}
        key={c.name}
      >
        {c.name}
      </li>
    )}
  </ul>;

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
