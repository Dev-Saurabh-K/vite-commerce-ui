import heroImage from '@/assets/hero-collection.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spring collection featuring elegant fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-narrow relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 opacity-0 animate-fade-up">
            Spring / Summer 2025
          </p>
          <h1 className="heading-display mb-6 opacity-0 animate-fade-up delay-100">
            Redefine Your Everyday Elegance
          </h1>
          <p className="text-body text-lg mb-8 max-w-md opacity-0 animate-fade-up delay-200">
            Discover our new collection crafted with timeless sophistication and modern sensibility. 
            Where comfort meets refined style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
            <a href="#collections" className="btn-primary">
              Explore Collection
            </a>
            <a href="#new" className="btn-outline">
              New Arrivals
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-400">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
