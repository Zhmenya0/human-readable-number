// module.exports = function toReadable (number) {
//     let dg = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     let tw = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     let n = number+''
//     let ost = 0
//     let hun = 0
//     let ten = 0
//     let itog = ''
//     if (number==0){
//         return 'zero'
//     }
//     if (n.length==3){
//         ost=number%100
//         hun=(number-ost)/100
//         itog=itog+dg[hun]+' hundred'
//         n = ost+''
//     } if (n.length==2){
//         ost=+n%10
//         ten=(n-ost)/10
//         if (ten==1){
//             itog=itog+' '+tn[ten]
//             return itog.trim()
//         } else {
//             itog=itog+' '+tw[ten]
//             n = ost+''
//         }
//     }
//         if (n.length==1){
//             itog=itog+' '+dg[+n]
//         }
//     return itog.trim()
//     }

module.exports = function toReadable (number) {

    let dg = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tw = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let th = 'hundred';
    let result ='';
    let strNumber = number+'';
    let hunreds = 0;
    let ostatOk = 0;
    if(number==0){
        return 'zero';
    }
    if(strNumber.length==3){
        ostatOk=number%100;
        hunreds = (number - ostatOk)/100;
        result+=dg[hunreds]+' '+ th;
        strNumber = ostatOk+'';
    } 
    if(strNumber.length==2){
        ostatOk=+strNumber%10;
        let tens = (strNumber-ostatOk)/10;
        if(tens ==1){
            result += ' '+tn[ostatOk];
            return result.trim();
        }else{
            result += ' '+tw[tens];
            strNumber = ostatOk+'';
        }
    }
    if(strNumber.length==1){
        result += ' '+dg[+strNumber];

    } 
    return result.trim();
};
