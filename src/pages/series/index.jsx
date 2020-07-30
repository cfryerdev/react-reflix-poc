import React, { Fragment } from "react";
import BlockRow from "../../components/block-row";
import Block from "../../components/block";
import data from "../../data/series.json";

export default ({ match, history }) => (
  <Fragment>
    {
      data.sections.map((row, ri) => {
        return <BlockRow key={ri} title={row.title}>
          {row.items.map((item, ii) => {
            return <Block 
                      key={ii} 
                      id={item.id}
                      type={item.type}
                      title={item.name} 
                      image={item.image} />
          })}
        </BlockRow>
      })
    }
  </Fragment>
);
