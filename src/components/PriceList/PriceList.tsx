import React from 'react';
import PriceItem from '../PriceItem/PriceItem';
import { services } from '../../servicesData';
import s from './PriceList.module.scss';

const categorizedServices = [
  { category: 'Фото', services: services.Photography },
  { category: 'Відео', services: services.Video },
  { category: 'Інше', services: services.Others },
];

const PriceList: React.FC = () => {
  return (
    <div className={s.priceList}>
      <ul>
        {categorizedServices.map(categoryItem =>
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
