interface CartProps {
  isOpen: boolean;
  toggleCart: () => void;
}
const CartModal = ({ isOpen, toggleCart }: CartProps) => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleCart}
        ></div>
      )}

      {/* Cart Modal */}
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-xl z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={toggleCart}
        >
          ✕
        </button>
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="flex-grow overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center mb-4 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-gray-900 font-semibold">${item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Cart is empty</p>
            )}
          </div>
          {cartItems.length > 0 && (
            <>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button className="mt-4 w-full bg-black text-white py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
