import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
	createStyles({
		select: {

		},
		//option style
		option: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			'& >img': {
				marginRight: 5
			},
			'& >p': {
				margin: 5
			}
		},
		questionContainer: {
			border: '1px solid #BDBDBD',
			width: '100%',
			padding: 10
		}
	})
);

export const customSelectStyle = {
	menu: (provided, state) => ({
		...provided,
		margin: 0,
		borderRadius: '0px 0px 5px 5px'
	}),
	menuList: (provided, state) => ({
		...provided,
		color: '#333333',
		fontSize: 16,
		fontWeight: 700,
		padding: 0,
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: '#BDBDBD',
		fontSize: 16,
	}),
	control: (provided, state) => ({
		...provided,
		minWidth: 220,
		borderRadius: "5px 5px 0 0",
		border: '2px solid #BDBDBD',
		'&:hover': {
			border: '2px solid #BDBDBD',
		},
		boxShadow: 'none'
	}),
	valueContainer: (provided, state) => ({
		...provided,
		color: '#333333',
		fontSize: 16,
		fontWeight: 700
	}),
	input: (provided, state) => ({
		...provided,
		color: '#333333',
		fontSize: 16,
		fontWeight: 700
	}),
	option: (provided, state) => ({
		...provided,
		color: '#333333',

	})
}