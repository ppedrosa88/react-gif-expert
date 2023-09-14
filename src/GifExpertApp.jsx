
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory) NO
        console.log();
        if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return

        setCategories([ newCategory, ...categories ])
        //  setCategories( cat => [ ...cat, 'Valorant' ] )
    }

    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
            />

        {/* Listado de Gif */}
        
        { categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category } />
            ))
        }
        
        {/* Gif item */}
        </>
    )
}