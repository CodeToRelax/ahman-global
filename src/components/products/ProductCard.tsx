import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard = ({ image, name, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-sm text-white/90">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-2">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
