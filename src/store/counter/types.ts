export type CounterState = number;
export type CounterAction = ClearCounterAction | IncreaseCounterAction | DecreaseCounterAction;
export enum ActionType {
    "CLEAR",
    "INCREASE",
    "DECREASE",
}

interface ClearCounterAction {
    type: typeof ActionType.CLEAR;
}

interface IncreaseCounterAction {
    type: typeof ActionType.INCREASE;
    payload: CounterState;
}

interface DecreaseCounterAction {
    type: typeof ActionType.DECREASE;
    payload: CounterState;
}
