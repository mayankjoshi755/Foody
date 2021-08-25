import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title:string="Select City:";
  Keywords: string[] = [];
  InputKeyword: string = "";
  DeleteKeyword: string = "";
  IsInitializationDone: boolean = false;
  ChangeFromKeyword: string = "";
  ChangeToKeyword: string = "";


  LstCities:string[]=[];
  selectedCity:string="--Select--";   
  dataLucknow: Array<any>=[];
  dataNoida: Array<any>=[];
  dataDelhi: Array<any>=[];
  dataKolkata: Array<any>=[];
  dataChandigarh: Array<any>=[];
  constructor() {

   }

  ngOnInit() 
  {
    this.LstCities.push("Delhi");
    this.LstCities.push("Noida");
    this.LstCities.push("Lucknow");
  

    this.LoadLucknowRestaurant();
    this.LoadDelhiRestaurant();
    this.LoadNoidaRestaurant();


  }

  LoadLucknowRestaurant(){
      this.dataLucknow = [{SerialNumber : '1', RestaurantName : 'Oudhyana – A Royal Dining Experience', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Vivanta by Taj – Gomti Nagar, Lucknow'},
      {SerialNumber : '2', RestaurantName : 'Falaknuma Rooftop Restaurant – A Marvelous Place', SpecialFor: 'North Indian and Lucknowi cuisines',
      Timings: '1:00 PM to 3:00 PM, and 8:00 PM to 11:30 PM', Address : 'Hotel Clarks Avadh, 8, M.G. Marg, Hazratganj, Lucknow'},
      {SerialNumber : '3', RestaurantName : 'The Urban Terrace – For An Elegant Ambiance', SpecialFor: 'Continental, Mughlai, and Italian delicacies',
      Timings: '11:00 AM to 11:00 PM', Address : 'CP-73, Viraj Khand, Gomti Nagar, Opposite Sahara Hospital Gate No. 1, Lucknow'},
      {SerialNumber : '4', RestaurantName : 'Royal Sky – Scrumptious Mughlai Cuisine', SpecialFor: 'Continental, Indian, Chinese, and Mughlai food',
      Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : '1st Floor, Opposite Halwasiya Market, Hazratganj, Lucknow'},
      {SerialNumber : '5', RestaurantName : 'The Mughal’s Dastarkhwan – Get Authentic Awadhi Food', SpecialFor: 'North Indian, Mughlai, Chinese, and Lucknowi cuisines',
      Timings: '12:30 PM to 10:30 PM', Address : '29, BN Road, Near Royal Hotel Crossing, Lalbagh, Lucknow'},
      {SerialNumber : '6', RestaurantName : 'Kava Restaurant – For A Splendid Experience', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '11:00 AM to 11:00 PM', Address : 'Gate 2, Opposite Indra Gandhi Prathishthan, Vibhuti Khand, Gomti Nagar, Lucknow'},
      {SerialNumber : '7', RestaurantName : 'Moti Mahal Restaurant – For Continental Cuisines', SpecialFor: 'North and South Indian, Continental, and Chinese food',
      Timings: '11:00 AM to 11:00 PM', Address : 'No.75, Mahatma Gandhi Marg, Next to Central Bank of India, Hazratganj, Lucknow'},
      {SerialNumber : '8', RestaurantName : 'Sakhawat Restaurant – A Budget Destination', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '5:00 PM to 11:00 PM except Tuesdays', Address : 'Qaiser Bagh Avenue, Near Oudh Gymkhana Club, Lucknow'},
      {SerialNumber : '9', RestaurantName : 'Green Restaurant – Taste The Local Food', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Vivek Khand, Near Neelkanth Sweets, Gomti Nagar, Lucknow'},
      {SerialNumber : '10', RestaurantName : 'Altitude – Get Impeccable City Views', SpecialFor: ' European, North Indian, and Continental delicacies',
      Timings: '12:00 PM to 11:00 PM', Address : ' Radisson Lucknow City Center, 24 Cantonment Road, Aminabad, Lucknow'}]
        
  }
  LoadDelhiRestaurant(){


    this.dataDelhi = [{SerialNumber : '1', RestaurantName : 'Le Cirque, The Leela Palace', Timings: '7 PM - 12 AM',
    CostForTwo: 'Rs.5,000', Address : ' Le Cirque - Diplomatic Enclave, Chanakyapuri'},
    {SerialNumber : '2', RestaurantName : 'Orient Express, Taj Palace Hotel', Timings: '6:30 - 11:30 PM',
    CostForTwo: 'Rs.8,000', Address : 'Orient Express - Taj Palace, 2, Sardar Patel Marg, Diplomatic Enclave'},
    {SerialNumber : '3', RestaurantName : 'Ottimo At West View, ITC Maurya', Timings: '7 - 11:45 PM',
    CostForTwo: 'Rs.6,600', Address : 'Ottimo At West View - ITC Maurya Diplomatic Enclave, Sardar Patel Marg'},
    {SerialNumber : '4', RestaurantName : 'MEGU, The Leela Palace', Timings: '12:30 - 2:30 PM & 7 PM - 12 Midnight',
    CostForTwo: 'Rs.5,500', Address : 'MEGU - The Leela Palace, Diplomatic Enclave, Chanakyapuri'},
    {SerialNumber : '5', RestaurantName : 'Bukhara, ITC Maurya', Timings: '12:30 - 2:45 PM & 7 - 11:45 PM',
    CostForTwo: 'Rs.6,500', Address : 'Bukhara - ITC Maurya, Sardar Patel Marg, Akhaura Block, Diplomatic Enclave, Chanakyapuri'},
    {SerialNumber : '6', RestaurantName : 'Indian Accent ', Timings: '12 Noon - 2:30 PM & 7 - 10:30 PM',
    CostForTwo: 'Rs.5,000', Address : ' Indian Accent - The Lodhi, Lodhi Road'},
    {SerialNumber : '7', RestaurantName : 'Kheer, Roseate House', Timings: '7 - 11:30 PM',
    CostForTwo: 'Rs.4,500', Address : 'Kheer - Roseate House, Asset 10, Hospitality District, Aerocity'},
    {SerialNumber : '8', RestaurantName : 'Sevilla - The Claridges ', Timings: '7 - 11:45 PM ',
    CostForTwo: 'Rs.4,500', Address : 'Sevilla - The Claridges,12, Dr A.P.J. Abdul Kalam Road, Aurangzeb Road'},
    {SerialNumber : '9', RestaurantName : 'Tian - Asian Cuisine Studio, ITC Maurya ', Timings: '7 - 11:30 PM',
    CostForTwo: 'Rs.5,000', Address : 'Tian - Asian Cuisine Studio - ITC Maurya, Chanakyapuri'},
    {SerialNumber : '10', RestaurantName : 'Varq - The Taj Mahal Hotel', Timings: '7 - 11:45 PM ',
    CostForTwo: 'Rs.4,500', Address : 'Varq - The Taj Mahal Hotel, Mansingh Road'}]
    
  
  }
  LoadNoidaRestaurant(){
      
    this.dataNoida = [{SerialNumber : '1', RestaurantName : 'Mosaic – Crowne Plaza Greater Noida', SpecialFor: 'Chinese, Continental, North Indian',
    CostForTwo: 'Rs.3400', Address : 'Greater Noida, Noida'},
    {SerialNumber : '2', RestaurantName : 'Made in India Radisson Blu', SpecialFor: 'North Indian, Lucknowi',
    CostForTwo: 'Rs.4000', Address : 'Sector 18, Noida'},
    {SerialNumber : '3', RestaurantName : 'SodaBottleOpenerWala', SpecialFor: 'Parsi, Iranian',
    CostForTwo: 'Rs.1450', Address : 'Sector 18, Noida'},
    {SerialNumber : '4', RestaurantName : 'Flluid', SpecialFor: 'Continental, North Indian, Mexican',
    CostForTwo: 'Rs.2250', Address : 'Mosaic Hotels, C 1, Sector 18, Noida'},
    {SerialNumber : '5', RestaurantName : 'Bohemia', SpecialFor: 'Mediterranean, Italian',
    CostForTwo: 'Rs.850', Address : '250, First Floor, Garden Galleria, Sector 38, Noida'},
    {SerialNumber : '6', RestaurantName : 'Southern Treat ', SpecialFor: 'South Indian',
    CostForTwo: 'Rs.350', Address : 'Sector 50, Noida'},
    {SerialNumber : '7', RestaurantName : 'Barrack 62', SpecialFor: 'North Indian, Continental, Italian, Fast Food',
    CostForTwo: 'Rs.900', Address : 'Sector 62, Noida'},
    {SerialNumber : '8', RestaurantName : 'Imperfecto', SpecialFor: 'Finger Food, Italian, North Indian',
    CostForTwo: 'Rs.1850', Address : '341, Gardens Galleria, Sector 38, Noida'},
    {SerialNumber : '9', RestaurantName : 'Theos', SpecialFor: 'Mughlai and Lucknowi cuisines',
    CostForTwo: 'Rs.900', Address : '3rd Floor, DLF Mall Of India, Sector 18, Noida'},
    {SerialNumber : '10', RestaurantName : 'Cafe Delhi Heights', SpecialFor: 'Cafe, Desserts',
    CostForTwo: 'Rs.1950', Address : '3rd Floor, DLF Mall of India, Sector 18, Noida'}]

  }
}
