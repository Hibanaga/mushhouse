import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import StyledComponent from './styles';
import { Props } from './types';

const Pagination: FunctionComponent<Props> = ({ page, perPage, itemsTotalLength, onPageChange }) => {
    const [pagesTotalLength, setPagesTotalLength] = useState<number>(Math.ceil(itemsTotalLength / perPage));

    useEffect(() => {
        setPagesTotalLength(Math.ceil(itemsTotalLength / perPage));
    }, [JSON.stringify({ perPage, itemsTotalLength })]);

    const handlePageClick = (selectedPage: { selected: number }) => {
        const currentPage = selectedPage.selected + 1;

        if (currentPage > 0 && currentPage < pagesTotalLength + 1) {
            onPageChange(currentPage);
        }
    };

    return (
        <StyledComponent className="layout-pagination">
            <ReactPaginate
                disableInitialCallback
                breakLabel="..."
                // nextLabel={(<IconChevronRight stroke={page === pagesTotalLength ? '#AAA' : '#4FC0BA'} />)}
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                forcePage={page - 1}
                pageCount={pagesTotalLength}
                // previousLabel={(<IconChevronLeft stroke={page === 1 ? '#AAA' : '#4FC0BA'} />)}
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
