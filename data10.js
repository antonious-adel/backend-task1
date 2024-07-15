const fs = require ("fs")

const addPerson = (id , fname , lname , city , age) => {
    const allData = loadinfo()

    const duplicatedData = allData.filter((obj) =>{
       return  obj.id === id 
    })

     if (duplicatedData.length == 0  ){

    allData.push({
      id : id,
      fname : fname,
      lname : lname,
      city : city,
      age : age
    })
    savealldata(allData)
   } else {
     console.log("ERROR DUPLICATED DATA")
   }
}


const deleteData  = (id) =>{
    const allData = loadinfo()

     const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
     })


     savealldata(dataTokeep)
    
 }

 const readData = (id) => {
    const allData = loadinfo()

    const itemNeeded = allData.find((obj) => {
       return  obj.id == id 
    })


    if (itemNeeded) {
      console.log(itemNeeded)
    }else {
      console.log("ID NEEDED NOT FOUND")
    }
}


const listData = () => {
    const  allData = loadinfo()

     allData.forEach((obj) => {
       console.log(obj.fname , obj.city)
     })

 }


const loadinfo = () => { try{
    const datajson = fs.readFileSync("data10.json").toString()
    return JSON.parse(datajson)
    } catch {return []}
    
}

const savealldata = (alldata) => {
    const savealldatajson = JSON.stringify(alldata)
    fs.writeFileSync("data10.json" , savealldatajson )
}

module.exports = {
    addPerson ,
    deleteData ,
    readData , 
    listData

}

