import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'cane-corso',

  projectId: 'vu7apy21',
  dataset: 'dogs',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
