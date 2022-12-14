import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setISAdmin] = useState(false);
    const [adminLoader, setAdminLoader] = useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://server-xi-fawn.vercel.app/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setISAdmin(data.isAdmin)
                setAdminLoader(false)
            })
        }
    },[email])
    return [isAdmin, adminLoader]
}

export default useAdmin;