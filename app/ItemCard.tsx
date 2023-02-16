import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

type Product = {
  category: string;
  name: string;
  description: string;
  price: number;
  uvp: number;
  imageDesktop: string;
  imageMobile: string;
};

const ItemCard = ({
  category,
  name,
  description,
  price,
  imageDesktop,
  imageMobile,
  uvp,
}: Product) => {

  return (
    <div className="bg-cream md:max-w-2xl max-w-sm mx-auto p-5">
      <div className="grid md:grid-cols-2 bg-white rounded-lg">
        <div className="relative flex h-60 md:h-auto">
          <Image
            className="object-cover rounded-l-lg hidden md:block"
            src={imageDesktop}
            alt={name}
            fill
          />
          <Image
            className="object-cover md:hidden rounded-t-lg"
            src={imageMobile}
            alt={name}
            fill
          />
        </div>
        <div className="p-10 space-y-5">
          <h2 className="uppercase text-darkGray/80 text-xs tracking-[5px]">
            {category}
          </h2>
          <h1 className="font-fraunces text-4xl text-darkBlue">{name}</h1>
          <p className="font-montserrat text-sm text-darkGray/80">
            {description}
          </p>
          <div className="relative">
            <p className="font-fraunces text-2xl text-darkCyan">${price}</p>
            <p className="absolute font-montserrat text-xs text-darkGray top-2 left-28 line-through">
              ${uvp}
            </p>
          </div>
          <button className="bg-darkCyan text-white items-center justify-center flex px-10 py-2 rounded-lg w-full hover:bg-[#1a4031]">
            <ShoppingCartIcon className="h-4 mr-2"/>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
