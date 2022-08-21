export type Error = {
    status:number;
    errorList:ErrorList[];
}

export type ErrorList = {
    fieldName:string;
    message:string;
}