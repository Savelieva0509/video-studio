import {FC, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import s from './PriceItem.module.scss';

interface PriceItemProps {
  category: string;
  name: string;
  price: number;
  description: string;
}

const PriceItem: FC<PriceItemProps> = ({
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
    <div className={s.priceItemWrapper} onClick={toggleDescription}>
      <ul className={s.infoList} >
        <li className={`${s.category} ${s.infoItem}`}>{category}</li>
        <li className={`${s.name} ${s.infoItem}`}>{name}</li>
        <li className={`${s.price} ${s.infoItem}`}>{price} грн</li>
        {isOpen ? (
          <FaChevronUp className={s.icon} />
        ) : (
          <FaChevronDown className={s.icon} />
        )}
      </ul>
      {isOpen && <p className={s.description}>{description}</p>}
    </div>
  );
};

export default PriceItem;
