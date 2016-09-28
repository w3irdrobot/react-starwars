import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/character/actions';

const CharacterList = ({ characters, setUser }) =>
  <ul>
    {characters.map((c, i) =>
      <li
        onClick={setUser(i)}
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
  setUser: id => () => dispatch(setCurrentUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
