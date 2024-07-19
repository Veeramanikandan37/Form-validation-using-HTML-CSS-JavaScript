function validation()
{
    var fn = document.validate.fname.value;
    var ln = document.validate.lname.value;
    var city = document.validate.city.value;
    var mobile_num = document.validate.phone_num.value;
    var address = document.validate.address.value;
    if((fn==null||fn=="")||(ln==null||ln=="")||(city==null||city=="")||
        (mobile_num==null||mobile_num=="")||(address==null||address==""))
    {
        alert("Fill the required details");
        return false;
    }
    else if(mobile_num.length!=10)
    {
        alert("Mobile number is invalid");
        return false;
    }
    else
    {
        alert("Form submitted Successfully");
        return true;
    }
}