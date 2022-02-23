export interface schedule{

    
    flightNumber:number;
    airline:string;
    fromPlace:string;
    toPlace:string;
    startDateTime:Date;
    endDateTime:Date;
    instrumentUsed:string;
    businessClassSeats:number;
    nonBusinessClassSeats:number;
    ticketCost:number;
    rows:number;
    mealsType:string;

}