import React, { Fragment } from "react";
import BlockRow from "../../components/block-row";
import Block from "../../components/block";
import data from "../../data/home.json";
import config from "../../config/application.json";

export default ({ match, history }) => (
  <Fragment>
    {
      data.sections.map((row, ri) => {
        let rowAmount = 0;
        return <BlockRow key={ri} title={row.title}>
          {row.items.map((item, ii) => {
            if (config.contentRowMaxLength >= rowAmount) {
              return <Block 
                key={ii} 
                id={item.id}
                type={item.type}
                title={item.name} 
                image={item.image} />
            }
            rowAmount++;
            return null;
          })}
        </BlockRow>
      })
    }
  </Fragment>
);
