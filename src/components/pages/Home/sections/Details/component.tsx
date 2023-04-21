import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import { PageSizes } from 'types/pageSizes';
import Routes from 'types/routes';

import { scrollToPositionId } from 'utils/page';

import Container from 'components/layout/Container';
import Pagination from 'components/layout/Pagination';
import List from 'components/modules/List';

import { Props } from './index';
import StyledComponent from './styles';

const HomeSectionDetails: FunctionComponent<Props> = ({ meta, products, onChange }) => {
    const router = useRouter();

    return (
        <StyledComponent
            id="id_products-list"
            className="home-section-details"
        >
            <h3 className="section-headline">Nasze produkty</h3>
            <Container>
                {products && <List products={products} />}

                {meta && (
                    <div className="inner-pagination">
                        <Pagination
                            currentPage={meta.page || 1}
                            lastPage={meta.totalCount / PageSizes.Medium || 1}
                            onPageChange={(page: number) => {
                                onChange('page', page);
                                scrollToPositionId('id_products-list');
                            }}
                        />
                    </div>
                )}
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionDetails;
