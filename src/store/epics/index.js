import { combineEpics, createEpicMiddleware, } from 'redux-observable'

//import api from '../../api'
import uiEpic from './ui/uiEpics'

export const rootEpic = combineEpics(
  ...Object.values(uiEpic),
);

export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    // indexedDb: db,
    // api: api,
  }
});
