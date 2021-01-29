import React from 'react';
const child = ({team}) => {
  let data = team;
  return Object.entries(data).map(([key, value], i) => {
    console.log(key, value)
    return <div key={i}>member: {value.memberName}</div>
  });
}
export default child;