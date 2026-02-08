import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row ,Col,Card} from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";
import Artist from "./Artist";

const Gallery = () => {
  const navigate=useNavigate()

  
  
  const urlartitsts = "http://localhost:5178/artists";
  const urlartWorks = "http://localhost:5178/artworks";

  const [artworks,setArtworks]=useState([])
  const [artists,setArtists]=useState([])

  const getArtists=async()=>{
    const res=await axios.get(urlartitsts)
   /*  console.log(res.data); */
   setArtists(res.data)
  }

  const getArtWorks=async()=>{
    const response=await axios.get(urlartWorks)
   /*  console.log(response.data) */;
   setArtworks(response.data)
  }




  useEffect(()=>{
    document.body.style.background="linear-gradient(135deg, #d9d9d9 0%, #ffedd8 100%)"
    document.body.style.minHeight = "100vh"
    getArtists()
    getArtWorks()
    return () => {
      document.body.style.background = "";
     
    };
    
    
  },[])
  

  return (
 
  <Container className="py-5 mx-auto gallery-container">
  <Row>
    {artworks.map((item,index) => {

      const artist = artists.find(
        artist => artist.id === item.artistId
      );

      return (
        
        <Col  key={item.id} lg={index %3===0 ? 8 : 4} md={6} sm={12} className="mb-4 mx-auto">
          <Card  onClick={() =>
                  navigate(`/artists/${artist.id}`, { state: { artist } })
                } className="h-100 shadow-sm border-0 mx-auto card " >
            <Card.Img className="card-img" style={{ objectFit:"contain",cursor:"pointer",height:"500px",width:"500px"}} variant="top" src={item.image} />
            <Card.Body style={{display:"flex" , flexDirection:"column"}}>
              <Card.Title className="text-muted card-title">
                {artist ? artist.name : "Unknown artist"}
              </Card.Title>
              <Card.Text className="fw-bold mt-auto card-text">
                {item.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );

    })}
  </Row>
    
</Container>

     
 
    
      
        
      
    

  );
};

export default Gallery;
