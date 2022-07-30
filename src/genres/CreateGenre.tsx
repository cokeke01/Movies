import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { urlGenres } from '../endpoints';
import DisplayErrors from '../utils/DisplayErrors';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './genres.model';

export default function CreateGenre() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(genre: genreCreationDTO) {
    //posting genre to web api
    try {
      await axios.post(urlGenres, genre); //where urlGenres contains the api endpoint URL
      history.push('/genres'); //this will redirect client app to genre index
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data); //updating "errors" which will then push to child component "DisplayErrors"
      }
    }
  }

  return (
    <>
      <h3>Create Genre</h3>
      <DisplayErrors errors={errors} />
      <GenreForm
        model={{ name: '' }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}

//the UseHistory will help us to be able to save data and be redirected to a certain page.
