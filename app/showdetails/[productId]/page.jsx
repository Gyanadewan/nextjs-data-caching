async function ShowDetailsPage({ params }) {
  const { productId } = await params;

  const showDetailsProduct = async () => {
    const res = await fetch(
      `http://localhost:5000/products/${productId}`
    );

    const data = await res.json();

    return data;
  };

  const product = await showDetailsProduct();

  return (
    <div>
      <h1>Welcome Show Details</h1>

      <div className="card bg-base-100 w-80 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
          </h2>

          <p>{product.description}</p>

          <div className="flex justify-between items-center mt-4">
            <span className="badge badge-primary">
              {product.category}
            </span>

            <span className="font-bold text-lg">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetailsPage;