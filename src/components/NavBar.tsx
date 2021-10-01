import { Layout, Row ,Menu} from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { useTypedSelector } from '../ hooks/useTypedSelector';
import { RouteNames } from '../routes';

const NavBar: FC= () => {
  const {isAuth}= useTypedSelector(state=> state.auth)
  const router = useHistory()
  return (
   <Layout.Header>
     <Row justify="end">
       {isAuth
       ?
        <>
        <div style={{color:'red'}}>
          Ixa94
        </div>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item onClick={()=>console.log('exit')} key={1}>
              EXIT
          </Menu.Item>
        </Menu>
        </>
      :
        <>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item onClick={()=> router.push(RouteNames.LOGIN)} key={1}>
              Login
          </Menu.Item>
        </Menu>
        </>
      }
       
     </Row>
   </Layout.Header>
  );
};

export default NavBar;
