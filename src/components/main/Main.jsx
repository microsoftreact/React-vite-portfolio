import { useState } from "react";
import "./Main.css";
const img =
  "https://wallup.net/wp-content/uploads/2018/09/30/117405-trees-trees-creative-nature-green.jpg";

const Main = ({ color }) => {
  return (
    <div className="main">
      <div className="main-img">
        <img src={img} width={600} />
      </div>
      <div className={color ? "main-content dark" : "main-content"}>
        <h1>Night Fergana</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos
          eius, dolore aliquid commodi esse excepturi incidunt quisquam fugiat
          suscipit, quia deleniti reprehenderit ea consequatur autem quae totam,
          debitis sint. Veniam deserunt aut tempore autem nam adipisci dicta
          nemo obcaecati quidem ea unde quibusdam nisi doloremque mollitia ipsum
          iste ullam officiis, reprehenderit velit fuga perspiciatis officia
          vitae, dolore itaque. Quaerat incidunt officiis rerum a dignissimos
          eligendi mollitia, accusamus deserunt error modi animi impedit illo,
          illum quisquam rem consectetur, laudantium doloribus natus aliquid quo
          in adipisci. Veritatis ratione eveniet ipsum voluptates.
        </p>
        <button>Click Me</button>
      </div>
    </div>
  );
};

export default Main;
