


import { Space, Spin } from 'antd';
import "../../Sass/Loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <p>Loading... Please Wait...</p>
      <Space size="middle"/>
      <Spin size="large" className="custom-spin" />
      <Space/>
    </div>
  );
}

