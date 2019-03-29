import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {observer,inject} from "mobx-react"; 
import { observable, action, computed ,configure,runInAction} from "mobx";
import { Menu, Icon } from 'antd';

@inject('allStore') @observer

class QAHome extends React.Component{
    render(){
        return (
            <div>登录页面</div>
        )
    }

}


export default QAHome;