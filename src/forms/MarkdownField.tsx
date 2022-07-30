import { Field, useFormikContext } from 'formik';
import ReactMarkdown from 'react-markdown';
import './MarkdownField.css';

export default function MarkdownField(props: markdownFieldProps) {
  const { values } = useFormikContext<any>();
  return (
    <div className='mb-3 form-markdown'>
      <div>
        <label>{props.displayName}</label>
        <div>
          <Field name={props.field} as='textarea' className='form-textarea' />
        </div>
      </div>
      <div>
        <label>{props.displayName} (preview):</label>
        <div className='markdown-container'>
          <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

interface markdownFieldProps {
  displayName: string;
  field: string;
}

//we also use Formik Context to access the values
// Markdown allows us to create text with formats, we need to install 2 packages for this
// -> npm i react-markdown typed-react-markdown
