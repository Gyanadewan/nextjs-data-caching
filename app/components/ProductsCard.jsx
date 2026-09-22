import Link from "next/link"


function ProductsCard({product}) {
    const  {name,price,description,id} = product
  return (
   <div className="card card-dash bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       <Link href={`/showdetails/${id}`}>
        <button className="btn btn-primary">Show Details</button>
       </Link>
    </div>
  </div>
</div>
  )
}

export default ProductsCard
