export function getHost() {
  if (process.env.HOST != undefined && process.env.HOST != "")
    return process.env.HOST;
  if (process.env.VERCEL_URL != undefined)
    return `https://${process.env.VERCEL_URL}`;
  else return "http://localhost:3000";
}
