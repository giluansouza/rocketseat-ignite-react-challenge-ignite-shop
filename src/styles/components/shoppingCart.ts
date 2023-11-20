import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '$gray800',
    padding: '3rem',
    zIndex: 999,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const ButtonClose = styled('button', {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '$gray100',
})

export const CartItemsList = styled('div', {
    flex: 1,

    strong: {
        display: 'block',
        marginBottom: '1rem',
    }
})