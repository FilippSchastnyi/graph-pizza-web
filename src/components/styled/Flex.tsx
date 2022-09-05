import styled from "styled-components";

interface IFlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
}

const Flex = (props: any) => {
  return <StyledFlex {...props} />
}

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props: any) => props.direction || 'row'};
  align-items: ${(props: any) => props.align || 'stretch' };
  justify-content: ${(props: any) => props.justify || 'stretch' };
  margin: ${({margin}: any) => margin || '0' };
`

export default Flex
