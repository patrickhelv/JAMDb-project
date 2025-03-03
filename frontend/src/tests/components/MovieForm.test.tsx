import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import TestUtils from 'react-dom/test-utils';
import MovieForm from '../../app/components/MovieForm'
import { printHTML } from '../../app/utils/printHTML';
import {
  CreateMovieVariables,
} from '../../app/services/movieService/__generated__/CreateMovie'
import { getElementById } from '../../app/utils/getElementById'
import { CustomeEventTarget } from '../../app/utils/EventTarget'


describe('Test movie detail', () => {

  it('Test rendering', () => {
    const { baseElement } = render(<MovieForm />)

    expect(baseElement).toBeInTheDocument();

    const showMovieFormButton = baseElement.getElementsByTagName("button").item(0)
    expect(showMovieFormButton).toBeInstanceOf(HTMLButtonElement)
    fireEvent.click(showMovieFormButton as HTMLButtonElement)

    expect(baseElement.getElementsByTagName("form")[0]).toHaveFormValues({
      title: '',
      description: '',
      published: null
    })

  })

  it('Test onChange evnets', () => {
    const { baseElement } = render(<MovieForm />)


    const testPayload: CreateMovieVariables = {
      title: "Test movie",
      description: "This is a test payload for movie form",
      published: 0
    }

    const showMovieFormButton = baseElement.getElementsByTagName("button").item(0)
    expect(showMovieFormButton).toBeInstanceOf(HTMLButtonElement)
    fireEvent.click(showMovieFormButton as HTMLButtonElement)

    const movieFormOrNull = baseElement.getElementsByTagName("form").item(0)
    expect(movieFormOrNull).toBeInstanceOf(HTMLFormElement)
    const movieForm = movieFormOrNull as HTMLFormElement

    const titleInput = getElementById(movieForm, "title")
    const descriptionArea = getElementById(movieForm, "description")
    const publishedInput = getElementById(movieForm, "published")

    expect(titleInput).toBeInstanceOf(HTMLInputElement)
    expect(descriptionArea).toBeInstanceOf(HTMLTextAreaElement)
    expect(publishedInput).toBeInstanceOf(HTMLInputElement)

    const titleEvent = new CustomeEventTarget(testPayload.title)
    const descriptionEvent = new CustomeEventTarget(testPayload.description)
    const publishedEvent = new CustomeEventTarget(testPayload.published)

    fireEvent.change(titleInput, titleEvent)
    fireEvent.change(descriptionArea, descriptionEvent)
    fireEvent.change(publishedInput, publishedEvent)

    expect(movieForm).toHaveFormValues({ ...testPayload })

  })

  it("Test submit", () => {
    const { baseElement } = render(<MovieForm />)

    expect(baseElement).toBeInTheDocument();

    const showMovieFormButton = baseElement.getElementsByTagName("button").item(0)
    expect(showMovieFormButton).toBeInstanceOf(HTMLButtonElement)
    fireEvent.click(showMovieFormButton as HTMLButtonElement)

    const submitButton = Array.from(baseElement.getElementsByTagName("button")).filter(button => button.type === "submit")[0]

    expect(submitButton).toBeInTheDocument();

  });

})