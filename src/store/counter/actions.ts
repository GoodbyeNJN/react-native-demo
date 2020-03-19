import { Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ActionType, CounterAction, CounterState } from "./types";

export const clear = (): CounterAction => ({
    type: ActionType.CLEAR,
});

export const increase = (newCounterState: CounterState): CounterAction => ({
    type: ActionType.INCREASE,
    payload: newCounterState,
});

export const decrease = (newCounterState: CounterState): CounterAction => ({
    type: ActionType.DECREASE,
    payload: newCounterState,
});

type ThunkResult<T> = ThunkAction<T, {}, {}, AnyAction>;

export const increaseAsync = (): ThunkResult<void> => {
    return async (dispatch) => {
        await delay(1000);
        dispatch(increase(10));
    };
};

const delay = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            return 0;
        }, ms);
    });
};
