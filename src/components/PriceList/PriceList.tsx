import { useState } from 'react';
import PriceItem from '../PriceItem/PriceItem';
import { services } from '../../servicesData';
import Filter from '../Filter/Filter';
import Sorting from '../Sorting/Sorting';
import s from './PriceList.module.scss';

const categorizedServices = [
  { category: 'Фото', services: services.Photography },
  { category: 'Відео', services: services.Video },
  { category: 'Інше', services: services.Others },
];

const PriceList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredServices = selectedCategory
    ? categorizedServices.filter(
        categoryItem =>
          categoryItem.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : categorizedServices;

  const sortedServices = filteredServices.map(categoryItem => {
    return {
      ...categoryItem,
      services: [...categoryItem.services].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      }),
    };
  });

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };
  const handleSortChange = (order: string) => {
    setSortOrder(order as 'asc' | 'desc');
  };
  return (
    <>
      <div className={s.controlsWrapper}>
        <Filter
          onFilterChange={handleFilterChange}
          selectedCategory={selectedCategory}
        />
        <Sorting onSortChange={handleSortChange} />
      </div>
      <ul className={s.priceList}>
        {sortedServices.map(categoryItem =>
          categoryItem.services.map((service, index) => (
            <li key={index} className={s.priceListItem}>
              <PriceItem
                category={categoryItem.category}
                name={service.name}
                price={service.price}
                description={service.description}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default PriceList;
