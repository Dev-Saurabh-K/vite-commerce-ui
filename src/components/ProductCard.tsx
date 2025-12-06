interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ image, name, price, category, isNew }: ProductCardProps) => {
  return (
    <article className="card-product group">
      <div className="card-product-image relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase">
            New
          </span>
        )}
        <button className="absolute bottom-4 left-4 right-4 btn-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Add to Cart
        </button>
      </div>
      <div className="pt-4 pb-2">
        <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
          {category}
        </p>
        <h3 className="font-heading text-lg font-medium mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="font-medium">
          ${price.toFixed(2)}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
