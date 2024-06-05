import { default as React, ReactNode } from 'react';
import './index.less';
import LongIcon from './title-long-bg.png';
import ShortIcon from './title-short-bg.png';
type Props = {
  title?: string;
  titleStyle?: Object;
  style?: Object;
  children?: ReactNode;
  long?: boolean;
};

export default class SectionTitle extends React.Component<Props> {
  render() {
    const {
      title = '模块名称',
      titleStyle = {},
      style = {},
      children,
      long,
    } = this.props;
    return (
      <div
        style={{
          width: '100%',
          height: '40px',
          background: `url(${long ? LongIcon : ShortIcon}) no-repeat left`,
          backgroundSize: '100% 100%',
          display: 'flex',
          alignItems: 'center',
          ...style,
        }}
        className="section-title"
      >
        <span
          style={{
            fontSize: '16px',
            color: '#FFFFFF',
            paddingLeft: '46px',
            ...titleStyle,
          }}
          className=""
        >
          {title}
        </span>
        {children}
      </div>
    );
  }
}
