import {Button, Card, Form, Input, message} from "antd";
import logo from '../../assets/logo.png'
import './index.scss'
import {fetchLogin} from "../../store/modules/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values)
        await dispatch(fetchLogin(values))

        navigate('/')
        message.success('login successfully')
    }


    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="logo" />
                <Form validateTrigger={['onBlur']} onFinish={onFinish}>
                    <Form.Item
                        name='mobile'
                        rules={[
                            { required: true, message: '请输入手机号' },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: 'Incorrect type of phone number',
                            }
                        ]}
                    >
                        <Input size="large" placeholder="Please enter your phone number" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            { required: true, message: 'please enter your code' },
                        ]}
                    >
                        <Input size="large" placeholder="please enter password" maxLength={6} />
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