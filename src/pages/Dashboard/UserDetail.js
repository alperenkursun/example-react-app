import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  let { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);
  console.log(location);

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_ENDPOINT);
    if (!user?.id) {
      axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`).then((res) =>
        setUser(res.data)
      );
    }
  }, [id, user]);

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
