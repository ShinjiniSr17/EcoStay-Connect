export default function Card({
  title,
  description,
  image,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

  <img
    src={image}
    alt={title}
    className="w-full h-64 object-cover"
  />

  <div className="p-6">

    <h2 className="text-2xl font-bold mb-3">
      {title}
    </h2>

    <p className="text-gray-600 mb-4">
      {description}
    </p>

    <button className="bg-emerald-600 text-white px-5 py-2 rounded-full">
      View Stay
    </button>

  </div>

</div>
  );
}