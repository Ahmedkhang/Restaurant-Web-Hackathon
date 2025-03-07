import {defineType, defineField, defineArrayMember} from 'sanity';
export const Post = defineType({
    name:"post",
    type:"document",
    title:"Post",
    fields:[
       defineField({
        name:"title",
        type:"string",
        title:"Post title",
    }),
   defineField ({
       name:"slug",
       type:"slug",
       title:"Slug",
       options:{
        source:"title",
        maxLength:100,
       },
       validation : Rule =>Rule.required()
    }),
    defineField({
        name:"summary",
        type:"text",
        title:"Summary",
        description:"upto 100 characters",
        validation : Rule => Rule.required().max(500)
    }),
    defineField({
       name:"image",
       type:"image",
       title:"Image"
    }),
    defineField({
        name:"content",
        type:"array",
        title:"Content",
        of:[
            defineArrayMember({
                type:"block",
            })
        ]
    }),
    defineField({
        name:"author",
        type:'reference',
        title:'Author',
        to:[{
            type:'author',
        }]
    })

]
})