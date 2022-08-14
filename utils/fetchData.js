export const getFetchData=async(url)=>{
 
     const res= await fetch( `${process.env.URL_DEPLOY}${url}`);

     const data= await res.json();

     return data;

}

export const postFetchData=async(url,data)=>{
 
     const res= await fetch( `${process.env.URL_DEPLOY}${url}`);

     const response= await res.json();

     return response;

}