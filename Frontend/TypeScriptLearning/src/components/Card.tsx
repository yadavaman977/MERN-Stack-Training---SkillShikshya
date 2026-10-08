type CardProps = {
  name: string;
  image: string;
  profession: string;
  isAvailable: boolean;
  
};

const Card = ({ name, image, profession, isAvailable }: CardProps) => {
  return (
    <div className="w-64 rounded-lg shadow-lg p-4 bg-white text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />

      <h2 className="text-xl font-bold mt-3">{name}</h2>

      <p className="text-gray-500">{profession}</p>

      <p className={isAvailable ? "text-green-500" : "text-red-500"}>
        {isAvailable ? "Available" : "Not Available"}
      </p>
    </div>
  );
};

export default Card;