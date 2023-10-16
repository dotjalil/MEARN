import { Link } from "react-router-dom";

const Proudct = (props) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div
        className="flex items-end justify-end h-56 w-full bg-cover"
        style={{
          backgroundImage: `url('${props.product.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Link
          to={`product/${props.product.id}`}
          className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{props.product.name}</h3>
        <span className="text-gray-500 mt-2">{props.product.price}</span>
      </div>
    </div>
  );
};

export default Proudct;
