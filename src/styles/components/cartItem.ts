import { styled } from "..";

export const CartItemContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.25rem',
    '& + &': {
      marginTop: '1rem',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem',

      button: {
        background: 'transparent',
        border: 0,
        color: '$green500',
        cursor:' pointer',

        '&:hover':{
          color: '$green300'
        }
      }
    }
})

export const CartImage = styled('div', {
    width: '5.8rem',
    height: '5.8rem',
    borderRadius: '8px',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})