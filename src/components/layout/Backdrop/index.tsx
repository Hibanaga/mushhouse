import Component from './component';

export interface Props {
  isOpen: boolean;
  className?: string;
  onDrop?: () => void;
}


Component.defaultProps = {
};

export default Component;
