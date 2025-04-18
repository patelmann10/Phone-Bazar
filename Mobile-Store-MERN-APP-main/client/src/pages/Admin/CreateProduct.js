import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


  //create product function
  const handleCreate = async (e) => {
    console.log(e)
    e.preventDefault();
    console.log(name,description,price,quantity,photo,category)
    try {
      const productData = new FormData();
      console.log(photo)
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      console.log(productData)
      const {data}  = await axios.post(
        "/api/v1/product/create-product",
        productData
      );
      console.log ("post request data",data)
      if (data?.success) {
        toast.error(data?.message);
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      } else {
       console.log("prodect created successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;


// import React, { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Select } from "antd";
// import { useNavigate } from "react-router-dom";
// import Layout from "./../../components/Layout/Layout";
// import AdminMenu from "./../../components/Layout/AdminMenu";

// const { Option } = Select;

// const CreateProduct = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const [categories, setCategories] = useState([]);
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     const getAllCategory = async () => {
//       try {
//         const { data } = await axios.get("/api/v1/category/get-category");
//         if (data?.success) {
//           setCategories(data?.category);
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error("Something went wrong in getting categories");
//       }
//     };
//     getAllCategory();
//   }, []);

//   const onSubmit = async (data) => {
//     data.userId = localStorage.getItem("id");
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", data.price);
//     formData.append("quantity", data.quantity);
//     formData.append("category", data.category);
//     formData.append("shipping", data.shipping);
//     formData.append("userId", data.userId);
//     if (photo) {
//       formData.append("photo", photo);
//     }

//     try {
//       const res = await axios.post("/api/v1/product/create-product", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (res.data?.success) {
//         toast.success("Product Created Successfully");
//         navigate("/dashboard/admin/products");
//       } else {
//         toast.error(res.data?.message);
//       }
//     } catch (error) {
//       console.error("Error creating product:", error);
//       toast.error("Something went wrong.");
//     }
//   };

//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid m-3 p-3 dashboard">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Create Product</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className="m-1 w-75">
//               <Controller
//                 name="category"
//                 control={control}
//                 render={({ field }) => (
//                   <Select
//                     {...field}
//                     bordered={false}
//                     placeholder="Select a category"
//                     size="large"
//                     showSearch
//                     className="form-select mb-3"
//                   >
//                     {categories?.map((c) => (
//                       <Option key={c._id} value={c._id}>
//                         {c.name}
//                       </Option>
//                     ))}
//                   </Select>
//                 )}
//               />

//               <div className="mb-3">
//                 <label className="btn btn-outline-secondary col-md-12">
//                   {photo ? photo.name : "Upload Photo"}
//                   <input
//                     type="file"
//                     accept="image/*"
//                     hidden
//                     onChange={(e) => setPhoto(e.target.files[0])}
//                   />
//                 </label>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Write a name"
//                 className="form-control mb-3"
//                 {...register("name", { required: "Name is required" })}
//               />
//               {errors.name && <p className="text-danger">{errors.name.message}</p>}

//               <textarea
//                 placeholder="Write a description"
//                 className="form-control mb-3"
//                 {...register("description", { required: "Description is required" })}
//               />
//               {errors.description && <p className="text-danger">{errors.description.message}</p>}

//               <input
//                 type="number"
//                 placeholder="Write a price"
//                 className="form-control mb-3"
//                 {...register("price", { required: "Price is required" })}
//               />
//               {errors.price && <p className="text-danger">{errors.price.message}</p>}

//               <input
//                 type="number"
//                 placeholder="Write a quantity"
//                 className="form-control mb-3"
//                 {...register("quantity", { required: "Quantity is required" })}
//               />
//               {errors.quantity && <p className="text-danger">{errors.quantity.message}</p>}

//               <Controller
//                 name="shipping"
//                 control={control}
//                 render={({ field }) => (
//                   <Select
//                     {...field}
//                     bordered={false}
//                     placeholder="Select Shipping"
//                     size="large"
//                     showSearch
//                     className="form-select mb-3"
//                   >
//                     <Option value="0">No</Option>
//                     <Option value="1">Yes</Option>
//                   </Select>
//                 )}
//               />

//               <button type="submit" className="btn btn-primary">
//                 CREATE PRODUCT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateProduct;



