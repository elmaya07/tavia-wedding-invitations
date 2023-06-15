import {REQ_START,REQ_SUCCESS,REQ_FAILED,LOGIN_SUCCESS,LOGIN_FAILED,REG_SUCCESS,REG_FAILED} from '../../redux/types';
import axios from 'axios';

const url = 'http://shop.simpus-web.my.id/public/';
export const logiProccess = (data)=>{

	return dispatch=>{
		dispatch({type:'REQ_START'})
		axios({
	      method: "post",
	      url: url+'api/login',
	      data: new URLSearchParams({
	        email: data.email,
	        password: data.password
	      }),
	      headers: { "Content-Type": "application/x-www-form-urlencoded" },
	    })
	      .then(function (response) {	        
	        console.log(response);
	        if (response.status==200) {
	        	if(response.data.code==200){
	        			let d ={
			        		user:response.data.user,
			        		token:response.data.access_token,
			        		expires:response.data.expires_in
			        	};
			        	dispatch({type:LOGIN_SUCCESS,payload:d});	
	        	}else{
	        		dispatch({type:LOGIN_FAILED,payload:{
	        			msg:`${response.data.message}, ${response.data.urlActivation} `
	        		}})
	        	}       
	        }        
	      })
	      .catch(function (response) {            
	        dispatch({type:LOGIN_FAILED,payload:{
	        			msg:'Unauthorized'
	        		}})
	        console.log(response.data);
	      });
	}
}


export const setLogout = (token)=>{
	
	return dispatch =>{		
		axios({
	      method: "post",
	      url: url+'api/logout',
	      headers: { "Authorization": "bearer "+token }
	    }).then(res=>{		
            console.log(res.data)	
			dispatch({type:'SET_LOGOUT'})
		}).catch(err=>{
			console.log(err)
		})
	}
}

export const regProccess = (data)=>{
	return dispatch=>{
		axios({
	      method: "post",
	      url: url+'api/register',
	      data: new URLSearchParams({
		        nama:data.nama,
				email:data.email,
				password:data.password,
				nomor_telepon:data.nomor_telepon,
				nama_laki_laki:data.nama_laki_laki,
				nama_perempuan:data.nama_perempuan
	      }),
	      headers: { "Content-Type": "application/x-www-form-urlencoded" },
	    })
	      .then(function (response) {
	        //handle success
	        console.log(response);
	        if (response.status==200) {
	        	if(response.data.code==200){
	        		dispatch({type:REG_SUCCESS,payload:{
	        			msg:response.data.message,
	        		}})	        		
	        	}else{
	        		dispatch({type:REG_FAILED,payload:{
	        			msg:`${response.data.message}`
	        		}})
	        	} 
	        }else{
	        	dispatch({type:REG_FAILED,payload:{
        			msg:`${response.data.message}`
        		}})
	        }        
	      })
	      .catch(function (response) {
	        //handle error
	        console.log(response.response);
	        dispatch({type:REG_FAILED,payload:{
        			msg:`${JSON.stringify(response.response.data)}`
        		}})
	      });
	}
}

export const gantiPasswordActions  = (email)=>{	
	console.log(email)
	return dispatch =>{
		axios({
	      method: "post",
	      url: url+'forgot-password',
	      data:new URLSearchParams({
	      	email:email
	      }),	     
	      headers: { "Content-Type": "application/x-www-form-urlencoded" },
	    }).then(res=>{			
			if(res.data.code==200){
				dispatch({type:'REQ_GANTI_PASSWORD_SUCCESS',payload:{
					msg:res.data.message
				}})
			}else{
				dispatch({type:'REQ_GANTI_PASSWORD_FAILED',payload:{
					msg:res.data.message
				}})
			}
		}).catch(err=>{
			console.log(err)
			dispatch({type:'REQ_GANTI_PASSWORD_FAILED',payload:{
				msg:err
			}})

		})
	}
}


export const getUser = (token)=>{	
	return dispatch =>{
		axios.get(url+'api/profile',{
			 headers: { "Authorization": "bearer "+token }
		}).then(res=>{
			console.log(res.data)
			dispatch({type:'SET_USER',payload:{
                user:res.data.data
            }})
		}).catch(err=>{
			console.log(err)
		})
	}
}


export const gPassword = (params)=>{	
	return dispatch =>{
		axios({
			method:"POST",
			url:url+'api/ganti-password',
			data:new URLSearchParams({
				password:params.password,
				id:params.id
			}),
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
		}).then(res=>{
			if(res.data==1){				 
				dispatch({type:'GANTI_PASSWORD_OK'})
			}
		}).catch(err=>{
			dispatch({type:'GANTI_PASSWORD_FAILED'})
			console.log(err)
		})
	}
}
