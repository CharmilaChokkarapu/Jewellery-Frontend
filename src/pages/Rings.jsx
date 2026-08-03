/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import api from "../services/api";
import ChainCard from "../components/ChainCard";
import "../components/FilterSection.css";


function Rings() {

  const [rings, setRings] = useState([]);
  const [filteredRings, setFilteredRings] = useState([]);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");



  useEffect(() => {

    // eslint-disable-next-line react-hooks/immutability
    getRings();

  }, []);




  useEffect(() => {

    // eslint-disable-next-line react-hooks/immutability
    filterRings();

  }, [rings, category, price]);






  // Get Rings from db.json
  async function getRings() {

    try {

      const response = await api.get("/rings");

      setRings(response.data);

      setFilteredRings(response.data);


    } catch(error) {

      console.log(error);

    }

  }





  // Filter Rings
  function filterRings() {


    let data = [...rings];



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
        item =>
        item.price > 10000 &&
        item.price <= 50000
      );


    }



    else if(price === "50000") {


      data = data.filter(
        item => item.price > 50000
      );


    }




    setFilteredRings(data);


  }





  // Reset Filters
  function resetFilters() {


    setCategory("");

    setPrice("");

    setFilteredRings(rings);


  }







  // Delete Ring (Admin only)
  async function deleteRing(id) {


    try {


      await api.delete(`/rings/${id}`);



      const updatedData =
        rings.filter(
          item => item.id !== id
        );



      setRings(updatedData);

      setFilteredRings(updatedData);



    } catch(error) {


      console.log(error);


    }


  }







  return (

    <>


      <h1>
        Rings Collection
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


          filteredRings.length > 0 ?



          filteredRings.map((item)=>(


            <ChainCard


              key={item.id}


              chain={item}


              onDelete={deleteRing}



            />


          ))



          :



          <h2
            style={{
              textAlign:"center",
              width:"100%"
            }}
          >

            No Rings Found


          </h2>


        }




      </div>





    </>


  );


}


export default Rings;