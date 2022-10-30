import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { Header } from '../../Components/Header';
import { getCity } from '../../Services/City';
import { getCountry } from '../../Services/Country';
import { Container } from './style';

interface IFormInput {
  fullName: String;
  email: String;
  cpf: Boolean;
  telephone: String;
  country: String;
  city: String;
}

const validationSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Email invalid').required("Email is required"),
  telephone: yup.string().required("Telephone is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  cpf: yup.string().required("CPF is required").length(11)
});

export function CreateDestiny() {
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

  const { register,  handleSubmit, reset, watch, formState: { errors } } = useForm<IFormInput>({resolver: yupResolver(validationSchema)});

  function onSubmit(data: IFormInput){
    setDestiny([...destiny, data]);
    reset()
    watch('country', '0')
    watch('city', '0')
  }

  useEffect(() => {
    localStorage.setItem(
      '@estagio:destiny',
      JSON.stringify(destiny)
    );
  }, [destiny]);

  const [countriesOptions, setCountriesOptions] = useState<Array<{
    name: string;
    code: string;
  }>>([]);
  const [citiesOptions, setCitiesOptions] = useState<Array<{
    name: string;
    country_code: string;
  }>>([]);

  useEffect(() => {
    (async () => {
      const country = await getCountry();
      const city = await getCity();
      
      setCountriesOptions(country);
      setCitiesOptions(city);
    })();
  }, [])

  return(
    <>
      <Header/>
        <Container  onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name</label>
          <input {...register("fullName")} />
          <p>{errors.fullName && "Full name is required"}</p>
          <label>Email</label>
          <input {...register("email")} />
          <p>{errors.email && "Email not is valid"}</p>

          <label>Telephone</label>
          <input {...register("telephone")} />
          <p>{errors.telephone && "Telephone is required"}</p>

          <label>CPF</label>
          <input {...register("cpf")}/>
          <p>{errors.cpf && "CPF is not valid"}</p>

          <label>Country</label>
          <select {...register("country")}>
            <option value=''>Selecione um pais</option>
            {countriesOptions.map(countryOption => {
              return (
                <option value={countryOption.name}>{countryOption.name}</option>
                )
              })}
          </select>
              <p>{errors.country && "Country is required"}</p>

          <label>City</label>
          <select {...register("city")}>
            <option value=''>Selecione uma cidade</option>
            {citiesOptions.map(cityOption => {
              return (
                <option value={cityOption.name}>{cityOption.name}</option>
                )
              })}
          </select>
              <p>{errors.city && "City is required"}</p>
          <button className='btn'>
            Cadastrar
          </button>
          
        </Container>
        
    </>
  )
}