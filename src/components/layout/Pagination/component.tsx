import React, { FunctionComponent, useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const Pagination: FunctionComponent<Props> = ({ className, page, onPageChange, perPage, itemsTotalLength }) => {
    const [pagesTotalLength, setPagesTotalLength] = useState(Math.ceil(itemsTotalLength / perPage));

    const handlePageClick = (selectedPage: { selected: number }) => {
        const currentPage = selectedPage.selected + 1;
        if (currentPage > 0 && currentPage < pagesTotalLength + 1) {
            onPageChange(currentPage);
        }
    };

    useEffect(() => {
        setPagesTotalLength(Math.ceil(itemsTotalLength / perPage));
    }, [page, itemsTotalLength]);

    return (
        <StyledComponent className={classNames(['layout-pagination', className])}>
            <ReactPaginate
                breakLabel="..."
                nextLabel={(<AiOutlineRight stroke={page === pagesTotalLength ? '#AAA' : '#4FC0BA'} />)}
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                pageCount={pagesTotalLength}
                previousLabel={(<AiOutlineLeft stroke={page === 1 ? '#AAA' : '#4FC0BA'} />)}
                containerClassName="container"
                pageClassName="page"
                pageLinkClassName="pagination-center"
                activeClassName="active"
                activeLinkClassName=""
                previousClassName="prev border-controls pagination-center"
                previousLinkClassName="prev-link border-controls pagination-center"
                nextClassName="next border-controls pagination-center"
                nextLinkClassName="next-link border-controls pagination-center"
                breakClassName="break"
                renderOnZeroPageCount={() => undefined}
                onClick={(event) => event.nextSelectedPage}
            />
        </StyledComponent>
    );
};

export default Pagination;
