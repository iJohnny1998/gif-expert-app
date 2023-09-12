import { render } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en GifItem', () => {
    const title = 'Kokun';
    const url = 'https://goku.com/kokun.jpg'

    test('Match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot();
    })

})
