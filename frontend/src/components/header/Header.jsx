import React, { useState, useEffect } from "react";
import "./header.scss";
import { useSearchUsersQuery } from "../../context/api/userApi";

const Header = () => {
  const [value, setValue] = useState("");
  const { data, error } = useSearchUsersQuery({ value: value.trim() });

  console.log(error);
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav__logo">
          <h1>Logo</h1>
        </div>
        <div className="header__nav__form">
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            type="text"
          />
          {value.trim() && data?.payload?.length > 0 && (
            <div className="header__nav__value">
              {error ? (
                <p>{error.data.msg}</p>
              ) : (
                <>
                  {data.payload.map((el) => (
                    <div key={el.id} className="header__nav__value__item">
                      <div className="header__nav__value__item">
                        <p>{el.fname}</p>
                        <p>{el.username}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
