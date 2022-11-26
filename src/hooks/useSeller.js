import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoader, setSellerLoader] = useState(true);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:8000/user/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setSellerLoader(false)
            })
        }
    },[email])
    return [isSeller, sellerLoader]
}

export default useSeller;