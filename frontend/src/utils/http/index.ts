import axios from 'axios'

export const httpVideo = axios.create({
  baseURL: import.meta.env.VITE_MICRO_VIDEO_API_URL as string
})
