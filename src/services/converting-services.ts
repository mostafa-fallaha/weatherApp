export class ConvertingServices {
  unixEpoch: number;

  constructor(unixEpoch: number) {
    this.unixEpoch = unixEpoch;
  }

  UnixToDate(unixTime: number): string {
    const date = new Date(0);
    date.setUTCSeconds(unixTime);

    // Use toISOString to get a standardized string representation
    const isoString = date.toISOString();

    // Extract the date and time components
    const [datePart, timePart] = isoString.split("T");
    const formattedDateTime = `${datePart} ${timePart.slice(0, 8)}`;

    return formattedDateTime;
  }

  DateToUnix(): number {
    const date = new Date();
    const str: string = (date.getTime() / 1000).toString();
    const currDate = parseInt(str);
    return currDate;
  }
}
