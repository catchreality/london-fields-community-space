import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'campaignPage',
  title: 'Campaign landing page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Top of page', default: true},
    {name: 'story', title: 'Our story'},
    {name: 'actions', title: 'Actions and contact'},
    {name: 'closing', title: 'Closing message'},
  ],
  fields: [
    defineField({name: 'internalTitle', title: 'Internal title', type: 'string', initialValue: 'Main campaign page', validation: (rule) => rule.required()}),
    defineField({name: 'heroTitle', title: 'Main headline', description: 'Text before the coloured final phrase.', type: 'string', group: 'hero', validation: (rule) => rule.required()}),
    defineField({name: 'heroHighlight', title: 'Highlighted headline', type: 'string', group: 'hero', validation: (rule) => rule.required()}),
    defineField({name: 'heroIntroduction', title: 'Introduction', type: 'text', rows: 3, group: 'hero', validation: (rule) => rule.required()}),
    defineField({name: 'heroImage', title: 'Main building photograph', type: 'image', options: {hotspot: true}, group: 'hero'}),
    defineField({name: 'storyHeading', title: 'Story heading', type: 'string', group: 'story'}),
    defineField({name: 'storyParagraphOne', title: 'First paragraph', type: 'text', rows: 4, group: 'story'}),
    defineField({name: 'storyParagraphTwo', title: 'Second paragraph', type: 'text', rows: 5, group: 'story'}),
    defineField({name: 'campaignQuote', title: 'Campaign quote', type: 'text', rows: 3, group: 'story'}),
    defineField({name: 'historyImage', title: 'History photograph', type: 'image', options: {hotspot: true}, group: 'story'}),
    defineField({name: 'emailTemplateUrl', title: 'Email template link', type: 'url', group: 'actions', validation: (rule) => rule.required()}),
    defineField({name: 'campaignEmail', title: 'Campaign contact email', type: 'email', group: 'actions', validation: (rule) => rule.required()}),
    defineField({name: 'emailActionText', title: 'Email action description', type: 'text', rows: 3, group: 'actions'}),
    defineField({name: 'shareActionText', title: 'Share action description', type: 'text', rows: 3, group: 'actions'}),
    defineField({name: 'joinActionText', title: 'Join action description', type: 'text', rows: 3, group: 'actions'}),
    defineField({name: 'closingHeading', title: 'Closing heading', type: 'string', group: 'closing'}),
    defineField({name: 'closingHighlight', title: 'Highlighted closing line', type: 'string', group: 'closing'}),
    defineField({name: 'closingText', title: 'Closing paragraph', type: 'text', rows: 3, group: 'closing'}),
  ],
  preview: {select: {title: 'internalTitle'}},
})
