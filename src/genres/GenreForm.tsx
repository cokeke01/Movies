import { Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import { genreCreationDTO } from './genres.model';

export default function GenreForm(props: genreFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field='name' displayName='Name' />

          <Button disabled={formikProps.isSubmitting} type='submit'>
            Save Changes
          </Button>
          <Link className='btn btn-secondary' to='/genres'>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(
    values: genreCreationDTO,
    action: FormikHelpers<genreCreationDTO>
  ): void;
}

// Since the CreateGenre and EditGenres will have similar form contents, we decided to create an
// interface "genres.model.d.ts" and a general form "GenreForms" to handle it.
// We can now pass the model to the CreateGenre
// we are also able to re-use the GenreForm in our EditGenre component