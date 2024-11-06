import { ProductType } from "@/types/ProductType"
import Image from "next/image"
import ProductImage from "./ProductImage"

type ProductProps = {
    product: ProductType
}
export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-300 p-5 text-gray-300 rounded-lg">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill></ProductImage>
            </div>
            <div className="flex justify-between font-bold my-3">
                <p className="w-40 truncate text-gray-950">{product.title}</p>
                <p className="text-md text-teal-600">{product.price}</p>
            </div>
            <button className=" bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center rounded-lg">Adicionar ao Carrinho</button>
        </div>
    )
}