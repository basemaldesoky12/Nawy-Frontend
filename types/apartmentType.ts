export interface Apartment {
    title: string;
    maxPrice: number | null;
    minPrice: number | null;
    maxUnitArea: number | null;
    minUnitArea: number | null;
    _id?: string;
    refNo?: string;
    bedrooms: number | null;
    bathrooms: number | null;
    deliveryIn: string;
    compound: string;
    saleType: string;
    finishing: string;
    description: string;
    
  }
  