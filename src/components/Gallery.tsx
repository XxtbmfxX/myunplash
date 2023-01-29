import { ImgCard } from "./ImgCard";

import Face from "../assets/face.jpg";
import pueblo from "../assets/pueblo.avif";
import tree from "../assets/tree.jpg";
import tracer from "../assets/tracer.avif";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Overlay from "./Overlay";

export const Gallery = () => {
  const { count, incrementCount, decrementCount } = useContext(AppContext);

  return (
    <main id="outer-container" className="Main">
      <div id="page-wrap" className="Main_gallery grid grid-cols-3 h-auto ">
        <section className="Main_item ">
          <ImgCard image={Face} />
        </section>

        <section className="Main_item ">
          <ImgCard image={Face} />
        </section>
        <section className="Main_item ">
          <ImgCard image={Face} />
        </section>
        <section className="Main_item ">
          <ImgCard image={Face} />
        </section>

        <section className="Main_item ">
          <ImgCard image={Face} />
        </section>

        <section className="Main_item ">
          <ImgCard image={tracer} />
        </section>
        <section className="Main_item ">
          <ImgCard image={tracer} />
        </section>
        <section className="Main_item ">
          <ImgCard image={pueblo} />
        </section>
      </div>
    </main>
  );
};
