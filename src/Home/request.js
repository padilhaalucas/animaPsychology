import axios from 'axios';

export default appointmentPostRequest = (data) => {
  console.log('entrei no request')

  return new Promise((resolve, reject) => {

    const appointmentObj = {
      client_name: data[0],
      phone: data[1],
      email: data[2],
      date: data[3],
      subject: data[4],
    }

    var appointmentRequest = {
      method: 'POST',
      url: 'http://localhost:8005/appointment/',
      json: true,
      data: appointmentObj,
      dataType: 'json',
      contentType: 'application/json'
    };
  
    axios(appointmentRequest)

      .then((res) => {
        localStorage.removeItem('allAppointments');
        localStorage.setItem('allAppointments', JSON.stringify(res.data));
        resolve(res);
      })

      .catch((error) => {
        localStorage.removeItem('allAppointments');
        reject(error);
      }),
  })
}