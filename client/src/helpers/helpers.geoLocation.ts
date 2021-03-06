export const getStartLocationWithPermission = async (setState : React.Dispatch<any>) => {
  try {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position :any) => {
        setState({
          status: 200,
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      }, (error : any) => {
        console.log('error in geolocation', error)
        setState({status: 401})
      })
    } else {
      setState({status: 401})
    }    
  } catch (error) {
    console.log('error in outer geolocation', error)
  }
}
