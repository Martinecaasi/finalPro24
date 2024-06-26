export type user={
          costumerNum:number,
          user_id:number,
          user_lstName:string,
          user_firstName:string,
          user_address:Address,
          user_email:string,
          user_password:string,
          user_birthdate:Date,
          user_image:string,
          user_phoneNumber:string,
          user_allergies:string,
          user_kosher:boolean,
          user_reviews:String,
          user_eventCounter:number,
          user_cancellationCounter:number,
          user_hostingCounter:number
}

export type Address={
        city:string,
        street_Name:string,
        street_Num:number,
        appartment_Num:number,
        appartment_Floor:number,  
}