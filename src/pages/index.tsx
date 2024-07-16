import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import camiseta1 from '@/assets/1.png'
import camiseta2 from '@/assets/2.png'
import camiseta3 from '@/assets/3.png'
import { HomeContainer, Product } from '@/styles/pages/home'

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product href="" className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="T Shirt 1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="" className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="T Shirt 2" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="" className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="T Shirt 2" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="" className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="T Shirt 2" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
