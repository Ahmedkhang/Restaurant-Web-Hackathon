// export interface Types  {
//     name:string,
//     experience:number,
//     position:string,
//     specialty:string,
//     image?:{
//         asset:{
//               _ref:string,
//               _type:"image";
//         }
//     }
//     description?:string,
//     available:boolean,
    
    
    

// // }
export interface chefTypes {
    name: string,
    position:string,
    experience:string,
    slug:{
      type:'slug',
      current:string 
    }
    description: string,
    specialty:string,
    image: { asset: { _ref: string } };
    available: boolean;
  }
  export interface Products {
    originalPrice:number,
    id:string,
    inventory:number,
    name: string,
    slug:{
      type:'slug',
      current:string 
    }
    description: string;
    category:string,
    image: { asset: { _ref: string } };
    available: boolean,
    price:number
    quantity:number
  }
  export type Post = {
    slug: {
        type: 'slug';
        current: string;
    };
    title: string;
    summary: string;
    image: { asset: { _ref: string } };
    content: any; // Adjust this type based on your content structure
    author: {
        name: string;
        bio: string;
        image: { asset: { _ref: string } };
    };
};