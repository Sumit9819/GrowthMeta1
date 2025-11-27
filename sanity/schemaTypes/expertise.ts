import { defineField, defineType } from 'sanity'

export const expertise = defineType({
    name: 'expertise',
    title: 'Expertise',
    type: 'document',
    fields: [
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
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g. Search, BarChart, Zap)',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        }),
    ],
})
