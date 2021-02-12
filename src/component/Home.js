import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';


const Home = ({ movies, match }) => {
  const [home, setHome] = useState({})

  console.log(match)



  // useEffect(() => {
  //   setHome(movies.find((mv) => mv.id === +match.params.id))
  // }, [])


  return (



    <div>
      {console.log(movies)}
      <h2 style={{ marginTop: "4%", marginLeft: "10%", marginBottom: "4%" }}>Trailer Page</h2>
      <ReactPlayer style={{ marginLeft: "10%" }} url={home.trailerPage} />


      <h2 style={{ marginTop: "4%", marginLeft: "10%", marginBottom: "4%" }}>Description</h2>
      <span style={{ color: "red", marginLeft: "10%", fontSize: "150%", marginBottom: "4%" }}>{home.name} </span>
      <h3>{home.date}</h3>
      <div style={{ backgroundColor: "rgb(236, 231, 231)", width: "40%", marginLeft: "10%", marginBottom: "6%", }}>
        <span >{home.description} </span>
      </div>

    </div>
  );
}

export default Home;
