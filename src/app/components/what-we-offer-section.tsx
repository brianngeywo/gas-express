const WhatWeOfferSection = () => {
return  <section
className="h-120 bg-blend-darken bg-no-repeat bg-cover bg-center"
style={{ backgroundImage: "url('/images/pika.jpg')" }}
>
<div className="container w-full h-full bg-black opacity-75">
  <div className="flex flex-col justify-items-center items-center ">
    <div className="flex flex-row justify-evenly mt-16">
      <div className="h-48 w-48 bg-white flex flex-col justify-center mx-2">
        <div className="bg-amber-950 rounded-full w-24 h-24 self-center">
          <div className="containerself-center text-white text-center">
            icon{" "}
          </div>
        </div>
        <div className="m-2 text-amber-950 font-bold text-center">
          Drivers
        </div>
      </div>
      <div className="h-48 w-48 bg-white flex flex-col justify-center mx-2">
        <div className="bg-amber-950 rounded-full w-24 h-24 self-center">
          <div className="containerself-center text-white text-center">
            icon{" "}
          </div>
        </div>
        <div className="m-2 text-amber-950 font-bold text-center">
          Customers
        </div>
      </div>
      <div className="h-48 w-48 bg-white flex flex-col justify-center mx-2">
        <div className="bg-amber-950 rounded-full w-24 h-24 self-center">
          <div className="containerself-center text-white text-center">
            icon{" "}
          </div>
        </div>
        <div className="m-2 text-amber-950 font-bold text-center">
          Suppliers
        </div>
      </div>
    </div>
    <div className="text-white justify-self-center mt-12 mx-60 text-center">
      If you are an Android or iOS mobile device user and looking for a
      gas delivery service, BEBA GAS is the best choice for you. We
      designed a simple and convenient to use mobile gas delivery app
      where you can place your order with just few steps.
    </div>
  </div>
</div>
</section>;
}

export default WhatWeOfferSection