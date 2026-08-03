/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import api from "../services/api";
import ChainCard from "../components/ChainCard";
import "../components/FilterSection.css";


function Bracelets() {

  const [bracelets, setBracelets] = useState([]);
  const [filteredBracelets, setFilteredBracelets] = useState([]);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");


  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getBracelets();
  }, []);



  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    filterBracelets();
  }, [bracelets, category, price]);



  // Get bracelets from db.json
  async function getBracelets() {

    try {

      const response = await api.get("/bracelets");

      setBracelets(response.data);
      setFilteredBracelets(response.data);

    } catch (error) {

      console.log(error);

    }

  }



  // Filter function
  function filterBracelets() {

    let data = [...bracelets];


    if(category !== "") {

      data = data.filter((item)=>{

        const metalMatch =
          item.metal &&
          item.metal.toLowerCase() === category.toLowerCase();


        const nameMatch =
          item.name &&
          item.name.toLowerCase().includes(category.toLowerCase());


        return metalMatch || nameMatch;

      });

    }



    if(price === "0-10000") {

      data = data.filter(
        item => item.price <= 10000
      );

    }


    else if(price === "10000-50000") {

      data = data.filter(
        item => item.price > 10000 && item.price <= 50000
      );

    }


    else if(price === "50000") {

      data = data.filter(
        item => item.price > 50000
      );

    }


    setFilteredBracelets(data);

  }




  // Reset filters
  function resetFilters(){

    setCategory("");
    setPrice("");
    setFilteredBracelets(bracelets);

  }





  // Delete bracelet (Admin only)
  async function deleteBracelet(id){

    try{

      await api.delete(`/bracelets/${id}`);


      const updatedData =
        bracelets.filter(
          item => item.id !== id
        );


      setBracelets(updatedData);
      setFilteredBracelets(updatedData);


    }
    catch(error){

      console.log(error);

    }

  }





  return (

    <>

      <h1>
        Bracelets Collection
      </h1>



      <div className="filter-bar">


        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >

          <option value="">
            All Metals
          </option>

          <option value="Gold">
            Gold
          </option>

          <option value="Silver">
            Silver
          </option>

          <option value="Rose Gold">
            Rose Gold
          </option>

          <option value="Diamond">
            Diamond
          </option>

          <option value="Platinum">
            Platinum
          </option>


        </select>




        <select
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        >

          <option value="">
            All Prices
          </option>

          <option value="0-10000">
            Below ₹10,000
          </option>

          <option value="10000-50000">
            ₹10,000 - ₹50,000
          </option>

          <option value="50000">
            Above ₹50,000
          </option>


        </select>



        <button onClick={resetFilters}>
          Reset
        </button>


      </div>





      <div className="chains">


        {
          filteredBracelets.length > 0 ?


          filteredBracelets.map((item)=>(


            <ChainCard

              key={item.id}

              chain={item}

              onDelete={deleteBracelet}

            />


          ))



          :


          <h2 style={{
            textAlign:"center",
            width:"100%"
          }}>

            No Bracelets Found

          </h2>


        }


      </div>



    </>

  );

}


export default Bracelets;