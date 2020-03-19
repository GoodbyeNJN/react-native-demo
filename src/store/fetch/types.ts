import { ResponseData, ResponseError } from "@/api/fetchTopics";

export interface FetchState {
    data?: ResponseData;
    error?: ResponseError;
    isFetching: boolean;
}
export type FetchAction = PendingAction | ResolveAction | RejectAction;
export enum ActionType {
    "PENDING",
    "RESOLVE",
    "REJECT",
}

interface PendingAction {
    type: typeof ActionType.PENDING;
}

interface ResolveAction {
    type: typeof ActionType.RESOLVE;
    data: ResponseData;
}

interface RejectAction {
    type: typeof ActionType.REJECT;
    error: ResponseError;
}
