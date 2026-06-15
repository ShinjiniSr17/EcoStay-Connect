import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="grid md:grid-cols-2 gap-6 p-10">

        <Card
          title="Mountain Cabin"
          description="Enjoy peaceful eco-friendly stays in nature."
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        />

        <Card
          title="Beach Cottage"
          description="Experience sustainable living near the sea."
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
        />

      </section>

      <Footer />
    </>
  );
}