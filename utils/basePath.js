// Base path for GitHub Pages (e.g. /vicky-portfolio). Empty for local or user site.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return basePath ? `${basePath}${p}` : p;
}
