import { ReactElement, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import DisplayErrors from '../utils/DisplayErrors';
import Loading from '../utils/Loading';

export default function EditEntity<TCreation, TRead>( //TRead is the interface or model, TCreation is the entity to edit
  props: editEntityProps<TCreation, TRead>
) {
  const { id }: any = useParams();
  const [entity, setEntity] = useState<TCreation>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${props.url}/${id}`).then((response: AxiosResponse<TRead>) => {
      setEntity(props.transform(response.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); //this action will rerun only when the Id changes

  async function edit(entityToEdit: TCreation) {
    try {
      if (props.transformFormData) {
        //to check if the parent component sends a transformed formData, it means we need to use formData
        const formData = props.transformFormData(entityToEdit);
        await axios({
          method: 'put',
          url: `${props.url}/${id}`,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.put(`${props.url}/${id}`, entityToEdit);
      }

      history.push(props.indexURL);
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Edit {props.entityName}</h3>
      <DisplayErrors errors={errors} />
      {entity ? props.children(entity, edit) : <Loading />}
    </>
  );
}

interface editEntityProps<TCreation, TRead> {
  url: string;
  entityName: string;
  indexURL: string;
  transform(entity: TRead): TCreation; //this will return the model
  transformFormData?(model: TCreation): FormData;
  children(entity: TCreation, edit: (entity: TCreation) => void): ReactElement; // this will help in the rendering of our edit component
}

EditEntity.defaultProps = {
  transform: (entity: any) => entity,
};