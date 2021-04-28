export default function random(length: number = 32): string {
  return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('')
}
