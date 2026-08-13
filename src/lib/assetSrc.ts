export function assetSrc(image: string | { src: string }): string {
  return typeof image === "string" ? image : image.src;
}
