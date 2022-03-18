import config from "./config";

export const list = () => {
    const url = '/products';
    return config.get(url);
}
export const add = (product: any) => {
    const url = '/products';
    return config.post(url, product);
}