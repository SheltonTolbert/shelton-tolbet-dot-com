import { ImageLoaderProps } from 'next/image'


export default function cloudinaryLoader({ src }: ImageLoaderProps) {
  return `https://sheltontolbert.com/${src}`;
}
