import type { SanityDocument } from "sanity";

const previewSecret = "__some__secret__text__";
const remoteUrl = `__PROD__URL__`;
const localUrl = `http://localhost:3000`;

function getSlug(slug: any) {
  if (!slug) return "/";
  if (slug.current) return slug.current;
  return "/";
}

export default function resolveProductionUrl(doc: SanityDocument) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  const slug = doc.slug;
  previewUrl.pathname = `/api/draft`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, getSlug(slug));
  return previewUrl.toString().replaceAll("%2F", "/");
}
