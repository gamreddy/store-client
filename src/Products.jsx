import React, { useState } from "react";
import useFetch  from "./services/useFetch";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Products() {
  const [size, setSize] = useState("");
  const {category} = useParams();
  const {data: products, loading, error} = useFetch("products?category=" + category);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }  

  if(error) throw error;
  if(loading) return <Spinner/>;
  if(products.length === 0) return <PageNotFound />;

  return (
    <>
          <section id="products">
            {products && products.map(renderProduct)}
          </section>
    </>
  );    

}