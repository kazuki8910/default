async function callApi(){
    const res  = await fetch();
    const data = await res.json();
    console.log(data);
  }
  
  callApi();