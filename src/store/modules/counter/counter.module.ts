import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

type ColorPayload = Array<number>;

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setColor = createAction<ColorPayload>(SET_COLOR);

// 초기 상태를 정의합니다
const InitialState = Record({
    color: [0],
    number: 0
});

export interface CounterStateType {
    color: Array<number>;
    number: number;
}

class CounterState extends InitialState implements CounterStateType {
}

const initialState = new CounterState();

const counter = handleActions<CounterState, any>({
    [INCREMENT]: (state): CounterState => {
        return state.set('number', state.get('number') + 1);
    },
    [DECREMENT]: (state): CounterState => {
        return state.set('number', state.get('number') - 1);
    },
    [SET_COLOR]: (state, action): CounterState => {
        return state.set('color', action.payload);
    },
}, initialState);


export default counter;
