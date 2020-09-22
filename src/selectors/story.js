// ES6
const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export {
  getReadableStories
}

/*

Without ES6

function isNotArchived(archivedIds) {
  return function (story) {
    return archivedIds.indexOf(story.objectID) === -1;
  }
}

function getReadbleStories(state) {
  return state.storyState.filter(isNotArchived(state.archiveState));
}

*/