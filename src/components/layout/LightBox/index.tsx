import Component from './component';

export interface Props {
  imageSrc: string;
  onClose: (nextValue: boolean) => void;
}


Component.defaultProps = {};

export default Component;
