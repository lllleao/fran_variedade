declare type Product = {
    id: number
    img: string
    title: string
    price: string
    description: string
}

declare type ProductsHome = {
    category: string
    product: Product[]
}
