import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Stay Connected
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Join Our World
          </h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive access to new arrivals, special offers, and style inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3.5 bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-background/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
