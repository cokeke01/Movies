import { Field, Form, Formik } from "formik"
import { genreDTO } from "../genres/genres.model"
import Button from "../utils/Button";

export default function FilterMovies(){

    const initialValues: filterMoviesForm = {
        title: '',
        genreId: 0,
        upcomingReleases: false,
        inTheaters: false
    }

    const genres: genreDTO[] = [{ id: 1, name: 'Drama' }, { id: 2, name: 'Comedy' }];


    return (
        <>
            <h3>Filter Movies</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control" id="title"
                                    placeholder="Title of the movie"
                                    {...formikProps.getFieldProps("title")}
                                />
                            </div>
                            <div className="col-auto">
                                <select className="form-select"
                                    {...formikProps.getFieldProps("genreId")}
                                >
                                    <option value="0">--Choose a genre--</option>
                                    {genres.map(genre => <option key={genre.id}
                                        value={genre.id}
                                    >{genre.name}</option>)}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="upcomingReleases"
                                    name="upcomingReleases" type="checkbox" />
                                    <label className="form-check-label"
                                    htmlFor="upcomingReleases">Upcoming Releases</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="inTheaters"
                                    name="inTheaters" type="checkbox" />
                                    <label className="form-check-label"
                                    htmlFor="inTheaters">In Theaters</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Button className="btn btn-primary"
                                onClick={() => formikProps.submitForm()}
                                >Filter</Button>
                                <Button className="btn btn-danger ms-3"
                                onClick={() => formikProps.setValues(initialValues)}
                                >Clear</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}




interface filterMoviesForm { //the 4 items
    title: string;
    genreId: number;
    upcomingReleases: boolean;
    inTheaters: boolean;
}

//we create an interface that will contain the data of the form of this filter component
// this component will contain 4 items

// in order for formik to integrate wit the input we had to pass some attribute to it, therefore using "getFieldProps"