import Link from 'next/link'

import { SuccessContainer } from '@/styles/pages/success'

import { ImageContainer } from './product'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuu! Diego Fernandes, sua camiseta Beyond the limits já está a caminho
        da sua casa!
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
