import { ActionType, CounterAction, CounterState } from "./types";

const initState: CounterState = 0;

export const counterReducer = (oldState = initState, action: CounterAction): CounterState => {
    switch (action.type) {
        case ActionType.CLEAR:
            return 0;
        case ActionType.INCREASE:
            if (action.payload) {
                return oldState + action.payload;
            }
            return oldState + 1;
        case ActionType.DECREASE:
            return oldState - 1;
        default:
            return oldState;
    }
};
