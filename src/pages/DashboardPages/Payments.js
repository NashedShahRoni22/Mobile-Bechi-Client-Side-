import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import paymentsImg from "../../images/paymentsImg.png" 
import Spinner from "../../components/Spinner";

const Payments = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { productPrice, productName } = booking;
  const stripePromise = loadStripe(process.env.REACT_APP_SK);
  if(navigation.state === "loading"){
    return <Spinner></Spinner>
  }
  return (
    <section className="md:flex">
      <div className="md:w-1/2">
        <h1 className="text-2xl my-5">
          Make a payment for{" "}
          <span className="text-success ">{productName}</span>
        </h1>
        <h2 className="text-xl">
          Please pay <span className="text-success">{productPrice}</span> BDT
        </h2>
        <div className="my-10 p-5 border border-success rounded-xl">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking}></CheckoutForm>
          </Elements>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={paymentsImg} alt="" />
      </div>
    </section>
  );
};

export default Payments;
