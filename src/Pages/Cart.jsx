import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { X, Plus, Minus } from "lucide-react";
import EmptyCart from "../assets/EmptyCart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    getTotalCartItems,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 p-4">
        {getTotalCartItems() === 0 ? (
          <div className="flex items-center justify-center">
            <img src={EmptyCart} alt="Empty Cart" />
          </div>
        ) : (
          <div>
            {/* Header Row (Desktop only) */}
            <div className="hidden md:grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 font-semibold text-gray-700">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr className="hidden md:block bg-gray-300 border-0 h-[2px] my-2" />

            {all_product.map((e) => {
              if (cartItem && cartItem[e.id] && cartItem[e.id] > 0) {
                return (
                  <div key={e.id}>
                    {/* Mobile Card */}
                    <div className="md:hidden bg-white shadow rounded-xl p-4 mb-4 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={e.image}
                          className="h-20 w-20 rounded object-cover"
                          alt=""
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {e.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            Price: ${e.new_price}
                          </p>
                          <p className="text-sm text-gray-600">
                            Total: ${e.new_price * cartItem[e.id]}
                          </p>
                        </div>
                        <X
                          onClick={() => {
                            const currentQty = cartItem[e.id];
                            for (let i = 0; i < currentQty; i++) {
                              removeFromCart(e.id);
                            }
                          }}
                          className="cursor-pointer text-gray-500 hover:text-red-500 transition"
                        />
                      </div>
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 justify-center">
                        <button
                          onClick={() => removeFromCart(e.id)}
                          disabled={cartItem[e.id] <= 1}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium">
                          {cartItem[e.id]}
                        </span>
                        <button
                          onClick={() => addToCart(e.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Desktop Row */}
                    <div className="hidden md:grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 gap-2 text-gray-600 font-medium">
                      <img
                        src={e.image}
                        className="h-16 w-16 object-cover rounded"
                        alt=""
                      />
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(e.id)}
                          disabled={cartItem[e.id] <= 1}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center">
                          {cartItem[e.id]}
                        </span>
                        <button
                          onClick={() => addToCart(e.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p>${e.new_price * cartItem[e.id]}</p>
                      <X
                        onClick={() => {
                          const currentQty = cartItem[e.id];
                          for (let i = 0; i < currentQty; i++) {
                            removeFromCart(e.id);
                          }
                        }}
                        className="cursor-pointer hover:text-red-500 transition"
                      />
                    </div>
                    <hr className="hidden md:block bg-gray-300 border-0 h-[2px] my-2" />
                  </div>
                );
              }
              return null;
            })}

            {/* Cart Totals & Promo Code */}
            <div className="flex flex-col lg:flex-row my-12 gap-10 md:gap-32">
              {/* Totals */}
              <div className="flex-1 flex flex-col gap-4 bg-white shadow rounded-xl p-5">
                <h1 className="text-lg font-bold">Cart Totals</h1>
                <div>
                  <div className="flex justify-between py-2">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr className="bg-gray-300 border-0 h-[2px] my-2" />
                  <div className="flex justify-between py-2">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <hr className="bg-gray-300 border-0 h-[2px] my-2" />
                  <div className="flex justify-between text-xl font-semibold py-2">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                  </div>
                </div>
                <Link to="#">
                  <button className="w-full lg:w-64 h-14 bg-[#138695] text-white font-semibold text-lg rounded-xl">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>

              {/* Promo Code */}
              <div className="flex-1 w-full text-base font-semibold bg-white shadow rounded-xl p-5">
                <p className="text-gray-600 mb-2">
                  If you have a promo code, enter it here:
                </p>
                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 h-14 px-3 rounded bg-gray-100 focus:outline-none"
                  />
                  <button className="h-14 sm:w-32 px-4 py-1 bg-gray-800 text-white rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
