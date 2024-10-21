export default function Item({name, quantity,category}){
    return (
        <li className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-900">{name}</h3>
            <p className="text-sm text-black">Category: {category}</p>
          </div>
          <p className="text-lg font-bold  text-blue-600">x{quantity}</p>
        </li>
      );
};
