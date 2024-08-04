import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'

const { Option } = Select

const Publish = () => {
    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '发布文章' },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 1 }}
                >
                    <Form.Item
                        label="title"
                        name="title"
                        rules={[{ required: true, message: 'please enter title' }]}
                    >
                        <Input placeholder="please enter your title" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="channel"
                        name="channel_id"
                        rules={[{ required: true, message: 'please choose channel' }]}
                    >
                        <Select placeholder="please choose your channel" style={{ width: 400 }}>
                            <Option value={0}>AI</Option>
                            <Option value={1}>Technology</Option>
                            <Option value={2}>Science</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="content"
                        name="content"
                        rules={[{ required: true, message: 'please enter content' }]}
                    ></Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                publish
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish