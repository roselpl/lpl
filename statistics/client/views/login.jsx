import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {observer,inject} from "mobx-react"; 
import { observable, action, computed ,configure,runInAction} from "mobx";
import { Menu, Icon } from 'antd';
import '../css/style.less';


@inject('allStore') @observer

class Login extends React.Component{
    //登录
    loginHandle=()=>{
        let userName=$(".userName").val();
        let passWord=$(".passWord").val();
        $.ajax({
            type:"post", 
            url:"/common/login", 
            async:true,
            data:{
                userName:userName,
                passWord:passWord
            },
            dataType: "JSON", 
            success:function(res){
                var _data=res.data;
                window.location("/");
           }
       })

    }
    render(){
        return (
            <div>
                <br/>
                &ensp; &ensp; 用户名：<input type="text" name="username" className="userName" /><br/>
                <br/>
                &ensp; &ensp;&ensp; 密  &ensp;&ensp;码:<input type="text" name="password" className="passWord" /><br/>
                <br/>
                &ensp; &ensp; &ensp; &ensp;  &ensp; &ensp; &ensp; &ensp; <button onClick={this.loginHandle}>登录</button>
                &ensp; &ensp;  <button><Link to='/registration'> 注册</Link></button>
            </div>
           
        )
    }

}


export default Login;