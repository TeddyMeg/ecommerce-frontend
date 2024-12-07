interface CartSummaryProps {
  subtotal: number;
  onCheckout: () => void;
}

export function CartSummary({ subtotal, onCheckout }: CartSummaryProps) {
  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Cart Total</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span className="text-green-500">Free</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Process to checkout
      </button>
    </div>
  );
}