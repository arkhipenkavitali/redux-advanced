import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreater";

function App() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
  return (
    <div className="App">
        {isLoading && <p>Loading</p>}
        {error && <p>{error}</p>}
        {JSON.stringify(users,null,2)}
    </div>
  );
}

export default App;
