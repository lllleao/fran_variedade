import { createSlice } from '@reduxjs/toolkit'
import mug1 from '../../assets/amostragem/mugs/amizade1.png'
import mug2 from '../../assets/amostragem/mugs/out14.png'
import mug3 from '../../assets/amostragem/mugs/amizade4.png'
import mug4 from '../../assets/amostragem/mugs/mug_prof_coruja.png'
import mug5 from '../../assets/amostragem/mugs/mug_prof_escrita.png'
import mug6 from '../../assets/amostragem/mugs/caneca_almofada.jpg'

const initialState: ProductsHome[] = [
    {
        category: 'mugs',
        product: [
            {
                id: 1,
                description: 'Caneca de porcelana 325ml',
                price: '23,99',
                title: 'Dia do Amigo',
                img: mug1
            },
            {
                id: 2,
                description: 'Caneca de porcelana 325ml',
                price: '23,99',
                title: 'Outubro Rosa',
                img: mug2
            },
            {
                id: 3,
                description: 'Caneca de porcelana 325ml',
                price: '23,99',
                title: 'Dia do Amigo',
                img: mug3
            },
            {
                id: 4,
                description: 'Caneca de porcelana 325ml',
                price: '23,99',
                title: 'Dia dos professores',
                img: mug4
            },
            {
                id: 5,
                description: 'Caneca de porcelana 325ml',
                price: '23,99',
                title: 'Dia dos professores',
                img: mug5
            },
            {
                id: 6,
                description: 'Caneca de porcelana 325ml',
                price: '23,99',
                title: 'Kit Caneca Almofada',
                img: mug6
            }
        ]
    }
]
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})

export default productSlice.reducer
