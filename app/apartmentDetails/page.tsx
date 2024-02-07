'use client'
import { useEffect, useState } from 'react';
import { getApartmentByRefNo } from '../../services/apartmentService';
import { Apartment } from '@/types/apartmentType';
import imgOne from '../../public/apartment.png'
import Responsive from '@/components/Slider';


export default function ApartmentDetailsPage() {
    const [apartment, setApartment] = useState<Apartment>();
    const location = window.location;
    useEffect(() => {
        const fetchApartmentDetails = async () => {
            try {
                // Get refNo from the route params
                const urlSearchString = location.search;
                const params = new URLSearchParams(urlSearchString);
                const  refNo  = params.get('refNo');

                if (refNo) {
                    // Fetch apartment details by refNo
                    const apartmentDetails = await getApartmentByRefNo(refNo);
                    setApartment(apartmentDetails);
                } else {
                    console.error('RefNo not found in route params.');
                }
            } catch (error) {
                console.error('Error fetching apartment details:', error);
            }
        };

        fetchApartmentDetails();
    }, []);

    return (
        <div className='flex flex-col h-full gap-6 m-6'>
            <div className='ml-10'>
                <Responsive/>
            </div>
            <div className='border-b pb-4 ml-2 md:ml-8'>
                <p className=' text-lg font-semibold text-blue-900'>{apartment?.title}</p>
                <p className='text-[10px] text-gray-400'>prices start from</p>
                <p className='text-2xl font-bold'>{apartment?.minPrice} EGP</p>
            </div>
            <div>
                <div className="relative overflow-x-auto  md:flex md:gap-6 ">
                    <table className="w-full md:w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Apartment Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b  dark:border-gray-700">
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Reference Number
                                </td>
                                <td className="px-6 py-4">
                                    {apartment?.refNo}
                                </td>

                            </tr>
                            <tr className="bg-white border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Bedrooms
                                </th>
                                <td className="px-6 py-4">
                                    {apartment?.bedrooms}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Bathrooms
                                </th>
                                <td className="px-6 py-4">
                                    {apartment?.bathrooms}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Deliver in
                                </th>
                                <td className="px-6 py-4">
                                    {apartment?.deliveryIn}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Compound
                                </th>
                                <td className="px-6 py-4">
                                    {apartment?.compound}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Sale Type
                                </th>
                                <td className="px-6 py-4">
                                    {apartment?.saleType}
                                </td>
                            </tr>
                            <tr className="bg-white border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Finishing
                                </th>
                                <td className="px-6 py-4">
                                    {apartment?.finishing}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className='mt-6  w-full md:w-1/2 flex justify-center'>
                        <div className='md:w-full h-full'>
                            <form className="max-w-sm mx-auto flex-col text-center border p-6 bg-[#E4E9F2]">
                                <h4 className='text-lg font-semibold text-white-900 mb-4'>Need expert advice?</h4>
                                <p>Fill out the form and one of our property consultants will contact you.</p>
                                <div className="mb-5">
                                    <input placeholder='Your name' type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-blue-500" />
                                </div>
                                <div className="mb-5">
                                    <input placeholder='Your email' type="text"  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-blue-500" />
                                </div>
                                <div>
                                    <input placeholder='Your message' type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-blue-500" />
                                </div>
                                <button className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-normal rounded-lg text-sm  py-2 text-center inline-flex justify-center items-center dark:focus:ring-[#2557D6]/50  mt-4 w-2/3">submit</button>
                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}
