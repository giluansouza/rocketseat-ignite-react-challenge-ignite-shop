import { stripe } from "../../lib/stripe";
import { ProductContainer, ProductDetails, ProductImage } from "../../styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import {
  Product,
  CartActions,
  CartEntry as ICartEntry
} from 'use-shopping-cart/core'

export default function Product({ product }: { product: Product }) {
  const { isFallback } = useRouter()
  const cart = useShoppingCart()
  const { addItem } = cart

  if (isFallback) {
    return <p>Carregando...</p>
  }

  function handleAddCartItem() {
    addItem(product, { count: 1 })
  }

  return (
    <ProductContainer>
      <ProductImage>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ProductImage>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleAddCartItem}>
          Adicionar ao carrinho
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount as number / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1
  }
}