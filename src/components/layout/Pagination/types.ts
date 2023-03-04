export interface Props {
    page: number;
    perPage: number;
    itemsTotalLength: number;
    onPageChange: (selected: number) => void;
}