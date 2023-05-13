import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (category) => {

        if (categories.includes(category)) {
            alert(`La categoría ${category} ya existe`);
            return;
        }

        return setCategories([category, ...categories]);
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {
                categories.map(category =>
                    <GifGrid key={category} category={category} />
                )
            }
        </>
    )
}

export default GifExpertApp
