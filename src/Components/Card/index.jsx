const Card = ({ title, description }) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">

        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute ">Electronics</span>
            <img src="" alt=""/>
            <div className="absolute top-0 right-0 flex justify-center bg-whitte w-6 h-6 rouder-full">+</div>
        </figure>
        <p>
            <span>Headphones</span>
            <span>$300</span>
            

        </p>
    </div>
  );
};

export default Card;