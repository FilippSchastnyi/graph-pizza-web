import React from 'react'
import { GoodsCard } from '../components/common/Cards/GoodsCard'
import Image from '../assets/vecteezy_fresh-pizza-and-pizza-box-clipart-design-illustration_9384620_800.png'
import styled from 'styled-components'

export const Home = (): JSX.Element => {

  const pizzas = [
    {
      name: 'Пепперони и колбаски',
      info: [
        {
          size: 'Большая',
          price: 29.90,
          calories: 2481,
          carbohydrates: 228,
          fats: 130,
          protein: 86,
          weight: '0.6-0.7',
        },
        {
          size: 'Стандартная',
          price: 23.90,
          calories: 2126,
          carbohydrates: 198,
          fats: 128,
          protein: 74,
          weight: '0.7-0.8',
        },
        {
          size: 'Маленькая',
          price: 19.90,
          calories: 1953,
          carbohydrates: 174,
          fats: 108,
          protein: 63,
          weight: '0.6-0.7',
        }
      ],
      image: Image,
      description: 'соус чеддер, варено-копченый карбонад (свинина), грудинка (свинина), варено-копченая салями, соленые огурцы, свежий лук, сыр моцарелла, базилик'
    }
  ]
  return (
    <>
      <GoodsGrid>
        {
          pizzas.map((item, index) => {
            return (
              <GoodsCell key={index}>
                <GoodsCard
                  name={item.name}
                  info={item.info}
                  image={item.image}
                  description={item.description}
                />
              </GoodsCell>
            )
          })
        }
      </GoodsGrid>
    </>
  )
}

const GoodsGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const GoodsCell = styled.li`
  position: relative;
  flex: 0 0 calc(100% / 3 - 20px);
  width: calc(100% / 3 - 20px);
  margin: 10px;
  height: auto;
`
