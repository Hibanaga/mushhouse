import Component from './component';

Component.defaultProps = {
};

export interface Props {
  currentPage: number;
  lastPage: number;
  onPageChange: (nextPage: number) => any;
  hrefBuilder?: (page: number) => string;
}

export default Component;
