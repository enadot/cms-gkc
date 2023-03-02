import createImageUrlBuilder from '@sanity/image-url';
import { createClient, createCurrentUserHook } from 'next-sanity';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'dllw832r',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentuser = createCurrentUserHook(config);
