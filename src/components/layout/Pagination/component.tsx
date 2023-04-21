import { FunctionComponent } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

import Image from 'components/layout/Image';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutPagination: FunctionComponent<Props> = ({ currentPage, lastPage, onPageChange, hrefBuilder }) => ((
    <StyledComponent className="layout-pagination">
        <ReactPaginate
            pageCount={lastPage}
            forcePage={currentPage -1}
            disableInitialCallback={true}
            pageRangeDisplayed={1}
            onPageChange={({ selected }: { selected: number }) => onPageChange(selected + 1)}
            hrefBuilder={(page: number) => hrefBuilder && hrefBuilder(page)}
            previousLabel={(
                <div className={classNames(['inner-image', 'prev-icon'])}>
                    <Image
                        fill
                        objectFit="contain"
                        src="/images/slider-arrow.svg"
                        aria-label="Previous"
                        alt="prev-icon"
                        className="image"
                    />
                </div>
            )}
            nextLabel={(
                <div className={classNames(['inner-image', 'next-icon'])}>
                    <Image
                        fill
                        objectFit="contain"
                        src="/images/slider-arrow.svg"
                        aria-label="Next"
                        alt="prev-icon"
                        className="image"
                    />
                </div>
            )}
        />
    </StyledComponent>
));

export default LayoutPagination;
