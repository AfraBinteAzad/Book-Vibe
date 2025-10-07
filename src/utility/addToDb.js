import { toast } from "react-toastify";

const getstoredbook=()=>{
   const storedbooks=localStorage.getItem("readList");
   if (storedbooks){
    const bookdata=JSON.parse(storedbooks)
    return bookdata
   }
   else {
    return [];
   }
}

const addtostoredDB=(id)=>{
    const data=getstoredbook();
    if(data.includes(id)){
        toast("This book already exists")
    }
    else{
        data.push(id);
        const bookd=JSON.stringify(data)
        localStorage.setItem("readList",bookd)
         
    }

}

export{addtostoredDB}