let militaryTime = (time)=>{

let _hr = (time[0]-'0')*10 + (time[1]-'0');
let min = (time[3]-'0')*10 + (time[4]-'0');
let sec = (time[6]-'0')*10 +(time[7]-'0');

if(time[8]=='P'){
    sec=sec+45;
    min=min+45+sec/60;
    sec=sec%60;
    _hr=_hr+min/60;
    min=min%60>>0;
    _hr=_hr%12;
    _hr=12+_hr>>0;
    console.log(_hr+":"+min+":"+sec);
}
else{
    sec=sec+45;
    min=min+45+sec/60;
    sec=sec%60;
    _hr=_hr+min/60;
    min=min%60>>0;
    _hr=_hr%12>>0;
    console.log(_hr+":"+min+":"+sec);

}

} 

let time = "01:01:00PM";
militaryTime(time)