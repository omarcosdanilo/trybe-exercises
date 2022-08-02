class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    const date = `${day}-${month}-${year}`;

    if (new Date(date).getDate() !== day) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    } else {
      this.day = day;
      this.month = month;
      this.year = year;
    };
  };

  getMonthName(month: number) {
    switch(month) {
      case 1: return 'Janeiro';
      case 2: return 'Fevereiro';
      case 3: return 'Março';
      case 4: return 'Abril';
      case 5: return 'Maio';
      case 6: return 'Junho';
      case 7: return 'Julho';
      case 8: return 'Agosto';
      case 9: return 'Setembro';
      case 10: return 'Outubro';
      case 11: return 'Novembro';
      case 12: return 'Dezembro';
    };
  };

  isLeapYear() {
    return this.year % 4 === 0;
  };

  compare(date: Data) {
    const { day, month, year} = date;
    const currentDate = `${this.day}-${this.month}-${this.year}`
    const informedDate = `${day}-${month}-${year}`;
    if (new Date(currentDate) >  new Date(informedDate)) return 1;
    if (new Date(currentDate) <  new Date(informedDate)) return -1;

    return 0;
  };
}