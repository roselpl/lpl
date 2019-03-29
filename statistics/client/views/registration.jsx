import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {observer,inject} from "mobx-react"; 
import { observable, action, computed ,configure,runInAction} from "mobx";
import { Menu, Icon } from 'antd';
import '../css/style.less';


@inject('allStore') @observer

class Registration extends React.Component{

        //注册
        registrationHandle=()=>{
            let userName=$(".userName").val();
            let passWord=$(".passWord").val();
            $.ajax({
                type:"post", 
                url:"/common/registration", 
                async:true,
                data:{
                    userName:userName,
                    passWord:passWord
                },
                dataType: "JSON", 
                success:function(res){
                    var _data=res.data;
                    window.location("/login");
               }
           })
    
        }

    render(){
        return (
            <div>
                <br/>
                &ensp; &ensp; 请输入用户名：<input type="text" name="userName" className="userName"/><br/>
                <br/>
                &ensp; &ensp; 请输入密码:<input type="text" name="passWord" className="passWord"/><br/>
                &ensp; &ensp; &ensp; &ensp; <button onClick={this.registrationHandle}>注册</button>
            </div>
           
        )
    }

}


export default Registration;