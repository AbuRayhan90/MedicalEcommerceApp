import React, { useContext } from "react";
import ButtonYello from "../Button/ButtonYello";
import Footer from "../Footer/Footer";
import InputField from "../InputField/InputField";
import OrderText from "./ProductText/OrderText";
import SubCriber from "../SubCriber/SubCriber";
import CartContext from "../../Context/cart/CartContext";
import Navbar from "../Header/Navbar/Navbar";
import { useHistory } from "react-router";
import CheckOutText from "./CheckOutText";
const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="container mx-auto md:pb-28 my-6 px-4 md:px-0">
        <div className="px-4 sm:px-0 font-semibold text-blue-800">
          <h3 className="md:text-5xl text-3xl  mb-4 ">Checkout</h3>
          <p className="text-sm text-gray-800 ">
            Returning customer?
            <span className="text-blue-800 cursor-pointer">
              Click here to login
            </span>
          </p>
          <p className="mt-2 mb-7 text-gray-800 text-sm">
            Have a coupon?{" "}
            <span className="text-blue-800 cursor-pointer">
              {" "}
              Click here to enter your code
            </span>
          </p>
        </div>
        <div className="md:flex gap-12  justify-between space-y-3">
          <div className="w-full border-gray-200 border-2 py-10 px-10">
            <form action="#" method="Payment">
              <div className="">
                <div className="flex space-x-6 justify-between">
                  <InputField
                    text="First name"
                    htmlFor="first-name"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                  />
                  <InputField
                    text=" Last name"
                    htmlFor="last-name"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                  />
                </div>
                <InputField
                  text="Email address"
                  htmlFor="email-address"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                />

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <InputField
                  text="Street address"
                  htmlFor="street-address"
                  name="street-address"
                  autoComplete="street-address"
                />
                <InputField text="City" htmlFor="city" name="city" id="city" />
                <InputField
                  text=" State / Province"
                  htmlFor="state"
                  name="state"
                  id="state"
                />
                <InputField
                  text="ZIP / Postal"
                  htmlFor="postal-code"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                />
              </div>
            </form>
          </div>

          <div className="h-full px-10 py-6 text-blue-800 border-2 border-yellow-500 ">
            <h1 className="text-blue-800 text-2xl font-semibold">Your order</h1>
            {cartItems.length === 0 ? (
              <div className="w-56">
                <h1 className="text-xl">You Have No item....</h1>
                <ButtonYello
                  text="Add To Cart"
                  clikHandle={() => history.push("./")}
                />
              </div>
            ) : (
              <div>
                <CheckOutText text="Product" priceText="Subtotal" />
                {cartItems.map((item) => (
                  <div>
                    <OrderText item={item} totalPrice={item.price} />
                  </div>
                ))}
                <CheckOutText
                  text="Total:"
                  priceText={totalPrice}
                  bold="font-bold"
                />
                <div className="my-4">
                  <h1>
                    <input className="mr-2" type="radio" />I have read and agree
                    to the website terms and conditions *
                  </h1>
                </div>
                <ButtonYello text="Place order" />
              </div>
            )}
          </div>
        </div>
      </div>
      <SubCriber />
      <Footer />
    </>
  );
};

export default CheckOut;
