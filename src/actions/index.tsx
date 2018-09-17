import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const receiveScenes = actionCreator<string[]>('RECEIVE_ENTRIES');

export const getEntries = () => (dispatch: any) => {
    dispatch(receiveScenes(['a', 'b']))
};