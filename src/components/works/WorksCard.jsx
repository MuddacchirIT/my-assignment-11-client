const loadWorks = fetch("/itworks.json").then((res) => res.json());
const WorksCard = () => {
  const worksPromise = loadWorks;
  console.log(worksPromise);
  const { title, description } = worksPromise;
  return (
    <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="bg-white shadow-lg text-center rounded-xl flex flex-col justify-between">
        <div className="space-y-5 p-6">
          <h2>{title}</h2>
          <p className="text-start text-xl line-clamp-2">{description}</p>
          <button className="add-to-cart bg-[#15803D99] w-full h-10 text-xl font-semibold text-[#FFFFFF] px-8 rounded-full text-center mx-auto hover:opacity-70 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
