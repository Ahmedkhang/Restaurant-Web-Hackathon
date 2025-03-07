import { groq } from "next-sanity";

export const allChefs =groq `*[_type == "chef"]{
  description,name,specialty,image
}`;
export const four = `*[_type == "chef"][0..2]`


export const allFoods =groq `*[_type == "food"]{
  description,name,image,price
}`;
export const threeFoods = `*[_type == "food"][0..5]`