import React from 'react';

const brands = [
  { name: '현대', icon: 'H' },
  { name: '기아', icon: 'KIA' },
  { name: '쉐보레', icon: '⚡' },
  { name: '제네시스', icon: 'G' },
  { name: '벤츠', icon: '★' },
  { name: 'BMW', icon: 'BMW' },
];

export function BrandFilter() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-3">
          {brands.map((brand) => (
            <button
              key={brand.name}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <span className="font-semibold text-sm">{brand.icon}</span>
              <span className="text-sm">{brand.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}