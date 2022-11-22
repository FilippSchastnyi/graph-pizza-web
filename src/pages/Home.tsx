import React from 'react'
import { GoodsCard } from '../components/common/Cards/GoodsCard'
import Image from '../assets/vecteezy_fresh-pizza-and-pizza-box-clipart-design-illustration_9384620_800.png'
import styled from 'styled-components'

export const Home = (): JSX.Element => {
  const pizzas = ['qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe']
  return (
    <>
      <GoodsGrid>
        {
          pizzas.map((item, index) => {
            return (
              <GoodsCell key={index}>
                <GoodsCard
                  text={item}
                  image={Image} />
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
  flex: 0 0 calc(100%/3 - 20px);
  width: calc(100%/3 - 20px);
  margin: 10px;
  height: 200px;
`
