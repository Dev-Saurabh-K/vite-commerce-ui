import ProductCard from './ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const products = [
  {
    id: 1,
    image: product1,
    name: 'Silk Blend Blazer',
    price: 389,
    category: 'Outerwear',
    isNew: true,
  },
  {
    id: 2,
    image: product2,
    name: 'Merino Wool Sweater',
    price: 245,
    category: 'Knitwear',
    isNew: true,
  },
  {
    id: 3,
    image: product3,
    name: 'Tailored Linen Trousers',
    price: 195,
    category: 'Bottoms',
    isNew: false,
  },
  {
    id: 4,
    image: product4,
    name: 'Cashmere Scarf',
    price: 165,
    category: 'Accessories',
    isNew: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="new" className="py-20 md:py-32 bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
              Curated Selection
            </p>
            <h2 className="heading-section">New Arrivals</h2>
          </div>
          <a href="#" className="text-sm font-medium link-underline self-start md:self-auto">
            View All Products
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
