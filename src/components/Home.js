import React from "react";
// import "./home.css";
function Home() {
  return (
    <>
      <article className=" w-full" style={{
            marginBottom: "20px", 
            padding: "10px 20px", 
            border: "1px solid rgb(145, 145, 145)",


        }}>
        <div
          class="container"
          style={{
            background:
              "url(https://images.pexels.com/photos/2310604/pexels-photo-2310604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            backgroundSize: "cover",
            height: "500px",
            width: "100%"
          }}
        >
          <div className="text-center" >
            <h2 className=" text-3xl">Choose the perfect design</h2>
            <p className="w-1/2 text-justify mx-8">
              Create a beautiful blog that fits your style. Choose from a
              selection of easy-to-use templates – all with flexible layouts and
              hundreds of background images – or design something new.
            </p>
          </div>
        </div>
      </article>

      <article className="w-full" style={{
            marginBottom: "20px", 
            padding: "10px 20px", 
            border: "1px solid rgb(145, 145, 145)",
            marginRight: "10px"}}>
        <div
          class="container"
          style={{
            background:
              "url(https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "cover",
            height: "400px",
            width: "100%",
            opacity: "1"
          }}
        >
          <h2 className=" text-3xl ">Get a domain</h2>
          <p className="text-1xl mt-5 text-justify w-1/3 ">
            Give your blog the perfect home. Get a blogspot.com domain or buy a
            custom domain with just a few clicks.
          </p>
        </div>
      </article>
    </>
  );
}
export default Home;
