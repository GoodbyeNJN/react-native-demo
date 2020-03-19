import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { ActionType, FetchAction } from "./types";

import { ResponseData, ResponseError, fetchTopics } from "@/api/fetchTopics";

const fetchDataPending = (): FetchAction => ({ type: ActionType.PENDING });

const fetchDataResolve = (data: ResponseData): FetchAction => ({
    type: ActionType.RESOLVE,
    data,
});

const fetchDataReject = (error: ResponseError): FetchAction => ({
    type: ActionType.REJECT,
    error,
});

type ThunkResult<T> = ThunkAction<T, {}, {}, AnyAction>;

export const fetchData = (): ThunkResult<void> => async (dispatch) => {
    dispatch(fetchDataPending());
    fetchTopics()
        .then((data) => {
            dispatch(fetchDataResolve(data.data));
        })
        .catch((error) => {
            dispatch(fetchDataReject(error));
        });
};
