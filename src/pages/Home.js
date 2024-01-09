import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Sombras Color Fusion Beauty Glazed", "price": 35000, "image": "/assets/images/1.png"},
    {"id": 2, "name": "Sombras Color Studio Beauty Glazed", "price": 40000, "image": "/assets/images/2.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/3.png"},
    {"id": 4, "name": "Kit Brochas Coral-Trendy x9 unds", "price": 40000, "image": "/assets/images/4.png"},
    {"id": 5, "name": "Rueda Piedras + Lapiz Silocona", "price": 20000, "image": "/assets/images/6.png"},
    {"id": 6, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1.png"},
    
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
