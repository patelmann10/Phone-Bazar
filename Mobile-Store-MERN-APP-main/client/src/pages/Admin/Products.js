// import React, { useState, useEffect } from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// const Products = () => {
//   const [products, setProducts] = useState([]);

//   //getall products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/product/get-product");
//       setProducts(data.products);
//       console.log("product with file ", data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Someething Went Wrong");
//     }
//   };

//   //lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   return (
//     <Layout title={"Dashboard - All Products"}>
//       <div className="container-fluid m-3 p-3 dashboard">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9 ">
//             <h1 className="text-center">All Products List</h1>
//             <div className="d-flex flex-wrap">
//               {products?.map((p) => (
//                 <Link
//                   key={p?._id}
//                   to={`/dashboard/admin/product/${p.slug}`}
//                   className="product-link"
//                 >
//                   <div className="card m-2" style={{ width: "18rem" }}>
//                   <img
//                       src={`http://localhost:8080/api/v1/product/product-photo/${p?._id}`}
//                       className="card-img-top"
//                       alt={p.name}
//                   />
//                     <div className="card-body">
//                       <h5 className="card-title">{p.name}</h5>
//                       <p className="card-text">{p.description}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;









import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Handle delete product
  const handleDelete = async (productId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (!confirmDelete) return;

      await axios.delete(`/api/v1/product/delete-product/${productId}`);
      toast.success("Product deleted successfully");
      getAllProducts(); // Refresh list
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the product");
    }
  };

  return (
    <Layout title={"Dashboard - All Products"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <div className="d-flex justify-content-between">
                      {/* <Link
                        to={`/dashboard/admin/product/${p.slug}`}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </Link> */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(p._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
