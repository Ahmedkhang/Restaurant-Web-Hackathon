import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import { Post } from './post';
import { author } from './author'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef,Post,author],
};