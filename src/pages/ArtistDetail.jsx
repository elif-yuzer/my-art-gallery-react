import React, { useState } from "react";
import { Card, Container, Form, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const ArtistDetail = ({ data }) => {
  const [selectCategory, setSelectCategory] = useState("");

  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const filteredWorks = selectCategory
    ? data.artworks?.filter((w) => String(w.categoryId) === String(selectCategory))
    : data.artworks;

     useEffect(()=>{
        document.body.style.background="linear-gradient(135deg, #d9d9d9 0%, #ffedd8 100%)"
        document.body.style.minHeight = "100vh"
      
        return () => {
          document.body.style.background = "";
         
        };
        
        
      },[])

  return (
    <Container className="text-dark py-4 artistdetail">
      <Row className="justify-content-center mb-4">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Form.Select
            onChange={handleChange}
            aria-label="Kategori seç"
            name="categorySelect"
            value={selectCategory}
            className="shadow-sm"
          >
            <option value="">Tüm Kategoriler</option>
            {data.categories?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-4">
        {filteredWorks?.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={item.image}
                className="img-fluid"
                style={{ height: "260px", objectFit: "cover", cursor: "pointer" }}
                alt={item.title || "artwork"}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 mb-1 text-truncate">
                  {item.title || "Untitled"}
                </Card.Title>
                <Card.Text className="text-muted small mb-0 text-truncate">
                  {item.year || ""}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {filteredWorks?.length === 0 && (
          <Col xs={12} className="text-center text-muted py-5">
            Bu kategoriye ait eser bulunamadı.
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ArtistDetail;
