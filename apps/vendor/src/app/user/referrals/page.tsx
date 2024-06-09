import axios from 'axios';
import React from 'react';

const page = () => {

  const fun = async () : Promise<void> => {
    if(!window !== null) {
      const { data } = await axios.get('http://localhost:3000/api/user/referrals');
    }
  }
  return <div>page</div>;
};

export default page;


