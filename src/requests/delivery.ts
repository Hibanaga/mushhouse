import axios from 'axios';

export interface ListRequestParams {
  page?: number;
}
export const list = async (params?: ListRequestParams): Promise<any> => {
    const { data } = await axios({ url: 'https://api.szamanita-pantherina.com/api/delivery', method: 'GET', params })
        .then((data) => data);

    return data;
};
