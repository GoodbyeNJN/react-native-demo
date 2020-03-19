import Axios from "axios";

const BASE_URL = "https://cnodejs.org/api/v1";

const axios = Axios.create({
    baseURL: BASE_URL,
});

axios.interceptors.request.use(config => ({
    ...config,
    params: {
        ...(config.params || {}),
        _: Number(new Date()),
    },
}));

axios.interceptors.response.use(
    response => {
        console.log("response: ", response);
        if (response && response.data) {
            return Promise.resolve(response.data);
        } else {
            console.error("no response");
            return Promise.reject({
                success: false,
                msg: "no response",
            });
        }
    },
    error => {
        console.error(error);
        return Promise.reject({
            success: false,
            msg: error,
        });
    },
);

export default axios;
