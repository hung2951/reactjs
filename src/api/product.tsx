import config from "./config";

export const list = () => {
    const url = '/products';
    return config.get(url);
}