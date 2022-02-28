import * as React from 'react';
import {Card, Row} from 'react-bootstrap';


 function login()
 {
  return (
    <Card>
      <Row>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Email"
        />
         <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Password"
        />
       </Row>
       
    </Card>
  );
}
export default login;

