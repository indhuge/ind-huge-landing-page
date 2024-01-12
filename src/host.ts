export function getHost() {
  if (process.env.VERCEL_URL != undefined)
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.HOST != undefined) return process.env.HOST;
  else return "http://localhost:3000";
}
