import { Col, Form, Input, InputNumber, Modal, notification } from "antd";
import TextArea from "antd/es/input/TextArea";

const layout = {
     labelCol: {
          span: 24,

     },
     labelAlign: 'left',
     wrapperCol: {
          span: 24,
     },
     layout: "vertical"
};

const validateMessages = {
     // eslint-disable-next-line no-template-curly-in-string
     required: '${label} is required!',
};

export default function CreatePostModal({ openProp, closeProp, posts }) {
     const [form] = Form.useForm();

     // const getNextId = () => {
     //      let nextId = 0;
     //      if (posts.length === 0) {
     //           nextId = 1;
     //      } else {
     //           nextId = posts[posts.length - 1].id + 1;
     //      }
     //      return nextId;
     // }

     const onFinish = () => {
          form.validateFields().then((values) => {
               const payload = {
                    userId: values?.userId,
                    title: values?.title,
                    body: values?.body
               }
               return handleCreateNewPost(payload);
          })
     }

     // const fetchAPICreatePost = async (url, body) => {
     //      const response = await fetch(url, body);
     //      const data = await response.json();
     //      return data;
     // }

     const openNotification = (placement, method, description) => {
          notification[method]({
               message: "Notification",
               description: description,
               placement
          })
     }

     const handleCreateNewPost = async (payload) => {
          const body = {
               method: "POST",
               body: JSON.stringify(payload),
               headers: {
                    'Content-type': 'application/json; charset=UTF-8'
               }
          }
          await fetch("https://jsonplaceholder.typicode.com/posts", body)
               .then((res) => {
                    if (res.status !== 201) {
                         return
                    } else {
                         return res.json();
                    }
               })
               .then((data) => {
                    posts.unshift(data);
                    console.log(data);
                    openNotification('bottomRight', 'success', 'Create new post successfully!');
                    closeProp();
                    form.resetFields();
               })
               .catch((err) => {
                    console.log(err);
                    openNotification('bottomRight', 'error', 'Something went wrong!')
               })
     }

     return (
          <>
               <Modal
                    title="Add A New Post"
                    open={openProp}
                    onCancel={closeProp}
                    okText="Create Post"
                    onOk={onFinish}
               >
                    <Form
                         {...layout}
                         form={form}
                         validateMessages={validateMessages}
                    >
                         <Col span={24}>
                              <Form.Item
                                   name={["userId"]}
                                   label="User ID"
                                   rules={[
                                        {
                                             required: true,
                                             message: "User ID must be a number!"
                                        }
                                   ]}
                              >
                                   <InputNumber placeholder="Please enter User ID" style={{ width: "100%" }} />
                              </Form.Item>
                         </Col>
                         <Col span={24}>
                              <Form.Item
                                   name={["title"]}
                                   label="Title"
                                   rules={[
                                        {
                                             required: true
                                        }
                                   ]}
                              >
                                   <Input placeholder="Please enter title" />
                              </Form.Item>
                         </Col>
                         <Col span={24}>
                              <Form.Item
                                   name={["body"]}
                                   label="Body"
                                   rules={[
                                        {
                                             required: true
                                        }
                                   ]}
                              >
                                   <TextArea rows={4} placeholder="Please enter body" />
                              </Form.Item>
                         </Col>
                    </Form>
               </Modal>
          </>
     )
}