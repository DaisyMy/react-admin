import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
const LayoutIndex = () => {
  const { Sider, Content } = Layout;

  return (
    <section className={styles.container}>
      <Sider>123</Sider>
      <Layout>
        <Content>
            456
          <Outlet /> {/* 路由出口 */}
        </Content>
      </Layout>
    </section>
  );
};

export default LayoutIndex;
