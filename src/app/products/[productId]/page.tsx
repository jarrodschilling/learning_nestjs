import { Metadata } from "next"

type Props = {
  params: {
    productId: string
  }
}

// When fetching data from a DB or external API will need async
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}

// If no Promise/Await needed just do this
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`
//   }
// }


export default function ProductDetails( { params }: {
    params: {productId: string}
}) {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  )
}
