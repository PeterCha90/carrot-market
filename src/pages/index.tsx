import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div
      className="
       bg-slate-400 py-10 px-5 
       flex flex-col space-y-5"
    >
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2
              odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li
              className="bg-red-500 py-2 empty:hidden"
              key={i}
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3 
          text-center rounded-xl w-1/2 mx-auto
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500 focus:text-red-500
        "
        >
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-small text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400" />
            <div className="flex flex-col items-center">
              <span className="text-small text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative -mt-16 -mb-5 flex flex-col items-center mt-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-2xl min-h-screen">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.8</span>
            <span className="shadow-xl p-2 rounded-md">🧡</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium  text-xl">Suwon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button
                className="w-5 h-5 rounded-full bg-yellow-500 
                focus:ring-2 ring-offset-2 ring-yellow-500 transition"
              />
              <button
                className="w-5 h-5 rounded-full bg-indigo-500
              focus:ring-2 ring-offset-2 ring-indigo-500 transition"
              />
              <button
                className="w-5 h-5 rounded-full bg-teal-500
              focus:ring-2 ring-offset-2 ring-teal-500 transition"
              />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center w-8 text-xl text-gray-500 aspect-square">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-xs text-center text-white rounded-lg">
              Add to cart{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
    </div>
  )
}

export default Home