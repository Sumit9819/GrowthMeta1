import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'metric',
            title: 'Metric',
            type: 'string',
            description: 'e.g. +97%, 3x, -24%',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        }),
    ],
})
