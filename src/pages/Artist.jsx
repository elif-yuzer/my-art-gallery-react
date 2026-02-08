import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,useLocation,useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import ArtistDetail from "./ArtistDetail";


const Artists = ({artists,artworks}) => {
  const navigate = useNavigate();
  const location=useLocation()
  console.log(location.state);
  /* const param=useParams() */
  const {id}=useParams()
 
const selectArtist=location.state?. artist  || artists.find((a)=>a.id==id)
console.log(selectArtist.name)
console.log(selectArtist);
if(!selectArtist) {
return  <div className="container mt-4  h-100">Sanatçı bilgisi bulunamadı...</div>
}

  return (
    <div className="container mt-5 ">
      <div className="row  ">
 
          <div 
            key={selectArtist.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 m-3 mx-auto "
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                
                style={{ cursor: "pointer" }}
                variant="top"
                src={selectArtist.portrait}
              />

              <Card.Body>
                <Card.Title>{selectArtist.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                {selectArtist.lifeSpan} | {selectArtist.country}
              </Card.Subtitle>
              <hr />
               
                <Card.Text>{selectArtist.bio}</Card.Text>
                <Card.Text >{selectArtist.movements}</Card.Text>
              <Card.Text>
                <strong>Biliyor muydunuz?</strong> {selectArtist.funFact}
              </Card.Text>
        
              </Card.Body>
            </Card>
            <button
                className="btn btn-outline-primary mt-3"
                onClick={() => navigate(-1)}
              >
                Geri Dön
              </button>
          </div> 
  
      </div>
    </div>
  );
};

export default Artists;
