export default function cutNewsContent(content: string, contentLength: number): string {
  return content.slice(0, contentLength);
}
