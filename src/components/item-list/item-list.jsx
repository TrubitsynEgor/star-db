
import { Link, useParams } from 'react-router-dom';
import './item-list.css';

const ItemList = (props) => {

	const { data, onItemSelected, children: renderLabel } = props
	const items = data.map((item) => {
		const { id } = item;
		const label = renderLabel(item)
		return (
			<Link
				to={`/starhips/${id}`}
				key={item.id}
				onClick={() => onItemSelected(id)}>
				{label}
			</Link>
		)
	})
	return (
		<ul className="item-list">
			{items}
		</ul>
	)
}

ItemList.defaultProps = {
	onItemSelected: () => { },
}

export default ItemList