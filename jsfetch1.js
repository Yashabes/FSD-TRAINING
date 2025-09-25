const url ="https://dummyjson.com/users?limit=2";
const pr=fetch(url);
      pr.then(function(res){
        return res.json();
      })
      .then ((data)=>{
        console.log("data=", data);
      })
      .catch((err)=>{
        console.log('error:', err);
      })
      .finally(()=>{
        console.log('inside finally')
      })