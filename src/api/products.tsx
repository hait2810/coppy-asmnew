import { ProductType } from "../pages/types/product";
import instance from "./instance";
export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const add = (product:ProductType) => {
    const url = `/products/`;
    return instance.post(url,product);
}

export const detail = (id:number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const detailCategory = (id:number) => {
    const  url = `/category/${id}/`;
    return instance.get(url);
}
export const searchProduct = (key:string) => {
    const url = `/sproduct/${key}`;
    return instance.get(url);
}
export const removeProduct = (id:number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const editProduct = (product:ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url,product);
}