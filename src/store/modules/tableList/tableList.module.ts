import { Record } from 'immutable';
import {
    put,
    call ,
    all,
    takeEvery,
} from 'redux-saga/effects';
import {Action, createAction, handleActions} from 'redux-actions';
import TableListPayload from '@src/types/payload/TableListPayload';

// API Services
import SampleService from '@src/services/Apis/sample.service';
import TableListResponse from '@src/types/response/TableListResponse';

const GET_TABLE_DATA_REQUEST = 'table/GET_TABLE_DATA_REQUEST';
const GET_TABLE_DATA_SUCCESS = 'table/GET_TABLE_DATA_SUCCESS';
const GET_TABLE_DATA_FAILURE = 'table/GET_TABLE_DATA_FAILURE';

export const getTableDataRequest = createAction(GET_TABLE_DATA_REQUEST);
export const getTableDataSuccess = createAction(GET_TABLE_DATA_SUCCESS);
export const getTableDataFailure = createAction(GET_TABLE_DATA_FAILURE);

export function* getTableData(action: Action<TableListPayload>) {
    const response: Array<TableListResponse> = yield call(SampleService.SampleTableData, action.payload);
    yield put(getTableDataSuccess(response));
};

export function* watchTableDataActions() {
    yield all([
        takeEvery<string, any>(GET_TABLE_DATA_REQUEST, getTableData)
    ])
};

// 초기 상태를 정의합니다
const InitialState = Record({
    data: [],
    loading: false,
});

export interface TableStateType {
    data: Array<TableListResponse>;
    loading: boolean;
}

class TableState extends InitialState implements TableStateType {
}

const initialState = new TableState();

// 리듀서
const tableList = handleActions<TableState, any>({
    [GET_TABLE_DATA_REQUEST]: (state, action) => {
        console.log('request');
        return state.set('loading', true);
    },
    [GET_TABLE_DATA_SUCCESS]: (state, action) => {
        console.log('success');
        return state
            .set('loading', false)
            .set('data', action.payload);

    },
    [GET_TABLE_DATA_FAILURE]: (state, action) => {
        console.error('통신에러');
        return state.set('loading', false);
    },
}, initialState);

export default tableList;
