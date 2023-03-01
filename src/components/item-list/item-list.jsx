
import './item-list.css';

const ItemList = (props) => {

	const { data, onItemSelected, children: renderLabel } = props
	const items = data.map((item) => {
		const { id } = item;
		const label = renderLabel(item)
		return (
			<li
				key={item.id}
				onClick={() => onItemSelected(id)}>
				{label}
			</li>
		)
	})
	return (
		<ul className="item-list">
			{items}
		</ul>
	)
}

export default ItemList