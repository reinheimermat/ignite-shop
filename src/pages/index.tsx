import Image from 'next/image'

import camiseta1 from '@/assets/1.png'
import { HomeContainer, Product } from '@/styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product href="">
        <Image src={camiseta1} width={520} height={480} alt="T Shirt 1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="">
        <Image src={camiseta1} width={520} height={480} alt="T Shirt 2" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
