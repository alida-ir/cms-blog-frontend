import React from 'react'
import { useTranslation } from 'react-i18next';
import "./index.css"

export default function Pagination({perPagePost , totalPosts , paginate , paginatePrev , paginateStart , paginateNext , paginateEnd , CurrentClass}) {

    const { t } = useTranslation();

    const paginationNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / perPagePost); i++) {
        paginationNumbers.push(i);
    }


    if (totalPosts < perPagePost) {
        return ;
    }

    return (
        <div className="pagination">
            <button className="start" onClick={() => paginateStart()} >{t('startPagination')}</button>
            <button className="prev" onClick={() => paginatePrev()} >{t('prevPagination')}</button>
            {
                paginationNumbers.map((pageNumber) => (
                    <button className={CurrentClass(pageNumber)} onClick={() => paginate(pageNumber)} key={pageNumber}>{pageNumber}</button>
                ))
            }
            
            <button className="next" onClick={() => paginateNext()} >{t('nextPagination')}</button>
            <button className="end" onClick={() => paginateEnd()} >{t('endPagination')}</button>
        </div>
    )
}
