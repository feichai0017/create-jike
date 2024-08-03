import {Button, Card, Form, Input} from "antd";
import logo from '../../assets/logo.png'
import './index.scss'

const Login = () => {
    const onFinish = (values) => {
        console.log(values)
    }


    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="logo" />
                <Form validateTrigger={['onBlur']} onFinish={onFinish}>
                    <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'please enter your username',
                        },
                    ]}>
                        <Input size='large' placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'please enter your password',
                        },
                    ]}>
                        <Input size='large' placeholder="Password"/>
                    </Form.Item>
                    <Form.Item
                    name='mobile'
                    rules={[
                        { required: true, message: '请输入手机号' },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: 'Incorrect type of phone number',
                        }
                    ]}>
                        <Input size="large" placeholder="Please enter your phone number" />
                    </Form.Item>
                    <br/>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
};


export default Login;