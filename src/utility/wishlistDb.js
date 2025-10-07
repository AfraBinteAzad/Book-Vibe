import { toast } from "react-toastify";

const getstoredbook=()=>{
   const storedbooks=localStorage.getItem("wishList");
   if (storedbooks){
    const bookdata=JSON.parse(storedbooks)
    return bookdata
   }
   else {
    return [];
   }
}

const addtowishdDB=(id)=>{
    const data=getstoredbook();
    if(data.includes(id)){
        toast("This book already exists")
    }
    else{
        data.push(id);
        const bookd=JSON.stringify(data)
        localStorage.setItem("wishList",bookd)
         
    }

}

export{addtowishdDB}