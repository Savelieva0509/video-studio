import { useState } from 'react';
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import s from './Sorting.module.scss';

interface SortingProps {
  onSortChange: (order: string) => void;
}

const Sorting: React.FC<SortingProps> = ({ onSortChange }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortToggle = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSortChange(newOrder);
  };

  return (
    <button className={s.sortButton} onClick={handleSortToggle}>
      {sortOrder === 'asc' ? (
        <>
          {' '}
          Спочатку дешевше
          <FaSortAmountDownAlt className={s.sortIcon} />
        </>
      ) : (
        <>
          Спочатку дорожче
          <FaSortAmountUpAlt className={s.sortIcon} />
        </>
      )}
    </button>
  );
};

export default Sorting;
