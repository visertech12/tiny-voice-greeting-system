
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface CryptoCurrency {
  id: string;
  name: string;
  ticker: string;
  logo: string;
  network: string[];
  minDeposit: string;
  processingTime: string;
  category: "popular" | "stablecoin" | "altcoin";
}

const cryptocurrencies: CryptoCurrency[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    ticker: "BTC",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["BTC"],
    minDeposit: "0.001 BTC",
    processingTime: "1 hour",
    category: "popular"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    ticker: "ETH",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["ERC20"],
    minDeposit: "0.01 ETH",
    processingTime: "10 minutes",
    category: "popular"
  },
  {
    id: "usdt",
    name: "Tether",
    ticker: "USDT",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["ERC20", "TRC20", "BEP20"],
    minDeposit: "50 USDT",
    processingTime: "5 minutes",
    category: "stablecoin"
  },
  {
    id: "usdc",
    name: "USD Coin",
    ticker: "USDC",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["ERC20", "BEP20"],
    minDeposit: "50 USDC",
    processingTime: "5 minutes",
    category: "stablecoin"
  },
  {
    id: "bnb",
    name: "Binance Coin",
    ticker: "BNB",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["BEP20"],
    minDeposit: "0.1 BNB",
    processingTime: "5 minutes",
    category: "popular"
  },
  {
    id: "solana",
    name: "Solana",
    ticker: "SOL",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["SOL"],
    minDeposit: "1 SOL",
    processingTime: "5 minutes",
    category: "altcoin"
  },
  {
    id: "cardano",
    name: "Cardano",
    ticker: "ADA",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["ADA"],
    minDeposit: "50 ADA",
    processingTime: "10 minutes",
    category: "altcoin"
  },
  {
    id: "avalanche",
    name: "Avalanche",
    ticker: "AVAX",
    logo: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=100&h=100",
    network: ["AVAX"],
    minDeposit: "1 AVAX",
    processingTime: "5 minutes",
    category: "altcoin"
  }
];

function CryptoCard({ crypto }: { crypto: CryptoCurrency }) {
  return (
    <div className="bg-background rounded-xl border border-border p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-bold overflow-hidden">
          {crypto.ticker}
        </div>
        <div>
          <h3 className="font-medium">{crypto.name}</h3>
          <div className="text-xs text-muted-foreground">{crypto.ticker}</div>
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Networks:</span>
          <div className="flex flex-wrap gap-1 justify-end">
            {crypto.network.map((net) => (
              <Badge key={net} variant="outline" className="text-xs">
                {net}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Min Deposit:</span>
          <span>{crypto.minDeposit}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Processing Time:</span>
          <span>{crypto.processingTime}</span>
        </div>
      </div>
    </div>
  );
}

export function CryptocurrenciesSection() {
  return (
    <section id="cryptocurrencies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Cryptocurrencies</h2>
          <p className="text-muted-foreground">
            We support a wide range of cryptocurrencies across various networks to provide you with maximum flexibility for deposits and withdrawals.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 w-full mb-8 bg-muted/50 dark:bg-muted/20 border border-border">
              <TabsTrigger value="all" className="font-medium">All</TabsTrigger>
              <TabsTrigger value="popular" className="font-medium">Popular</TabsTrigger>
              <TabsTrigger value="stablecoin" className="font-medium">Stablecoins</TabsTrigger>
              <TabsTrigger value="altcoin" className="font-medium">Altcoins</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cryptocurrencies.map((crypto) => (
                  <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cryptocurrencies
                  .filter((crypto) => crypto.category === "popular")
                  .map((crypto) => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stablecoin" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cryptocurrencies
                  .filter((crypto) => crypto.category === "stablecoin")
                  .map((crypto) => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="altcoin" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cryptocurrencies
                  .filter((crypto) => crypto.category === "altcoin")
                  .map((crypto) => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 p-4 rounded-lg bg-muted/30 text-center">
            <p className="text-sm text-muted-foreground">
              Additional cryptocurrencies may be supported. Please contact our support team for specific cryptocurrency inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
