class ReuseableLogicsService {

  generateUniqueId() {

    var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
   };
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

    //return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }
  getCurrentDateWithtime() {

    const currentDate = new Date();
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    const formattedDate = currentDate.toUTCString('en-US', options);
    return formattedDate;
  }
  generateRandomNumber() {
    return Math.floor(Math.random() * 10000)
  }

}
export const reuseableLogicsService = new ReuseableLogicsService()