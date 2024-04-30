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
          <div className=" block" >
            <h2 className=" mx-8 my-4 text-3xl text-center ">Choose the perfect design</h2>
            <p className="text-center mx-8 ">
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
          <div className="block">
          <h2 className=" text-3xl text-center">Get a domain</h2>
          <p className="text-1xl  text-center mt-4 ">
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
