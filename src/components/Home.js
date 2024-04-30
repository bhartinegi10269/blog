import React from "react";
// import "./home.css";
function Home() {
  return (
    <>
      <article class=" w-screen" >
        <div
          class="container"
          style={{
            background:
              "url(https://images.pexels.com/photos/2310604/pexels-photo-2310604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            backgroundSize: "cover",
            height: "500px",
            
          }}
          className="w-screen"
        >
          <div className=" absolute top-15 right-9">
            <h2 className=" mx-20 pt-10 text-3xl">Choose the perfect design</h2>
            <p className="w-1/3 mx-20 mt-5">
              Create a beautiful blog that fits your style. Choose from a
              selection of easy-to-use templates – all with flexible layouts and
              hundreds of background images – or design something new.
            </p>
          </div>
        </div>
      </article>

      <article class="w-screen" >
        <div
          class="container"
          style={{
            background:
              "url(https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "cover",
            height: "400px",
            opacity: "1"
          }}
          className="w-screen"
        >
          <div className="absolute bottom-15 right-9">
          <h2 className=" text-3xl w-1/3 pt-7 mx-10 text-justify">Get a domain</h2>
          <p className="text-1xl  text-justify mt-5 w-1/3 ">
            Give your blog the perfect home. Get a blogspot.com domain or buy a
            custom domain with just a few clicks.
          </p>
        </div>
        </div>
      </article>
    </>
  );
}
export default Home;
