export default function convertStringToTime(time: string){

  // daniellirapinheiro225828
  // daniellira225828
  // daniellira225828

  const [hour, minutes ] = time.split(':').map(Number)
  const timeInMinutes = (hour * 60) + minutes

  return timeInMinutes
}