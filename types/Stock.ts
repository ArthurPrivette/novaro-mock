export interface Stock {
  id: number;
  ticker: string;
  name: string;
  price: number;
  dailyChange: number; // percentage
  bio: string;
  tags: string[];
}
