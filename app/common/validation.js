module.exports = {
    isEmpty :(input)=>{
        if(input == null || input == undefined){
            return true;
        } 
        else if(typeof input == "string"){
            if (input.trim() == "") {
                return true;
            }
            return false;
        }
    }
}