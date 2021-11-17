import { Container, Description, Figure, Image, Name, Price } from "./style";

interface IFood {
  name: string;
  price: number;
  img: string;
  description: string;
}

const CardFood = (Info: IFood) => {
  const { name, price, img, description } = Info;
  return (
    <Container>
      <Image src={img} alt={name} />
      <Figure />
      <Name>{name}</Name>
      <Price>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Price>
      <Description>{description}</Description>
    </Container>
  );
};

export default CardFood;
