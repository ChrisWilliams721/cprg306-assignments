export default function Item({name, quantity,category}){
    return (
        <li className="flex justify-between items-center p-4 border-b border-gray-300 bg-stone-700 m-8 rounded">
          <div>
            <h3 className="text-lg font-semibold text-white-600 hover:text-gray-600">{name}</h3>
            <p className="text-sm text-white-600">Category: {category}</p>
            <p className="text-lg   text-white-600">Buy {quantity} in {category}</p>
          </div>
          
        </li>
      );
};
