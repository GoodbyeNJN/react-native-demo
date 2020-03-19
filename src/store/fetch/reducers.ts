import { ActionType, FetchAction, FetchState } from "./types";

const initState: FetchState = {
    isFetching: false,
};

export const fetchReducer = (oldState = initState, action: FetchAction): FetchState => {
    switch (action.type) {
        case ActionType.PENDING:
            return {
                isFetching: true,
            };
        case ActionType.RESOLVE:
            return { data: action.data, isFetching: false };
        case ActionType.REJECT:
            return { error: action.error, isFetching: false };
        default:
            return oldState;
    }
};
