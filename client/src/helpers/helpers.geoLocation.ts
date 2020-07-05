const permissionGranted = (position :any) => {
  console.log('position', position)
  const ret = {
    lat: position.coords.latitude,
    lon: position.coords.longitude
  }
  console.log('ret', ret)
  return ret
}

const permissionBlocked = (error : any) => {
  console.log('errorB', error)
  return false
}

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
        console.log('errorB', error)
        setState({status: 401})
      })
    } else {
      setState({status: 401})
    }    
  } catch (error) {
    console.log('errorP', error)
  }
}
