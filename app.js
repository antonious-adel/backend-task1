

const fs = require("fs")

const yargs = require("yargs")
const data10 = require ("./data10")

yargs.command ({
    command : "add" ,
    describe : "this is to add an item " , 
    builder : {
        fname : {
            describe : " this is first name " ,
            demandOption : true , 
            type  : "string"
        } , 
        lname : {
            describe : " this is last name " ,
            demandOption : false , 
            type  : "string"
        }
    } ,
    handler : (x)=> {
        data10.addPerson(x.id , x.fname , x.lname , x.city , x.age)
    }
})

// yargs.parse()

yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler : (x)=> {
    
       data10.deleteData(x.id)
    }
 })


 yargs.command ({
    command : "list",
    describe : "to list data",
    handler : () =>{
       data10.listData()
    }
 })

 yargs.parse()




