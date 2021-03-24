/*    const doGet = async (url) =>{
      
           
        let chamaFetch = await fetch(url)
          let json = await chamaFetch.json()
          json
        console.log(json)
        

        if(chamaFetch.ok == true) console.log("Oii")
        else console.log ("Mah")
      
  }


  doGet('https://backefront.com.br/api/users')  */



const paisona = (url) =>{


fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "038aadaf-287d-4f1c-8e86-c23ec6ec1f58",
  },

  body: JSON.stringify(
      customer={}
      ),
}) 
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })

}

paisona("https://backefront.com.br/api/users") 
  