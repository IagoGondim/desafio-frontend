import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header'
import { Container } from './styles'

interface IFormInput {
  fullName: String;
  email: String;
  cpf: String;
  telephone: String;
  country: String;
  city: String;
}

export function ViewDestinations() {
  const [destiny, setDestiny] = useState<IFormInput[]>(() => {
    const storageDestiny = localStorage.getItem(
      '@estagio:destiny'
    );
  
    //maneira de trablahar com arquivos ja salvos no localStorage

    if (storageDestiny) {
      return JSON.parse(storageDestiny);
    } else {
        return [];
      }
    });


    useEffect(() => {
      localStorage.setItem(
        '@estagio:destiny',
        JSON.stringify(destiny)
      );
    }, []);

  return(
    <>
      <Header/>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>Pais</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
          {destiny.map((value) => (
            <tr key={Math.random()}>
              <td>{value.fullName}</td>
              <td>{value.email}</td>
              <td>{value.telephone}</td>
              <td>{value.cpf}</td>
              <td>{value.country}</td>
              <td>{value.city}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </Container>
    </>
  )
}