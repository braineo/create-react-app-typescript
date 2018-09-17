import {Action, combineReducers} from "redux";
import {isType} from 'typescript-fsa';
import {receiveScenes} from '../actions';
import {IStoreState} from "../typings";

const entries = (state: string[], action: Action) => {
    if (isType(action, receiveScenes)) {
        return action.payload;
    }
    return [];
};

const rootReducer = combineReducers<IStoreState>({
    entries
});

export default rootReducer;