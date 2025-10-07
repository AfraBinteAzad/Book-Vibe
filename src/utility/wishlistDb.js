import { toast } from "react-toastify";

const getstoredbookwish=()=>{
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
    const data=getstoredbookwish();
    if(data.includes(id)){
        toast("This book already exists")
    }
    else{
        data.push(id);
        const bookd=JSON.stringify(data)
        localStorage.setItem("wishList",bookd)
        toast("This book has been added")  
    }

}

export{addtowishdDB,getstoredbookwish}