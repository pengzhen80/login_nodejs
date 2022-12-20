import axios from 'axios';

const api_url_local_base = 'http://localhost:4000/';
const api_url_login = api_url_local_base+'login';
const api_url_register = api_url_local_base+'register';

//models
const api_options = {
    'login':api_url_login,
    'register':api_url_register,
};

// async function Api_cloud_ask(option='Login',params={}){
//     if(!Object.keys(api_options).includes(option))
//     {
//         console.log('no such option');
//         return {'result':'no such option'};
//     }
//     var res = await axios.post(api_options[option], params);
//     console.log(res);
//     if(option == 'Login')
//     {
//       ApiCloud_StaticParams_mxid = res.data['mxid'];
//       Api_cloud_ask_activityID();
//     }
//     return res.data;
// };

// function Api_cloud_ask_activityID()
// {
//   var res =  axios.post(api_options['readActivityId'], {'mxid':ApiCloud_StaticParams_mxid}).
//   then((res) => {
//     for(var i=0;i<res.data.length;i++)
//     {
//       var acvitity = res.data[i];
//       var activity_id = acvitity['activity_id'];
//       var activity_name = acvitity['activity_name'];
//       var release_date = acvitity['release_date'];
//       var release_time = acvitity['release_time'];
//       //wait to response
//       const getData = async () => {
//         const res = await Api_cloud_ask_activity(activity_id,activity_name,release_date,release_time)
//         // console.log(res);
//         if(res)
//         {
//           if(res['data'].length > 0 )
//           {
//             ApiCloud_StaticParams_acvitity.push(res.data[0]);
//             // console.log(ApiCloud_StaticParams_acvitity);
//           }
//         }
//       };
//       getData();
//     }
//     // ApiCloud_StaticParams_acvitityID = res.data
//   });
// }

// async function Api_cloud_ask_activity(activity_id,activity_name,release_date,release_time)
// {
//   var params = {
//     'mxid':ApiCloud_StaticParams_mxid,
//     "activity_id": activity_id,
//     "activity_name": activity_name,
//     "release_date": release_date,
//     "release_time": release_time
//   }
//   var res =  await axios.post(api_options['readActivity'],params);
//   // console.log(res);
//   return res;
// }

// export default Api_cloud_ask;