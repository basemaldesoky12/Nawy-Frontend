const API_BASE_URL = 'http://localhost:8080/api';

export const getAllApartments = async (page : number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/apartments/${page}`);
    const { data, totalPages } = await response.json(); // Extract totalPages from the response
    return { data, totalPages }; // Return both data and totalPages
  } catch (error) {
    console.error('Error fetching apartments:', error);
    throw new Error('Error fetching apartments');
  }
};
export const getApartmentByRefNo = async (refNo: string | string[]) => {
    try {
      const response = await fetch(`${API_BASE_URL}/apartment/${refNo}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching apartment by refNo:', error);
      throw new Error('Error fetching apartment by refNo');
    }
  };
  