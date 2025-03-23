import { Rule } from '@sanity/types'

import { validation } from 'sanity';
const foodTypes = {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
      {
        name: "id",
        type: "string",
        title: "Product ID",
      },
      {
        name: 'name',
        type: 'string',
        title: 'food',
      },
      
      {
        name:'slug',
        type:'slug',
        title:'slug',
        options:{
          source:'Food Name',
          maxLength:80,
        },
        validation:(Rule:Rule) =>Rule.required()  
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description:
          'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Current Price',
      },
      {
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Price before discount (if any)',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the food item',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
      {
        name:"inventory",
        title:"Inventory",
        type:"number"
      }
    ],

  };
  export default foodTypes