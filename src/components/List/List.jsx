import './List.scss';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';

export default function List() {
  const { list } = useSelector(state => state);

  return (
    <table className="app__table table">
      <thead className="table__thead">
        <tr>
          <th className="thead__item">Наименование услуги</th>
          <th className="thead__item">Стоимость</th>
          <th className="thead__item">Действия</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {list && list.map((el) => <ListItem key={el.id} element={el} />)}
      </tbody>
    </table>
  )
}