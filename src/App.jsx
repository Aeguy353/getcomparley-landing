import { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedStores, setSelectedStores] = useState({
    amazon: true,
    walmart: true,
    target: true,
    lowes: true,
    homeDepot: true,
  });

  const handleSearch = () => {
    console.log('Searching for:', query, 'in stores:', selectedStores);
  };

  const toggleStore = (store) => {
    setSelectedStores((prev) => ({ ...prev, [store]: !prev[store] }));
  };

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">GetComparley</h1>
      <p className="text-center text-sm text-gray-500">
        We eliminate buyer's remorse by comparing the best prices across trusted retailers.
      </p>

      <Card>
        <CardContent className="space-y-4 p-4">
          <Input
            placeholder="Search for a product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex flex-wrap gap-3">
            {Object.keys(selectedStores).map((store) => (
              <Button
                key={store}
                variant={selectedStores[store] ? 'default' : 'outline'}
                onClick={() => toggleStore(store)}
              >
                {store.charAt(0).toUpperCase() + store.slice(1)}
              </Button>
            ))}
          </div>
          <Button onClick={handleSearch}>Compare Prices</Button>
        </CardContent>
      </Card>

      <div className="text-xs text-gray-500 text-center pt-4 border-t">
        <p>
          <strong>Affiliate Disclosure:</strong> GetComparley.com participates in multiple affiliate programs.
          We may earn commissions when you click links and make purchases through our site — at no additional cost to you.
        </p>
      </div>
    </main>
  );
}
