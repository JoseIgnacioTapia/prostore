import { getLatestProducts } from '@/lib/actions/product.actions';
import ProductList from '@/components/shared/product/ProductList';

export const metadata = {
  title: 'Home',
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function Homepage() {
  // await delay(2000);
  const latestProducts = await getLatestProducts();
  console.log(latestProducts);

  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' />
    </>
  );
}

export default Homepage;
