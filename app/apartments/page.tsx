'use client'
import { useEffect, useState } from 'react';
import { getAllApartments } from '../../services/apartmentService';
import { Apartment } from '@/types/apartmentType';
import apartmentImage from '../../public/apartment.png'
import { useRouter } from 'next/navigation';
import Pagination from '@/components/Pagination';

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const router = useRouter();
    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const data = await getAllApartments(currentPage);
                setApartments(data.data);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching apartments:', error);
            }
        };

        fetchApartments();
    }, [currentPage]);
    const handlePageChange = (page : number) => {
        setCurrentPage(page);
    };
    return (
        <div className='flex flex-col h-full  gap-6 m-8'>
            <div>
                <p className=' text-lg font-semibold text-blue-900'>Explore Properties In Il Bosco New Capital</p>
            </div>
            <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-2'>
                {apartments ? (
                    apartments.map((apartment) => (
                        <div onClick={()=> router.push(`/apartmentDetails?refNo=${apartment.refNo}`)} key={apartment._id} className="cursor-pointer bg-white border border-gray-200 rounded-lg mb-4 md:mb-0 md:mr-4">
                            <div>
                                <img className="rounded-t-lg transform  duration-300 hover:scale-105 overflow-hidden" src={apartmentImage.src} alt="" />
                            </div>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{apartment.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{apartment.description}</p>
                                {/* Add other details as needed */}
                                <div>
                                    <p className='text-[10px] text-gray-300'>prices start from</p>
                                    <p className='text-xl font-semibold'>{apartment.minPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg p-5">
                        <p className="text-gray-700">No apartments available.</p>
                    </div>
                )}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
}