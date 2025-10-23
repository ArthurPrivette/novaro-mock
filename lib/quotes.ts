export async function getQuote(ticker: string) {
  const token = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
  const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${token}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch quote for ${ticker}`);
  }
  return res.json();
}
