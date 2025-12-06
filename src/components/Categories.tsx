import categoryWomen from '@/assets/category-women.jpg';
import categoryMen from '@/assets/category-men.jpg';
import categoryAccessories from '@/assets/category-accessories.jpg';

const categories = [
  {
    id: 1,
    name: 'Women',
    description: 'Elegant essentials for her',
    image: categoryWomen,
    href: '#women',
  },
  {
    id: 2,
    name: 'Men',
    description: 'Refined pieces for him',
    image: categoryMen,
    href: '#men',
  },
  {
    id: 3,
    name: 'Accessories',
    description: 'Complete your look',
    image: categoryAccessories,
    href: '#accessories',
  },
];

const Categories = () => {
  return (
    <section id="collections" className="py-20 md:py-32 bg-secondary/50">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Browse by
          </p>
          <h2 className="heading-section">Collections</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-card">
                <h3 className="font-heading text-3xl md:text-4xl font-medium mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-card/80 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Shop Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
