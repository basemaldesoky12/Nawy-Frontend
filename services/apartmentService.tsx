import { Apartment } from "@/types/apartmentType";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllApartments = async (page : number) => {
  try {
    const response = await fetch(`${API_BASE_URL}apartments/${page}`);
    const { data, totalPages } = await response.json(); // Extract totalPages from the response
    return { data, totalPages }; // Return both data and totalPages
  } catch (error) {
    console.error('Error fetching apartments:', error);
    throw new Error('Error fetching apartments');
  }
};
export const getApartmentByRefNo = async (refNo: string | string[]) => {
    try {
      const response = await fetch(`${API_BASE_URL}apartment/${refNo}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching apartment by refNo:', error);
      throw new Error('Error fetching apartment by refNo');
    }
  };

export const addApartment = async(apartment : Apartment) => {
  try {
    const response = await fetch(`${API_BASE_URL}addapartment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apartment),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding apartment:', error);
    throw new Error('Error adding apartment');
  }
}
  