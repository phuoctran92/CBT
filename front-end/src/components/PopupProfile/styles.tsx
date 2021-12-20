import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => 
    createStyles({
        container:{
            width: '100%',
            height: 539,
            borderRadius: 15,
            border: '1px solid #BDBDBD',
            background: '#FFFFFF',
            boxSizing: 'border-box',
        },
        content: {
            '& > p': {
                marginBottom: 20,
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: 1,
                color: '#000000',
                opacity: 0.5,
            },
        },
        topContent: {
            'text-align': '-webkit-center',
            marginBottom: 20,
            '& > div:last-child': {
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500 !important',
                fontSize: 16,
                '& > p:first-child': {
                    marginBottom: 0,
                    fontSize: 16
                },
                '& > p:nth-child(2)': {
                    marginTop:0,
                    marginBottom: 0,
                    fontSize: 14,
                    color: '#304D95'
                },
                '& > p:last-child': {
                    fontSize: 14     
                },
            },
        },
        nearTopContent: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
            '& > p:first-child': {
                color: '#333333 !important',
                fontWeight: '500 !important',
            },
            '& > p:last-child': {
                color: '#009444',
                fontWeight: '500 !important',
            },
        },
        middleContent: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
            '& > p:first-child': {
                color: '#333333 !important',
                fontWeight: '500 !important',
            },
            '& > p:last-child': {
                color: '#000000',
                fontWeight: '500 !important',
            },
        },
    })    
);