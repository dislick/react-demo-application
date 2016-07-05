import { connect } from 'react-redux';
import Tags from '../Tags/Tags';

export const TagsContainer = connect(
  function mapStateToProps(state) {
    return { reduxState: state.tagsReducer };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTag: (title: string) => {
        let action = { title, type: 'ADD_TAG' };
        return dispatch(action)
      },
      removeTag: (index: number) => {
        let action = { index, type: 'REMOVE_TAG' };
        return dispatch(action)
      }
    };
  }
)(Tags);
