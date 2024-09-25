import { FC, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import s from './Filter.module.scss';

type FilterProps = {
  onFilterChange: (category: string) => void;
  selectedCategory: string;
};

const Filter: FC<FilterProps> = ({ onFilterChange, selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (category: string) => {
    onFilterChange(category);
    setIsOpen(false);
  };

  return (
    <div className={s.filterDropdown}>
      <button className={s.filterButton} onClick={toggleDropdown}>
        Фільтр <FaFilter />
      </button>
      {isOpen && (
        <ul className={s.dropdownList}>
          <li
            className={selectedCategory === '' ? s.active : ''}
            onClick={() => handleOptionClick('')}
          >
            УСІ ПОСЛУГИ
          </li>
          <li
            onClick={() => handleOptionClick('ВІДЕО')}
            className={selectedCategory === 'ВІДЕО' ? s.active : ''}
          >
            ВІДЕО
          </li>
          <li
            onClick={() => handleOptionClick('ФОТО')}
            className={selectedCategory === 'ФОТО' ? s.active : ''}
          >
            ФОТО
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
