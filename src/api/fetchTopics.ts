import axios from "@/api";

export type ResponseData = {
    id: string;
    author_id: string;
    tab: string;
    content: string;
    title: string;
    last_reply_at: string;
    good: boolean;
    top: boolean;
    reply_count: number;
    visit_count: number;
    create_at: string;
    author: {
        loginname: string;
        avatar_url: string;
    };
}[];

export type ResponseError = string | {};

export const fetchTopics = () => axios.get<ResponseData>("/topics");
