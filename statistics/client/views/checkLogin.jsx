import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {observer,inject} from "mobx-react"; 
import { observable, action, computed ,configure,runInAction} from "mobx";
import { Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom';


@withRouter
class CheckLogin extends Component {
    componentDidMount() {
         // 在这里请求相关接口判断用户是否完成登录
        axios.get('xxxxx')
            .then(res => {
                if(res.status === 200) {
                    if(res.data.code === 0) {

                    }else {
                        this.props.history.push('/login')
                    }
                }
            })
    }
    render() {
        return null;
    }
}

export default CheckLogin;