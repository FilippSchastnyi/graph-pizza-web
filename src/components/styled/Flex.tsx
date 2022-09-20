import styled from "styled-components";

interface IFlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
}

const Flex = (props: IFlexProps): JSX.Element => {
  return <StyledFlex {...props} />;
};

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props: IFlexProps) => props.direction ?? "row"};
  align-items: ${(props: IFlexProps) => props.align ?? "stretch"};
  justify-content: ${(props: IFlexProps) => props.justify ?? "stretch"};
  margin: ${({ margin }: any) => margin ?? "0"};
`;

export default Flex;
