
import instance from "./instance";
import { CategoryType } from "../pages/types/category";

export const listCate = () => {
    const url = `/category`;
    return instance.get(url);
}
export const addCate = (cate:CategoryType) => {
    const url = `/category/`;
    return instance.post(url,cate);
}
export const removeCate = (id:number) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
}