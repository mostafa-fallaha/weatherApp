export class ConvertingServices {
  unixEpoch: number;

  constructor(unixEpoch: number) {
    this.unixEpoch = unixEpoch;
  }

  UnixToHours(unixTime: number): string {
    const date = new Date(unixTime);
    let h = date.getHours();
    h = h > 12 ? h - 12 : h;
    const m = date.getMinutes();
    const str = m < 10 ? h + ":" + "0" + m : h + ":" + m;
    const formattedDateTime = str;
    return formattedDateTime;
  }

  DateToUnix(): number {
    const date = new Date();
    const str: string = (date.getTime() / 1000).toString();
    const currDate = parseInt(str);
    return currDate;
  }

  UnixToDayName(unixTime: number) {
    return unixTime == 0
      ? "Sunday"
      : unixTime == 1
      ? "Monday"
      : unixTime == 2
      ? "Tuesday"
      : unixTime == 3
      ? "Wednesday"
      : unixTime == 4
      ? "Thursday"
      : unixTime == 5
      ? "Friday"
      : "Saturday";
  }
}
