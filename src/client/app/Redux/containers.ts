import { connect } from 'react-redux';
import Tags from '../Tags/Tags';
import TagStats from '../TagStats/TagStats';

export const TagsContainer = connect(
  function mapStateToProps(state) {
    return { tags: state.tagsReducer.tags };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTag: (title: string) => {
        let action = { title, type: 'ADD_TAG' };
        dispatch(action)
      },
      removeTag: (index: number) => {
        let action = { index, type: 'REMOVE_TAG' };
        dispatch(action)
      }
    };
  }
)(Tags);

export const TagStatsContainer = connect(
  function mapStateToProps(state) {
    return { tagStats: state.tagsReducer.tagStats };
  }
)(TagStats);
