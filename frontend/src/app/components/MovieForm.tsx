import React, { useState } from 'react'
import MovieService from '../services/movieService'
import { CreateMovieVariables } from '../services/movieService/__generated__/CreateMovie'

// material-tailwind is not officially supported by TS - hence the ignores
/* eslint-disable */
// @ts-ignore
import Card from '@material-tailwind/react/Card'
// @ts-ignore
import Textarea from '@material-tailwind/react/Textarea'
// @ts-ignore
import CardBody from '@material-tailwind/react/CardBody'
// @ts-ignore
import CardFooter from '@material-tailwind/react/CardFooter'
// @ts-ignore
import Input from '@material-tailwind/react/Input'
// @ts-ignore
import Button from '@material-tailwind/react/Button'
// @ts-ignore
import Alert from '@material-tailwind/react/Alert'
/* eslint-enable */

export default function MovieForm() {
    const movieService = new MovieService()

    const [showCreateMovieForm, setshowCreateMovieForm] = useState(false)
    const [showAlert, setshowAlert] = useState(false)

    const [newMovie, setNewMovie] = useState<CreateMovieVariables>({
        title: '',
        description: '',
        published: NaN,
    })

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const data = event.target

        if (data.name === 'published') {
            // Form returns string, query requires int for 'published'.
            const publishedInt = parseInt(data.value)
            setNewMovie((prevState) => ({
                ...prevState,
                [event.target.name]: publishedInt,
            }))
        } else {
            setNewMovie((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!newMovie.title) {

            return
        }

        movieService
            .createMovie(newMovie.title, newMovie.description, newMovie.published)
            .then(() => {
                setshowCreateMovieForm(false)
                setshowAlert(true)
                setTimeout(() => setshowAlert(false), 2000)
            })
            .catch((err: Error) => {
                console.error(err)
            })
    }

    return (
        <>
            {showAlert ? (
                <div className="fixed inset-0 z-50 w-1/2 m-auto">
                    <Alert color="green">
                        <p className="w-full text-center">Movie successfully created</p>
                    </Alert>
                </div>
            ) : null}

            <Button className="my-10" onClick={() => setshowCreateMovieForm(true)}>
                Add new movie
            </Button>
            {showCreateMovieForm ? (
                <>
                    <div className=" justify-center items-center flex fixed inset-0 z-50">
                        <Card className="mx-24 w-full max-w-screen-sm">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                                <h3 className="text-black text-3xl">Add new movie</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl outline-none focus:outline-none"
                                    onClick={() => setshowCreateMovieForm(false)}
                                >
                                    &#10006;
                                </button>
                            </div>

                            <CardBody>
                                <form onSubmit={handleSubmit}>
                                    <div className="mt-4 mb-8 px-4">
                                        <label htmlFor="title" />
                                        <Input
                                            type="text"
                                            id="title"
                                            name="title"
                                            outline={true}
                                            required
                                            placeholder="Movie title"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-8 px-4">
                                        <label htmlFor="description" />
                                        <Textarea
                                            id="description"
                                            name="description"
                                            outline={true}
                                            required
                                            placeholder="Summary"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-8 px-4">
                                        <label htmlFor="published" />
                                        <Input
                                            type="number"
                                            min="1800"
                                            max="2099"
                                            step="1"
                                            id="published"
                                            name="published"
                                            outline={true}
                                            required
                                            placeholder="Release Year"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <CardFooter className="flex justify-end">
                                        <Button
                                            className="mx-4"
                                            color="red"
                                            buttonType="outline"
                                            ripple="light"
                                            onClick={() => setshowCreateMovieForm(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit">Create Movie</Button>
                                    </CardFooter>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
