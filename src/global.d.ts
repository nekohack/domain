/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  VITE_MICROCMS_API_KEY: string
  VITE_MICROCMS_API_ENDPOINT: string
}

interface IDomain {
  id: string
  value: string
  name: string
  description?: string
  url: string
  image?: string
  organization?: string
  tags: string
}
