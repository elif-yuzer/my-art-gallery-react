import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../mainlayout/MainLayout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Artist from "../pages/Artist";
import About from "../pages/About";
import History from "../pages/History";
import OurServices from "../pages/OurServices";
import Location from "../pages/Location";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ArtistDetail from "../pages/ArtistDetail";

const AppRouter = ({ artists, artworks, categories, data }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="artists/:id" element={<Artist artists={artists} artworks={artworks} />} />
          <Route path="artists" element={<ArtistDetail data={data} />} />

          <Route path="about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="our-services" element={<OurServices />} />
            <Route path="location" element={<Location />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
