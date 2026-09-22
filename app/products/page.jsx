import ProductsCard from "../components/ProductsCard";

const getProducts = async () => {
    const res = await fetch ("http://localhost:5000/products",{cache: 'force-cache'})
     return res.json();
}
 async function ProductPage() {
    const products = await getProducts()
  return (
    <div>
        <h1> products:{products.length}</h1>
        <h1>Welcome Product page</h1>
       <div className="grid grid-cols-3 gap-5 ">
          {
             products.map(product =>  <ProductsCard key={product.id} product={product}></ProductsCard>)
        }
       </div>
    </div>
  )
}

export default ProductPage
