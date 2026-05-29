'use client'

//import { NextStudio } from 'next-sanity/studio'
import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// Dynamically import NextStudio and force it to only load in the browser
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}