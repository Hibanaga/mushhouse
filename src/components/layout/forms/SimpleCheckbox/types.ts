
export interface Props {
    type?: string;
    name: string,
    label: string,
    checked?: boolean,
    error?: string,
    className?: string;
    onChange: () => void,
}
