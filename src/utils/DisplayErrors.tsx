export default function DisplayErrors(props: displayErrorsProps) {
  const style = { color: 'red' };
  return (
    <>
      {props.errors ? (
        <ul style={style}>
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

interface displayErrorsProps {
  errors?: string[];
}
//this component was created to display error messages from our web api , which is defined as an array of string messages
