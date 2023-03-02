
export const Row = ({ left, right }) => {
	return (
		<div className='row mb2'>
			<div className='col-md-3'>{left}</div>
			<div className='col-md-9'>{right}</div>
		</div>
	)
}