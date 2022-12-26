import { Row, Col, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPIPosts } from "../actions/PostsActions";
import { ButtonWrapper, TableWrapper } from "./style";
import { PlusCircleOutlined } from "@ant-design/icons";
import CreatePostModal from "./CreatePostModal";

export default function TablePosts() {
     const dispatch = useDispatch();
     const [openModal, setOpenModal] = useState(false);

     const { posts } = useSelector((reduxData) => reduxData.PostsReducers);

     useEffect(() => {
          dispatch(fetchAPIPosts());
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [posts])

     const columns = [
          {
               title: "User ID",
               key: "userId",
               dataIndex: "userId",
               align: "center"
          },
          {
               title: "ID",
               key: "id",
               dataIndex: "id",
               align: "center"
          },
          {
               title: "Title",
               key: "title",
               dataIndex: "title",
               align: "center",
               width: "25%"
          },
          {
               title: "Body",
               key: "body",
               dataIndex: "body",
               align: "center",
               width: "50%"
          }
     ]

     const onBtnAddNewClick = () => {
          setOpenModal(true);
     }

     const closeModal = () => {
          setOpenModal(false);
     }

     return (
          <>
               <Row>
                    <Col span={24} style={{ textAlign: "center" }}>
                         <h2><b>Table Posts</b></h2>
                    </Col>
               </Row>
               <ButtonWrapper>
                    <Col span={24}>
                         <Button
                              type="primary"
                              className="action-btn"
                              icon={<PlusCircleOutlined />}
                              onClick={onBtnAddNewClick}
                         >
                              ADD NEW POST
                         </Button>
                    </Col>
               </ButtonWrapper>
               <TableWrapper>
                    <Col span={24}>
                         <Table
                              bordered
                              size="default"
                              columns={columns}
                              dataSource={posts || []}
                              rowKey={record => record.id}
                              locale={{ emptyText: "No data" }}
                         />
                    </Col>
               </TableWrapper>
               <CreatePostModal openProp={openModal} closeProp={closeModal} posts={posts} />
          </>
     )
}