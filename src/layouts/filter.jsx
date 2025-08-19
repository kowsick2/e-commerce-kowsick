import React, { useState } from 'react';

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
   
  });
   
 return (
    <div className="w-60 p-4 border-r border-gray-1000 relative top-50">
      <hr className="w-[698%] mb-8 relative left-56 bottom-4" /> 

      <h2 className="text-2xl font-bold mt-10">Filters</h2>
      <hr className="w-[240px] mb-5 relative right-4" /> 
      
      <div className="mb-9">
        <h3 className="text-lg font-semibold mb-2">Men</h3>
        {['T-Shirts & Polos', 'Shirts', 'Jeans', 'Trousers & Chinos', 'Shorts'].map((item) => (
          <label key={item} className="block mb-2 text-sm">
            <input
              type="checkbox"
              className="mr-3"
             
            />
            {item}
          </label>
        ))}
      </div>
      <hr className="w-[240px] mb-8 relative right-4" /> 
      
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-5">Size</h3>
        <div className="grid grid-cols-3 gap-2 text-sm">
          {['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'].map((size) => (
            <label key={size} className="inline-flex items-center">
              <input
                type="checkbox"
                className="mr-1"
               
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      <hr className="w-[240px] mb-8 relative right-4" /> 
       <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        {['Abhishti', 'Aditi Wasan', 'Aero Armour', 'adidas', 'Aatmana', 'Wales Bonner', 'Leather', 'Aangan', 'Arvind'].map((brand) => (
          <label key={brand} className="block mb-1 text-sm">
            <input
              type="checkbox"
              className="mr-2"
              
            />
            {brand}
          </label>
        ))}
      </div>

     <hr className="w-[240px] mb-8 relative right-4" /> 
     


     
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Discount</h3>
        {['70% and above', '60% and above', '50% and above', '40% and above'].map((discount) => (
          <label key={discount} className="block mb-1 text-sm">
            <input
              type="checkbox"
              className="mr-2"
             
            />
            {discount}
          </label>
        ))}
      </div>

      <hr className="w-[240px] mb-8 relative right-4" /> 

      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        {['Red', 'Gray', 'Brown', 'Green', 'Purple', 'Yellow', 'Blue', 'Olive', 'Black'].map((color) => (
          <label key={color} className="flex items-center gap-3 mb-2 text-sm cursor-pointer">
            <input
              type="checkbox"
             
              className="w-4 h-4"
            />
            <span
              className="w-4 h-4 rounded-full border border-gray-400"
              style={{ backgroundColor: color.toLowerCase() }}
            ></span>
            <span className="capitalize">{color}</span>
          </label>
        ))}
      </div>

      <hr className="w-[240px] mb-8 relative right-4" />
      

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Material</h3>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          {['Cotton', 'Polyester', 'Silk', 'Metal', 'Nylon', 'Acetate', 'Leather', 'Polycotton', 'Denim'].map((material) => (
            <label key={material} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                />
              {material}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
