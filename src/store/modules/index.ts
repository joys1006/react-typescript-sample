import {
    combineReducers
} from 'redux';
import { all } from 'redux-saga/effects';

// modules
import counter, { CounterStateType } from './counter/counter.module';
import tableList, {TableStateType, watchTableDataActions} from '@src/store/modules/tableList/tableList.module';

// Saga
export function* rootSaga() {
    yield all([
        watchTableDataActions(),
    ])
}

export default combineReducers({
    counter,
    tableList
});

export interface StoreState {
    counter: CounterStateType;
    tableList: TableStateType;
}
