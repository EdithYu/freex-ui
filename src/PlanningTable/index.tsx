import React, { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';
import './index.less';

type Item = {
  className: string;
  title: string;
  value: string;
  unit: string;
};

type Props = {
  data: Item[];
  title: string;
  children?: ReactNode;
};

const PlanningTable = (props: Props) => {
  const { data, title, children } = props;

  return (
    <>
      <SectionTitle
        titleStyle={{ fontSize: 19 }}
        title={title}
        style={{ margin: '9px 0px' }}
      >
        {children}
      </SectionTitle>
      <table className="planing-table">
        <tbody>
          {data.map((item: Item, index: number) => {
            return (
              <tr className={item.className} key={index}>
                <td>{item.title}</td>
                <td>{item.value}</td>
                <td>{item.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PlanningTable;
