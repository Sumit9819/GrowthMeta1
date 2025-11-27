import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'e.g. CEO, BRAND NAME',
        }),
    ],
})
