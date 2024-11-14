import React from 'react';

function ShowContactsTable({x})
{  return(
<React.Fragment>
    <tr>
    <td>{x.SLNO}</td>
    <td>{x.Name}</td>
    <td>{x.MobNo}</td>
    </tr>
</React.Fragment>
)
}
export default ShowContactsTable;