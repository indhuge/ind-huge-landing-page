export function getHost() {
  if (process.env.VERCEL_URL != undefined)
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.HOST != undefined && process.env.HOST != "")
    return process.env.HOST;
  else return "http://localhost:3000";
}
