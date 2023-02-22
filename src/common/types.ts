export type CourseType = {
    id: number;
    name: string;
    img: string;
    rating: number;
}

export type ProductType = {
   id: number;
   title: string;
   description: string;
   price: number;
   category: string;
   images: Array<string>[]; 
}