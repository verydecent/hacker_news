import { STORY_ARCHIVE } from '../constants/actionsTypes';

const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id
});

export {
  doArchiveStory
}
