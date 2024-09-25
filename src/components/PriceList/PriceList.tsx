import { useState } from 'react';
import PriceItem from '../PriceItem/PriceItem';
import { services } from '../../servicesData';
import Filter from '../Filter/Filter';
import s from './PriceList.module.scss';

const categorizedServices = [
  { category: 'Фото', services: services.Photography },
  { category: 'Відео', services: services.Video },
  { category: 'Інше', services: services.Others },
];

const PriceList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredServices = selectedCategory
    ? categorizedServices.filter(
        categoryItem =>
          categoryItem.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : categorizedServices;

  console.log(filteredServices, 'filteredServices');
  console.log(selectedCategory, 'selectedCategory');

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={s.priceListWrapper}>
      <Filter
        onFilterChange={handleFilterChange}
        selectedCategory={selectedCategory}
      />
      <ul className={s.priceList}>
        {filteredServices.map(categoryItem =>
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
    </div>
  );
};

export default PriceList;
