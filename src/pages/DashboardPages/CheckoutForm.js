import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = ({ booking }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [procesing, setProcesing] = useState(false);
  const [transectionId, setTransectionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { _id, productPrice: price, name, email } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    setSuccess("");
    setProcesing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      setError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transectionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("http://localhost:8000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setSuccess("Thanks for your payment!");
            setTransectionId(paymentIntent.id);
          }
        });
    }
    setProcesing(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#FFFFFF",
              "::placeholder": {
                color: "#FFFFFF",
              },
            },
            invalid: {
              color: "#FFFFFF",
            },
          },
        }}
      />
      <button
        className="btn btn-outline btn-success btn-sm mt-5"
        type="submit"
        disabled={!stripe || !clientSecret || procesing}
      >
        Pay
      </button>
      <p className="text-error mt-3">{error}</p>
      {success && (
        <>
          <p className="text-success">{success}</p>
          <p>
            Your transection id is{" "}
            <span className="text-success">{transectionId}</span>
          </p>
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
