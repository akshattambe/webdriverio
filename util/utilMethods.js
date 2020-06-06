class GetTodaysDate{
    
    getTodaysDateInFormat(){
        const dt = new Date();

        var dd = dt.getDate();    
        var mm = dt.getMonth()+1; 
        var yyyy = dt.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 
        
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        var today = yyyy+'-'+mm+'-'+dd;
        console.log(today);
        return today;
    }
}

module.exports =  GetTodaysDate;