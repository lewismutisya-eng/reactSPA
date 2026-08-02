import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-800 flex justify-center py-10 font-sans text-gray-900">
      <div className="w-full max-w-lg bg-white shadow-xl h-fit">
        <Header />
        <main className="p-4">
          <PortfolioContainer />
        </main>
      </div>
    </div>
  );
}