import ProductList from '@/components/shared/product/ProductList';
import sampleData from '@/db/sample-data';

export const metadata = {
  title: 'Home',
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function Homepage() {
  // await delay(2000);

  return (
    <>
      <ProductList
        data={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </>
  );
}

export default Homepage;
