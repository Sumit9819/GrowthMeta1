import { defineField, defineType } from 'sanity'

export const process = defineType({
    name: 'process',
    title: 'Process',
    type: 'document',
    fields: [
        defineField({
            name: 'stepNumber',
            title: 'Step Number',
            type: 'string',
            description: 'e.g. 01, 02',
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
    ],
    orderings: [
        {
            title: 'Step Number',
            name: 'stepNumberAsc',
            by: [
                { field: 'stepNumber', direction: 'asc' }
            ]
        }
    ]
})
