import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import s from './PriceItem.module.scss';

interface PriceItemProps {
  category: string;
  name: string;
  price: number;
  description: string;
}

const PriceItem: React.FC<PriceItemProps> = ({
  category,
  name,
  price,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.priceItem}>
      <div className={s.header} onClick={toggleDescription}>
        <span className={s.category}>{category}</span> {/* Категория услуги */}
        <span className={s.name}>{name}</span>
        <span className={s.price}>{price} грн</span>
        {isOpen ? (
          <FaChevronUp className={s.icon} />
        ) : (
          <FaChevronDown className={s.icon} />
        )}
      </div>
      {isOpen && <div className={s.description}>{description}</div>}
    </div>
  );
};

export default PriceItem;
