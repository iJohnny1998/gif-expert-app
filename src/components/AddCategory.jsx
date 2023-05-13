import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => setInputValue(target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1)
            return;

        onAddCategory(inputValue.trim());

        //Otra forma obteniendo el setCategories
        // setCategories(categories => [inputValue, ...categories])        

        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFS"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
