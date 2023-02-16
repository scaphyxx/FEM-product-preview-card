import ItemCard from "./ItemCard";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center rounded-md bg-cream">
      <ItemCard
        category="Perfume"
        name="Gabrielle Essence Eau De Parfume"
        price={149.99}
        uvp={169.99}
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        imageDesktop="/image-product-desktop.jpg"
        imageMobile="/image-product-mobile.jpg"

      />
    </div>
  );
};

export default HomePage;
