import { defineField, defineType } from 'sanity'

export const stats = defineType({
    name: 'stats',
    title: 'Stats',
    type: 'document',
    fields: [
        defineField({
            name: 'number',
            title: 'Number',
            type: 'string',
            description: 'e.g. $264k+, 633+',
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'e.g. Ad Spend Managed, Creative Launches',
        }),
    ],
})
