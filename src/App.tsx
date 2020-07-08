import React, { useState, ChangeEvent } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import { Input, Typography, Row, Col, Layout, Card, Space } from "antd";

import { defaultText } from "./data/defaultText";
import "./App.css";

const App: React.FC = () => {
  const [text, setText] = useState<string>(defaultText);

  const { TextArea } = Input;
  const { Title } = Typography;
  const { Header, Content } = Layout;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  marked.setOptions({ breaks: true }); // Add <br> on single line breaks (carriage returns)

  return (
    <div>
      <Layout>
        <Typography>
          <Header className="header">
            <Title className="title">Markdown Previewer</Title>
          </Header>

          <Content className="content">
            <Row gutter={16}>
              <Col span={12}>
                <Card title="Input">
                  <TextArea
                    rows={20}
                    id="editor"
                    value={text}
                    onChange={handleChange}
                  />
                </Card>
              </Col>

              <Col span={12}>
                <Card title="Markdown">
                  <div
                    id="preview"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(marked(text)),
                    }}
                  ></div>
                </Card>
              </Col>
            </Row>
          </Content>
        </Typography>
      </Layout>
    </div>
  );
};

export default App;
