instance=null;
class Printer
{
    constructor(printerName,PrinterColor)
    {
        if(instance==null)
        {
            this.printerName=printerName;
            this.PrinterColor=PrinterColor;
            instance=this;
        }
        else{
            return instance;
        }
        
    }
}

let printerOne= new Printer("HP","white");
let printerTwo = new Printer("HP","black");

console.log(printerOne);
console.log(printerTwo);