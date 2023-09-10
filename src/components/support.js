import React from "react";
import "../tailwind.css";

const Support = ({ text, title }) => {
  return (
    <div className="flex flex-col justify-center" id="support">
      <h1 className="font-heading text-2xl font-bold">{title}</h1>
      <p>{text}</p>

      {/* Product Section*/}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        {/* Product 1 */}
        <div className="flex items-center lg:flex-col mx-auto justify-center my-12 flex-col space-y-4">
          {/* product picture */}
          <div className="md:basis-1/3 basis-full md:mx-12 mx-0">
            <img
              className="rounded-lg drop-shadow-lg h-48"
              src="https://images-na.ssl-images-amazon.com/images/I/81VaDF99dnL._SL1500_.jpg"
              alt="Product"
            />
          </div>
          {/* selection && buy button */}
          {/* <div className="lg:basis-1/3"> */}
          {/* <div className="flex items-center mt-4 space-x-4 justify-center text-black"> */}
          <div className="order-2 flex items-center mt-4 space-x-4 justify-center text-black">
            <select className="ml-4">
              <option value="1">1 Pack</option>
              <option value="2">2 Pack</option>
              <option value="3">3 Pack</option>
            </select>
          </div>
          <div className="drop-shadow-lg order-3">
            <button className="bg-darkPink text-white rounded px-4 py-2">
              Add to Cart
            </button>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* Product 2 */}
        <div className="flex items-center lg:flex-col mx-auto justify-center my-12 flex-col space-y-4">
          {/* product picture */}
          <div className="md:basis-1/3 basis-full md:mx-12 mx-0">
            <img
              className="rounded-lg drop-shadow-lg h-48"
              src="https://i5.walmartimages.com/asr/edc8c9a5-9d42-4c81-b80f-a90e1cc57ed7_1.7e2812f9592cfd1449a2d44376fc6ea5.jpeg"
              alt="Product"
            />
          </div>
          {/* selection && buy button */}
          {/* <div className="lg:basis-1/3"> */}
          {/* <div className="flex items-center mt-4 space-x-4 justify-center text-black"> */}
            <div className="order-2 flex items-center mt-4 space-x-4 justify-center text-black">
              <select className="ml-4">
                <option value="1">1 Pack</option>
                <option value="2">2 Pack</option>
                <option value="3">3 Pack</option>
              </select>
            </div>
            <div className="drop-shadow-lg order-3">
              <button className="bg-darkPink text-white rounded px-4 py-2">
              Add to Cart
              </button>
            </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* Product 3 */}
        <div className="flex items-center lg:flex-col mx-auto justify-center my-12 flex-col space-y-4">
          {/* product picture */}
          <div className="md:basis-1/3 basis-full md:mx-12 mx-0">
            <img
              className="rounded-lg drop-shadow-lg h-48"
              src="https://smallysbiltong.com/wp-content/uploads/2020/12/original-large-lean-1024x1024.jpg"
              alt="Product"
            />
          </div>
          {/* selection && buy button */}
          {/* <div className="lg:basis-1/3"> */}
          {/* <div className="flex items-center mt-4 space-x-4 justify-center text-black"> */}
            <div className="order-2 flex items-center mt-4 space-x-4 justify-center text-black">
              <select className="ml-4">
                <option value="1">1 Pack</option>
                <option value="2">2 Pack</option>
                <option value="3">3 Pack</option>
              </select>
            </div>
            <div className="drop-shadow-lg order-3">
              <button className="bg-darkPink text-white rounded px-4 py-2">
              Add to Cart
              </button>
            </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* Product 4 */}
        <div className="flex items-center lg:flex-col mx-auto justify-center my-12 flex-col space-y-4">
          {/* product picture */}
          <div className="md:basis-1/3 basis-full md:mx-12 mx-0">
            <img
              className="rounded-lg drop-shadow-lg h-48"
              src="https://i5.walmartimages.com/asr/edc8c9a5-9d42-4c81-b80f-a90e1cc57ed7_1.7e2812f9592cfd1449a2d44376fc6ea5.jpeg"
              alt="Product"
            />
          </div>
          {/* selection && buy button */}
          {/* <div className="lg:basis-1/3"> */}
          {/* <div className="flex items-center mt-4 space-x-4 justify-center text-black"> */}
            <div className="order-2 flex items-center mt-4 space-x-4 justify-center text-black">
              <select className="ml-4">
                <option value="1">1 Pack</option>
                <option value="2">2 Pack</option>
                <option value="3">3 Pack</option>
              </select>
            </div>
            <div className="drop-shadow-lg order-3">
              <button className="bg-darkPink text-white rounded px-4 py-2">
              Add to Cart
              </button>
            </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>

      {/* Shopify Buy Button */}
      <div id='product-component-1691967263712'></div>
      <script type="text/javascript">
        {/* ... Shopify Buy Button script ... */}
        <div id='product-component-1691967263712'></div>
<script type="text/javascript">

</script>




      </script>

    </div>
  );
};

export default Support;
