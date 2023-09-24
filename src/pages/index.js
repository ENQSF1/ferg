import Image from "next/image";
import { Inter } from "next/font/google";
import Galeria from "@/components/galeria";

import Tarjet from "@/components/Tarjet";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const defensores = [
    {
      imagen: "/images/1.png",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus.",
    },
    {
      imagen: "/images/2.png",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus.",
    },
    {
      imagen: "/images/3.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus.",
    },
    {
      imagen: "/images/4.png",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus.",
    },
    {
      imagen: "/images/5.png",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus.",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-red-700">
        <div className="flex flex-col  md:grid grid-cols-2">
          <div className="md:order-2">
            <img src="./images/logo.jpg" alt="logo" />
          </div>
          <div className="md:order-1 flex flex-col items-center justify-center m-2">
            <b>
              <p className="m-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum amet aliquid quidem saepe illum esse in ratione est,
                velit ex quaerat officia doloribus natus hic ducimus! Quibusdam
                sint iste temporibus!
              </p>
            </b>
            <button className="bg-yellow-400 p-2 rounded-md">LEER MAS</button>
          </div>
        </div>

        {/* <div className="flex items-center justify-center"> */}
        <div className="bg-black flex flex-col md:grid grid-cols-3 gap-4 ">
          <Tarjet
            titulo={"QUIÉNES SOMOS"}
            parrafo={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio sapiente similique esse corrupti quam!"
            }
            boton={"LEE NUESTRA HISTORIA"}
          />{" "}
          <Tarjet
            titulo={"QUÉ HACEMOS"}
            parrafo={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio sapiente similique esse corrupti quam!"
            }
            boton={"EXPLORA LOS TEMAS"}
          />{" "}
          <Tarjet
            titulo={"PARTICIPA"}
            parrafo={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio sapiente similique esse corrupti quam!"
            }
            boton={"ACTUA"}
          />
        </div>
        <div className="bg-white p-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            perferendis facere commodi error voluptates tempora possimus
            eligendi? Pariatur minus ducimus excepturi vitae inventore dicta qui
            consectetur in iusto, eligendi, magnam, mollitia harum quidem unde
            autem! Cum, quos nemo ipsam distinctio rerum iure. Eius nulla
            voluptate accusamus, pariatur esse quia obcaecati voluptas. Suscipit
            laboriosam quidem, cupiditate et tempora reprehenderit. Qui quaerat
            nesciunt itaque labore, laboriosam fugit rerum id obcaecati est vel
            iusto voluptatibus aperiam, a voluptas totam. Dicta animi esse
            accusamus quisquam similique incidunt quae cum at. Facilis nulla vel
            odit minima, dignissimos, corporis reprehenderit expedita
            exercitationem officiis beatae, dolores ullam!
          </p>
        </div>
      </div>
      <div className="p-4">
        <Galeria imagenes={defensores} width={"400"} height={"400"} />
      </div>
      {/* </div> */}
    </div>
  );
}
