import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function AdminAddProductPage(){
    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [labelledPrice, setLabelledPrice] = useState("");
    const [images, setImages] = useState("");
    const [category, setCategory] = useState("");
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [stock, setStock] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate()

    async function addProduct(){
        const token = localStorage.getItem("token");
        if(token == null){
            toast.error("You must be logged in as admin to add products.")
            navigate("/login");
            return;
        }

        if(productID == "" || name=="" || description=="" || category=="" || brand=="" || model==""){
            toast.error("Please fill in all required fields.")
            return;
        }

        try{
            const altNamesInArray = altNames.split(",")
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/", {
                productID : productID,
                name : name,
                altNames : altNamesInArray,
                description : description,
                price : price,
                labelledPrice : labelledPrice,
                images : images,
                category : category,
                brand : brand,
                model : model,
                stock : stock,
                isAvailable : isAvailable,  
            }, {
                headers :{
                    Authorization : "Bearer "+token
                }
            })
            toast.success("Product added successfully!");
            navigate("/admin/products");

        }catch(err){
            toast.error("Error adding product. Please try again.")
            console.log("Error adding product:")
            console.log(err)
        }
    }

    return(
        <div className="w-full h-full flex justify-center p-[50px] items-start overflow-y-scroll">
            <div className="bg-accent/80 p-10 rounded-2xl h-auto w-[800px] shadow-2xl overflow-y-visible">
                <h1 className="w-full text-xl text-primary mb-5 flex items-center gap-[5px]"><AiOutlineProduct/>Add New Product</h1>
                <div className="w-full bg-white p-5 flex flex-row flex-wrap justify-between rounded-xl shadow-2xl">
                    
                    <div className="my-2.5 w-[40%]">
                        <label>ProductID</label>
                        <input type="text" 
                        value={productID} 
                        onChange={(e)=>{
                            setProductID(e.target.value)
                            }} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                        <p className="text-5m text-gray-500 w-full  text-right">
                            Provide a unique product ID
                        </p>
                    </div>
                    <div className="my-2.5 w-[40%]">
                        <label>Name</label>
                        <input type="text" 
                        value={name} 
                        onChange={(e)=>{
                            setName(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 w-full">
                        <label>Alternative Names</label>
                        <input type="text" 
                        value={altNames} 
                        onChange={(e)=>{
                            setAltNames(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                        <p className="text-5m text-gray-500 w-full  text-right">
                            Separate multiple names with commas
                        </p>
                    </div>
                    <div className="my-2.5 w-full">
                        <label>Description</label>
                        <textarea type="text" 
                        value={description} 
                        onChange={(e)=>{
                            setDescription(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5 py-2.5"
                        />
                    </div>
                    <div className="my-2.5 w-[40%]">
                        <label>Price</label>
                        <input type="number" 
                        value={price} 
                        onChange={(e)=>{
                            setPrice(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 w-[40%]">
                        <label>Labelled Price</label>
                        <input type="number" 
                        value={labelledPrice} 
                        onChange={(e)=>{
                            setLabelledPrice(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 w-full">
                        <label>Images</label>
                        <input type="text" 
                        value={images} 
                        onChange={(e)=>{
                            setImages(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 flex flex-col w-[30%]">
                        <label>Category</label>
                        <select value={category} 
                            onChange={(e)=> {
                                setCategory(e.target.value)}} 
                                className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5">
                                <option value="CPU">CPU</option>
                                <option value="Graphic Cards">Graphic Cards</option>
                                <option value="Motherboards">Motherboards</option>
                                <option value="Power Supplies">Power Supplies</option>
                                <option value="RAM">RAM</option>
                                <option value="Storage Devices">Storage Devices</option>
                                <option value="Cooling Solutions">Cooling Solutions</option>
                                <option value="Computer Cases">Computer Cases</option>
                                <option value="Mouse and Keyboards">Mouse and Keyboards</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Monitors">Monitors</option>
                                <option value="Computers">Computers</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Cables">Cables</option>
                                <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="my-2.5 w-[30%]">
                        <label>Brand</label>
                        <input type="text" 
                        value={brand} 
                        onChange={(e)=>{
                            setBrand(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 w-[30%]">
                        <label>Model</label>
                        <input type="text" 
                        value={model} 
                        onChange={(e)=>{
                            setModel(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 w-[50%]">
                        <label>Stock</label>
                        <input type="number" 
                        value={stock} 
                        onChange={(e)=>{
                            setStock(e.target.value)}} 
                            className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5"
                        />
                    </div>
                    <div className="my-2.5 flex flex-col items-center w-[40%]">
                        <label>Available</label>
                        <select value={isAvailable} onChange={(e)=>{setIsAvailable(e.target.value)}} className="w-full h-[40x] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-5">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>    
                    </div>
                    <Link to="/admin/products" className="w-[49%] h-[50px] bg-red-500 text-white font-bold rounded-2xl flex justify-center items-center hover:bg-red-700 border-2  mt-5">
                            cancel
                    </Link>
                    <button onClick={addProduct} className="w-[49%] h-[50px] bg-accent text-white font-bold rounded-2xl hover:bg-transparent hover:text-accent border-2 border-accent mt-5">
                        Add Product
                    </button>
                    
                    
                </div>
                
            </div>

        </div>
    )
}