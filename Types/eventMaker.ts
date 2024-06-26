export type Event_Maker={
          event_hostLName:string,
          event_hostFName:string,
          event_date:Date,
          event_time:string,
          event_kosher:boolean,
          event_foodType:FoodType,
          event_location:string,
          event_price:number,
          event_warning:string
}

export type FoodType={
          italian:string,
          american:string,
          thai:string
}