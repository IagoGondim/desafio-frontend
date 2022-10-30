import { Link } from 'react-router-dom';
import { Container, Content, Title } from './style';


export function Header(){

  return (
    <Container>
      <Content>
        <Title>Cadastrar destinos de interesse</Title>
        <nav>
          <Link to="/create">Cadastrar novos destinos</Link>
          <Link to="/">Home</Link>
        </nav>
      </Content>
    </Container>  
  )
}