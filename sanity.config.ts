import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Personal Website Admin',

  // Pulls the same environment variables your client is using
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio', // This matches the Next.js route we are about to create

  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
})