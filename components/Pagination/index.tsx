import { useState } from 'react';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination ({ totalPages, currentPage, onPageChange } : PaginationProps) {
    const handleClick = (page : number) => {
        onPageChange(page);
    };

    return (
        <div className="flex justify-center space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
                <button
                    key={page}
                    onClick={() => handleClick(page + 1)}
                    className={`px-3 py-1 rounded-md ${
                        page + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                >
                    {page + 1}
                </button>
            ))}
        </div>
    );
};
