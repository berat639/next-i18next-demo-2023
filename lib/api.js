  export async function fetchAPI(url) {

  try {
   // debugger
    const res = await fetch(
      "https://testwebapi.fundprio.ai/"+url,
      {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Accept":"application/json, text/plain, /",
          "Accept-Encoding":"gzip, deflate, br",
          "Accept-Language":"tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
          "Host":"testwebapi.fundprio.ai",
          "Origin":"http://localhost:3000",
          "Referer":"http://localhost:3000/"
        },
      
      }
    ); 
   // debugger
    const data = await res.json(); 
    return data.data;
  } catch (error) {
    console.log(error)
  }
}

 