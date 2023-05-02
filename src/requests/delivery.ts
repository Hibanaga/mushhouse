import axios from 'axios';

export interface ListRequestParams {
  page?: number;
}
export const list = async (params?: ListRequestParams): Promise<{ next: string | null, elements: [] }> => {
    const { data } = await axios({ url: 'https://api.szamanita-pantherina.com/api/delivery', method: 'GET', params })
        .then((data) => data);

    return {
        next: data.next,
        elements: data.results,
    };
};
