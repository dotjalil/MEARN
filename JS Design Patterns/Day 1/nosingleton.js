class Printer
{
    constructor(printerName,PrinterColor)
    {
        this.printerName=printerName;
        this.PrinterColor=PrinterColor;
    }
}

let printerOne= new Printer("HP","white");
let printerTwo = new Printer("HP","black");

console.log(printerOne);
console.log(printerTwo);