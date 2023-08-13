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
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '45e729.myshopify.com',
      storefrontAccessToken: 'd5c44cc6cbab11eee04ef5cfb5d12d5a',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8530239389989',
        node: document.getElementById('product-component-1691967263712'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {}
},
      });
    });
  }
})();
/*]]>*/
</script>




      </script>

    </div>
  );
};

export default Support;
