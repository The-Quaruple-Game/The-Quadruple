type CardProps = {
    title: string;
    description: string;
    image: string;
  };

  const Card = ({ title, description, image }: CardProps) => {
    return (
      <div className="card bg-white text-black w-96 shadow-sm">
        <figure>
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-md"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Now</button>
          </div>
        </div>
      </div>
    );
  };

  export default Card;
