import { urlGenres } from '../endpoints';
import EditEntity from '../utils/EditEntity';
import GenreForm from './GenreForm';
import { genreCreationDTO, genreDTO } from './genres.model';

export default function EditGenre() {
  return (
    <>
      <EditEntity<genreCreationDTO, genreDTO>
        url={urlGenres}
        entityName='Genres'
        indexURL='/genres'
      >
        {(entity, edit) => (
          <GenreForm
            model={entity}
            onSubmit={async (value) => {
              await edit(value);
            }}
          />
        )}
      </EditEntity>
    </>
  );
}

// import { useParams } from "react-router-dom";

// export default function EditGenre(){
//     const {id}: any = useParams(); // the id we are expecting from the params
//     return (
//         <>
//             <h3>Edit Genre</h3>
//             The id is {id}
//         </>
//     )
// }
